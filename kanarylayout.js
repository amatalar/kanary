import { Data ,Query ,SymptomAnalysis} from "./KanaryLab.js"
import { closest} from './stringsimilarity.js'

let symptoms= ['chest pain','dyspnea','cough','chest']
let questionforum= function(questioning ,listname,array){
         
    let kanary = document.getElementById('kanarylab')
    let forum =document.createElement('form')
    let quest = document.createElement('p')
    quest.innerHTML=questioning
    forum.appendChild(quest)
    let input =document.createElement('input')
    input.setAttribute('id',`${listname}n`)
    input.setAttribute('list',listname)
    let datalist=document.createElement('datalist')
    datalist.setAttribute('id',listname)
    forum.appendChild(input)
    forum.appendChild(datalist)
    for (let x of array){
     let option =document.createElement('option')
     option.setAttribute('value',x)
     datalist.appendChild(option) 
    }
    kanary.appendChild(forum)



}
let diagnosis =function(){
  let diagnosis = new SymptomAnalysis($('#complain').val())
  diagnosis.main()
  $('#diagnosis').text(`complain analysis: ${ diagnosis.analysis}`)
}
let diffentialDiagnosis=function (){
  
  let dd= document.getElementById('dd')
  $('#dd').empty()

  console.log(SymptomAnalysis.pobabilityDD)
  for(let x=0 ;x<Object.keys(SymptomAnalysis.pobabilityDD).length;x++){
    let li = document.createElement('li')
    dd.appendChild(li)
    li.innerHTML=`${Object.keys(SymptomAnalysis.pobabilityDD)[x]}: ${Object.values(SymptomAnalysis.pobabilityDD)[x]}`
    
  }
}


class Kanary {


    
    
    symptomanaylsis(symptom){
        $(document).ready(function(){
          let kanary = document.getElementById('kanarylab')
          $('#kanarylab').empty()

            let values = []
            let sName = []
            let data = []
            let question = []

            for (let x in symptom.symptomValue) {
              values.push(x)
            }
            for (let x in symptom.symptomName) {
                sName.push(symptom.symptomName[x])
              }
              for (let x in symptom.symptomQuestions) {
                question.push(symptom.symptomQuestions[x])
          
              }
              for (let x in symptom.symptomData) {
                data.push(symptom.symptomData[x])
              }

              for (let x =0;x<question.length;x++){
                          
                questionforum(question[x],sName[x],data[x])
                $(`#${sName[x]}n`).on('input',function(){
                  symptom.symptomValue[values[x]]=$(`#${sName[x]}n`).val()
                  const complian = new SymptomAnalysis('chest pain')
                 

                 complian.main()
                 $('#diagnosis').text(complian.analysis) 
                 diagnosis()


                })
        
                
                
                
                 
              
                
              }


        })

    }

}

$(document).ready(function (){
    $('#button').click(function(){
        let chestpain=new Kanary()
        Query.generate('chestPain')
        chestpain.symptomanaylsis(Data.symptoms.chestPain)


    })
    $('#diagnosisbtn').click(function(){
      console.log('starting')
      const complian = new SymptomAnalysis('chest pain')
      complian.main()
      $('#diagnosis').text(complian.analysis)
      diagnosis()
    })
 


})

let complain= function (arg){
  
    let complain=new Kanary()
    Query.generate(arg)
    console.log('their')
    complain.symptomanaylsis(Data.symptoms[arg])

  
}


$(document).ready(function(){
  $('#complainf').submit(function(event){
    event.preventDefault()
    $('#dymdiv').empty()
    let div =document.getElementById('dymdiv')
    
    
    let complainop;
    if (symptoms.includes($('#complain').val())){
      complainop=$('#complain').val()
      complain(complainop)
    }
    if (!symptoms.includes($('#complain').val())){
      let tempop;
      tempop =closest($('#complain').val(),symptoms)
      console.log(tempop)
      
      let dym = document.createElement('p')
      dym.setAttribute('id','dym')
      dym.innerHTML=`did you mean ${tempop}`
      let yes=document.createElement('p')
      yes.setAttribute('id','yes')
      yes.innerHTML='yes'
      let no = document.createElement('p')
      no.setAttribute('id','no')
      no.innerHTML='no'
      div.appendChild(dym)
      div.appendChild(yes)
      div.appendChild(no)
      

      
      $('#yes').click(function (){
        complainop =tempop
        
        complain(complainop)
        dym.remove()
        yes.remove()
        no.remove()

      })
      $('#no').click(function(){
        $('#dym').text('kindly refine your input')
        yes.remove()
        no.remove()
        dym.remove()

      })
      
    }

    
    
    
    
  })
  $('#ddid').click(function (){
    diffentialDiagnosis()
  })
})