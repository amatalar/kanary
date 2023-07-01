
console.log('hello kanary')
//coding upon tasks 
//task common question generator +
//task 1 symptom analysis -/++++++
//multiple symptom analysis ++/---
//all cardiac and chest symptom and disease with lab and drugs database(start with cough++ , palpitation . ll edema , haemoptysis)
//start work on user interface

class QuestionGenerator {
    static site = function(argument){
        return `where is the site of ${argument} ?`
    }
    static onset=function(argument){
        return `what is the onset of ${argument} ?`
    }
    static course =function(argument){
        return `what is the course of ${argument} ?`
    }
    static duration= function(argument){
        return `what is the duration of ${argument} ?`
    }
    static increase= function(argument){
        return `what do increase the ${argument} ?`
    }
    static decrease =function(argument){
        return `what do decrease the ${argument} ?`
    }
    static charcter= function (argument){
        return `what is the charcter of ${argument} ?`
    }
    static radiation = function (argument){
        return `what is the radiation of ${argument} ?`
    }
    static presence = function (argument){
        return `is ${argument} present ?`
    }
    static presenceOfCough=function (){
        return 'do you complian of cough ?'
    }
    static presenceOfChestPain=function (){
        return 'do you complian of chest pain ?'
    }
    static presenceOfDyspnea=function (){
        return 'do you complian of dyspnea ?'
    }
    static presenceOfllEdema=function (){
        return 'do you complian of lower limb edema ?'
    }
    static presenceOfFever=function (){
        return 'do you complian of fever ?'
    }
    static presenceOfWeakness=function (){
        return 'do you complian of weakness ?'
    }
    static presenceOfWeightLoss= function (){
        return 'do you complian of weight loss ?'
    }
    static preciptating=function(symptom){
        return `do you notice anything that trigger or preciptate ${symptom}`
    }
    static presenceOfHeartburn = function (){
        return 'do you complian of heartburn ?'
    }


    
}
export class Query {
    static generate = function (sympt){
        for (let x in Data.symptoms[sympt].symptomValue){
           Object.assign(Data.symptoms[sympt].symptomInput, {[ x.toString()]:Data.symptoms[sympt].name.toString()+x.toString()+'Input'})
        }
        for (let x in Data.symptoms[sympt].symptomValue){
            Object.assign(Data.symptoms[sympt].symptomName, {[ x.toString()]:Data.symptoms[sympt].name.toString()+x.toString()})
         }
        
        for (let x = 7 ;x<Object.keys(Data.symptoms[sympt]).length;x++) {
            Object.assign(Data.symptoms[sympt].diagnosisNames, {[Object.keys(Data.symptoms[sympt])[x]]:Object.keys(Data.symptoms[sympt])[x]})
        }
        
  
    }
}

   



//task database for symptoms (start by chestpain , dyspnea , tachycardia)
export class Data {
   static symptomName={
    chestPain:'chest pain',
    dyspnea :'dyspnea',
    
}
    
static symptoms = {
    symptom :{
        name:'',
        symptomValue:{},
        symptomData:{},
        symptomQuestions:{},
        symptomInput:{},
        symptomName:{},
        diagnosisNames:{},
    },
    ['chest pain']: {
        name:'chestPain',
        symptomValue:{
        site:'' ,
        onset: '',
        course: '',
        duration: '',
        charcter: '',
        radiation:'',
        increase: '',
        decrease: ''},
        

        
        symptomData:{
        siteData:['central','peripheral'],
        onsetData:['sudden','rapid','gradual'],
        courseData:['static','progressive','regressive'],
        duartionData:[5,10,20,30,40,50,60],
        charcterData:['heaviness','crushing','stabbing','tearing','stitching','pressure','band'],
        radiationData:['neck','shoulders','left shoulder','right shoulder','shoulder','back','no radiation'],
        increaseData:['effort','exercise','moving','breathing','pressure'],
        decreaseData:['rest','analgesic','sublingual tablet','nitrate','nothing']},

        symptomQuestions:{
        siteQuestion:QuestionGenerator.site('chest pain'),
        onsetQuestion:QuestionGenerator.onset('chest pain'),
        courseQuestion:QuestionGenerator.course('chest pain'),
        durationQuestion:QuestionGenerator.duration('chest pain'),
        charcterQuestion:QuestionGenerator.charcter('chest pain'),
        radiationQuestion:QuestionGenerator.radiation('chest pain'),
        increaseQuestion:QuestionGenerator.increase('chest pain'),
        decreaseQuestion:QuestionGenerator.decrease('chest pain')},

        symptomInput:{
       },

        symptomName:{
       },
       diagnosisNames:{

    },



        angina: {
            diagnosisName:'angina',
            site: ['central'],
            onset: ['gradual','sudden'],
            course:['static','regressive'],
            duration:[5,10,20,30],
            charcter: ['crushing', 'heaviness', 'heavy','pressure'],
            radiation :['neck','shoulders','left shoulder','right shoulder','shoulder'],
            increase:['effort','exercise'],
            decrease:['rest','sublingual tablet','nitrate'],
            discrimnative:['charcter','radiation','increase','decrease'],
            exclusion:['charcter']
           
        },
        pleuritic: {
            diagnosisName:'pleuritic chest pain',
            site: ['peripheral'],
            onset: ['sudden'],
            charcter: ['stabbing', 'stitching'],
            radiation:['back','no radiation'],
            course:['static','regressive'],
            duration:[1,5,10],
            increase:['moving','breathing'],
            decrease:['analgesic','nothing'],
            discrimnative:['charcter','radiation','increase','decrease'],
            exclusion:['charcter']
           
        },
        muscular:{
            diagnosisName :'muscular chest pain',
            site: ['peripheral'],
            onset: ['sudden'],
            charcter: ['pressure', 'band'],
            radiation:['no radiation'],
            course:['static','regressive'],
            duration:[1,5,10,20.30,40],
            increase:['pressure','moving'],
            decrease:['analgesic','nothing'],
            discrimnative:['charcter','radiation','increase','decrease'],
            exclusion:['charcter']

        },

    },
    dyspnea:{
        name: 'dyspnea',
        symptomValue:{
        onset:'',
        course:'',
        duration:'',
        increase:'',
        decrease:'',
        cough:'',        
        chestPain:'',
        weakness:'',
        fever:'',
        llEdema:''},
        

        symptomData:{
        onsetData:['sudden','rapid','gradual'],
        courseData:['static','regressive','progressive'],
        duartionData:[10,20,30,40],
        increaseData:['effort','exercise','pollen','smoke','end of the day',],
        decreaseData:['rest','inhaler'],
        cough:['present','not'],
        chestPain:['present','not'],
        weakness:['present','not'],
        fever:['present','not'],
        llEdema:['present','not']},


        symptomInput:{},
        symptomName:{},
        diagnosisNames:{},

        symptomQuestions:{
        onsetQuestion:QuestionGenerator.onset('dyspnea'),
        courseQuestion:QuestionGenerator.course('dyspnea'),
        durationQuestion:QuestionGenerator.duration('dyspnea'),
        increaseQuestion:QuestionGenerator.increase('dyspnea'),
        decreaseQuestion:QuestionGenerator.decrease('dyspnea'),
        coughPresenceQuestion:QuestionGenerator.presenceOfCough(),
        chestPainPresenceQuestion:QuestionGenerator.presenceOfChestPain(),
        weaknessPresenceQuestion:QuestionGenerator.presenceOfWeakness(),
        feverPresenceQuestion:QuestionGenerator.presenceOfFever(),
        llEdemaPresenceQuestion:QuestionGenerator.presenceOfllEdema()},






        respiratoryDyspnea :{
            diagnosisName :'asthma',
            onset:['sudden','gradual'],
            course:['static','progressive','regressive'],
            duration:[5,10,20,30],
            increase:['pollen','smoke'],
            decrease:['inhaler'],
            cough :['present','not'],
            fever :['present','not'],
            chestPain:['present','not'],
            weakness:['not'],
            llEdema:['present','not'],
            discrimnative:['increase','decrease'],
            exclusion:['weakness']

        },
        cardiacDyspnea:{
            diagnosisName:'cardiac dyspnea',
            onset:['sudden','gradual'],
            course:['static','progressive','regressive'],
            duration:[5,10,20,30],
            increase:['effort','exercise'],
            decrease:['rest'],
            cough :['not'],
            fever :['present','not'],
            chestPain:['present','not'],
            weakness:['not'],
            llEdema:['present','not'],
            discrimnative:['increase','decrease'],
            exclusion:['weakness'],


        },
        neurologicalDyspnea:{
            diagnosisName: 'neurological dyspnea',
            onset:['sudden','gradual'],
            course:['static','progressive','regressive'],
            duration:[5,10,20,30],
            increase:['end of the day','effort'],
            decrease:['rest'],
            cough :['not'],
            fever :['present','not'],
            chestPain:['not'],
            weakness:['present'],
            llEdema:['not'],
            discrimnative:['increase','weakness'],
            exclusion:['chestPain','cough','weakness','llEdema']

        },     


    },
    cough :{
        name:'cough',
        symptomValue:{

            durationPattern :'',
            temporalPattern:'',
            preciptating:'',
            sputum:'',
            colorAndCharcterOfSputum:'',
            wheeze:'',
            nasalAndThroatSymptom:'',
            fever:'',
            weightLoss:'',
            heartBurn:'',
            recentInfection:''
         
        },
        symptomData:{
            durationPatternData :['seasonal','recent','more than 3 weeks','more than 3 months'],
            temporalPatternData:['more in morning','more in night','nothing'],
            preciptatingData:['nothing','pollen','smoke','food','lying flat'],
            sputumData:['dry cough','with sputum'],
            colorAndCharcterOfSputumData:['dry cough','yellowish/greenish sputum','white sputum','brown and foul smelling sputum','blood(haemoptysis)'],
            wheezeData:['present','not'],
            nasalAndThroatSymptomData:['present','not'],
            feverData:['present','not','fever with night sweat'],
            weightLossData:['present','not'],
            heartBurnData:['present','not'],
            recentInfectionData:['yes','no']
        },
        symptomQuestions:{
            durationPatternQuestion :QuestionGenerator.duration('cough'),
            temporalPatternQuestion:'what is the temporal pattern of cough ?',
            preciptatingQuestion:QuestionGenerator.preciptating('cough'),
            sputumQuestion:'is their sputum ?',
            colorAndCharcterOfSputumQuestion:'what is color and charcter of sputum ?',
            wheezeQuestion:'is their wheezing ?',
            nasalAndThroatSymptomQuestion:'do you complian of nasal or throat symptom ?',
            feverQuestion:QuestionGenerator.presenceOfFever(),
            weightLossQuestion:QuestionGenerator.presenceOfWeightLoss(),
            heartBurnQuestion:QuestionGenerator.presenceOfHeartburn(),
            recentInfectionQuestion:'did you have recent common cold after it cough started ?'

        },
        symptomInput:{},
        symptomName:{},
        diagnosisNames:{},

        asthma:{
            diagnosisName:'asthma',
            durationPattern:['seasonal','more than 3 weeks','more than 3 months'],
            temporalPattern:['more in morning','more in night','nothing'],
            preciptating:['pollen','smoke'],
            sputum:['dry cough'],
            colorAndCharcterOfSputum:['dry cough'],
            wheeze:['present','not'],
            nasalAndThroatSymptom:['present','not'],
            fever:['not'],
            weightLoss:['not'],
            heartBurn:['not'],
            recentInfection:['yes','no'] ,
            discrimnative:['durationPattern','preciptating','wheeze'] ,
            exclusion :['weightLoss','fever','colorAndCharcterOfSputum','preciptating']     

        },
        chronicBronchitis:{
            diagnosisName:'chronic bronchitis',
            durationPattern :['more than 3 months'],
            temporalPattern:['more in morning'],
            preciptating:['smoke'],
            sputum:['with sputum'],
            colorAndCharcterOfSputum:['white sputum'],
            wheeze:['present','not'],
            nasalAndThroatSymptom:['not'],
            fever:['not'],
            weightLoss:['not'],
            heartBurn:['not'],
            recentInfection:['yes','no'],
            discrimnative:['durationPattern','temporalPattern','colorAndCharcterOfSputum'],
            exclusion :['fever','weightLoss','sputum','heartBurn','durationPattern']

        },
        tuberculosis:{
            diagnosisName:'tuberculosis',
            durationPattern :['more than 3 months'],
            temporalPattern:['nothing'],
            preciptating:['nothing'],
            sputum:['with sputum'],
            colorAndCharcterOfSputum:['yellowish/greenish sputum','blood(haemoptysis)'],
            wheeze:['not'],
            nasalAndThroatSymptom:['not'],
            fever:['fever with night sweat'],
            weightLoss:['present','not'],
            heartBurn:['not'],
            recentInfection:['no'],
            discrimnative:['fever','durationPattern','colorAndCharcterOfSputum'],
            exclusion:['preciptating','wheeze','heartBurn','durationPattern']

        },
        bronchiactasis:{
            diagnosisName:'bronchiactasis',
            durationPattern :['more than 3 months'],
            temporalPattern:['nothing'],
            preciptating:['nothing'],
            sputum:['with sputum'],
            colorAndCharcterOfSputum:['brown and foul smelling sputum'],
            wheeze:['present','not'],
            nasalAndThroatSymptom:['not'],
            fever:['present','not'],
            weightLoss:['present','not'],
            heartBurn:['not'],
            recentInfection:['no'],
            discrimnative:['durationPattern','colorAndCharcterOfSputum'],
            exclusion:['sputum','durationPattern']

        },
        GERD:{
            diagnosisName:'GERD',
            durationPattern :['recent','more than 3 weeks','more than 3 months'],
            temporalPattern:['more in night'],
            preciptating:['food','lying flat'],
            sputum:['dry cough'],
            colorAndCharcterOfSputum:['dry cough'],
            wheeze:['not'],
            nasalAndThroatSymptom:['not'],
            fever:['not'],
            weightLoss:['not'],
            heartBurn:['present'],
            recentInfection:['no'],
            discrimnative:['temporalPattern','heartBurn','preciptating'],
            exclusion:['fever','wheeze','weightLoss']

        },
        upperRespiratoryInfection:{
            diagnosisName:'upper respiratory tract infection',
            durationPattern :['recent'],
            temporalPattern:['more in morning','more in night','nothing'],
            preciptating:['nothing'],
            sputum:['dry cough','with sputum'],
            colorAndCharcterOfSputum:['dry cough','yellowish/greenish sputum','white sputum'],
            wheeze:['not'],
            nasalAndThroatSymptom:['present','not'],
            fever:['present','not'],
            weightLoss:['not'],
            heartBurn:['not'],
            recentInfection:['no'],
            discrimnative:['fever','durationPattern'],
            exclusion:['weightLoss','wheeze','recentInfection','durationPattern']

        },
        RespirartoryInfection:{
            diagnosisName:'lower respiratory infection',
            durationPattern :['recent'],
            temporalPattern:['more in morning','more in night','nothing'],
            preciptating:['nothing'],
            sputum:['with sputum'],
            colorAndCharcterOfSputum:['yellowish/greenish sputum'],
            wheeze:['not'],
            nasalAndThroatSymptom:['not'],
            fever:['present','not'],
            weightLoss:['not'],
            heartBurn:['not'],
            recentInfection:['no'],
            discrimnative:['fever','colorAndCharcterOfSputum','durationPattern'],
            exclusion:['weightLoss','recentInfection','wheeze','durationPattern']

        },
        lungCancer :{
            diagnosisName:'lung cancer',
            durationPattern :['more than 3 months'],
            temporalPattern:['nothing'],
            preciptating:['nothing'],
            sputum:['with sputum'],
            colorAndCharcterOfSputum:['white sputum','blood(haemoptysis)'],
            wheeze:['not'],
            nasalAndThroatSymptom:['not'],
            fever:['not'],
            weightLoss:['present'],
            heartBurn:['not'],
            recentInfection:['no'],
            discrimnative:['weightLoss','colorAndCharcterOfSputum','durationPattern'],
            exclusion:['recentInfection','preciptating','durationPattern','durationPattern']

        },
        postViralCough :{
            diagnosisName:'post viral cough',
            durationPattern :['recent'],
            temporalPattern:['more in morning','more in night','nothing'],
            preciptating:['pollen','smoke','nothing'],
            sputum:['dry cough'],
            colorAndCharcterOfSputum:['dry cough'],
            wheeze:['not'],
            nasalAndThroatSymptom:['not'],
            fever:['not'],
            weightLoss:['not'],
            heartBurn:['not'],
            recentInfection:['yes'],
            discrimnative:['recentInfection','durationPattern'],
            exclusion:['fever','weightLoss','nasalAndThroatSymptom','durationPattern']
        },
     
        



    }
}
static diseases={
    asthma:{
        disease:'asthma',
        symptom:['dyspnea','cough'],
        exam:{
            general:['skin allergy','nasal polyp'],
            chest:['prologed expiratory phase','wheezing']

        },
        investigation:{
            requests :['respiratory study','chest x-ray','cbc'],
            findings :['obstructive pattern in respiratoy study','normal chest x-ray','esinophilia']
        },
        treatment:{
            medication:['short acting beta agonist inhaler','long acting beta agonist inhaler','steroid inhaler','combined bronchodilator and steroid','steroid']
        },
        advise :['avoid pollen','stop smoking']
    },
    angina :{
        disease:'angina',
        symptom:['chest pain','dyspnea'],
        exam :{
            general :['hypotension','hypertension','not felt peripheral pulsation'],
            cardiac :['tachycardia','s4','new murmer']
        },
        investigation:{
            requests :['ECG','stress ECG','CBC','cardiac enzymes','echocardiogarphy','lipid profile','HbA1c'],
            findings :['st segment elevation or depression and t wave inversion in ECG','ischemic changes in stress ECG','anemia in cbc','elevated cardiac enzymes','SWMA in echocardiography','hyperlipidemia ', 'DM in HgA1c']
        },
        treatment :{
            medication:['sublingual nitrate','vasodilator','antiplatelet'],
            measures :['cardiac stent']
        },
        advise :['stop smoking','rest']
    }
    
    
}
}
let symptomCollection =[]



export class CollectDiagnosis{
   
   static diagnosisCollection={}
   static  main=()=>{
        if (SymptomAnalysis.differentialDiagnosisArray.includes('angina')&&SymptomAnalysis.differentialDiagnosis['cardiac dyspnea']>30){
           let factor = (((SymptomAnalysis.differentialDiagnosis['angina']-Data.symptoms.chestPain.angina.importanceFactor)/8)/4)*90
           
            CollectDiagnosis.diagnosisCollection['heart failure']=factor

        }
     
    }
 
}

export class SymptomAnalysis {
    constructor(symptom){
        this._symptom= symptom
        this.analysis=''

    }
    
    static differentialDiagnosis={}
    static differentialDiagnosisArray=[]
    static obj={}
    static ddOfFIve=[]
    static pobabilityDD={}
    static symptomDiagnosis={}
    
     main (){
        
      
         if (this._symptom==='chest pain'){
            this.ChestPain()
         }
         if (this._symptom==='dyspnea'){ 
            this.Dyspnea()
         }
         if (this._symptom==='cough'){
            this.Cough()
         }
         
    }

    GenerateDifferntialDiagnosis(){
        let arraydd=Object.entries(SymptomAnalysis.obj)
        let arraynum=arraydd.sort((a, b) => b[1] - a[1]) 
        let arrayprob=Object.entries(SymptomAnalysis.pobabilityDD)
        let arraynumprob=arrayprob.sort((a, b) => b[1] - a[1])   

        for (let x =0 ;x<arraynum.length;x++){
             delete SymptomAnalysis.differentialDiagnosis[arraynum[x][0]] 
            SymptomAnalysis.differentialDiagnosis[arraynum[x][0]]=arraynum[x][1] 
            
        }
        for (let x =0 ;x<arraynumprob.length;x++){
            delete SymptomAnalysis.pobabilityDD[arraynumprob[x][0]] 
           SymptomAnalysis.pobabilityDD[arraynumprob[x][0]]=arraynumprob[x][1]
           
           
       }
        SymptomAnalysis.differentialDiagnosisArray =Object.keys(SymptomAnalysis.differentialDiagnosis).sort((a,b)=>b[SymptomAnalysis.differentialDiagnosis]-a[SymptomAnalysis.differentialDiagnosis])
        SymptomAnalysis.ddOfFIve=SymptomAnalysis.differentialDiagnosisArray.slice(0,5)
        


    }
   
    SymptomInputAnalysis(diagnosis,input,symptom,importanceFactor){
        let symptomDiagnosis={}
        let pobabilityDD={}
        let array =[]
        for (let x in input ){
            array.push(x)
        }
       

        
        
        
        let discrimnative=[]
        for (let x of diagnosis.discrimnative){
            discrimnative.push (x)
        }
        let exclusion =[]
        for (let x of diagnosis.exclusion){
            exclusion.push (x)
        }


        

        let z =0
        let g=[]
        for (let x in input){
            for (let c of discrimnative){
                if (x=== c && diagnosis[c].includes(input[c]) ){
                    g.push((array.length))
                }
            }
            for (let c of exclusion){
                if (x===c && !diagnosis[c].includes(input[c])&&input[c] ){
                    g.push(-1*(array.length))
                    
                }
            }


            if(x==='duration'){
                if (input[x]>diagnosis[array[z]][0]&&input[x]<diagnosis[array[z]][diagnosis[array[z]].length-1]){
                    g.push(1)
                }
            }
            else if (diagnosis[array[z]].includes(input[x])){ 
                g.push(1)
            }
            else{g.push(0)}
            
            z++
        }

        let sumG = g.reduce((a,b)=>a+b)

        
        
        if (sumG>(((array.length)))){
            SymptomAnalysis.obj[[diagnosis.diagnosisName]]=sumG+importanceFactor
            if ((sumG)>array.length){
                SymptomAnalysis.pobabilityDD[[diagnosis.diagnosisName]]=(sumG/((array.length)+(discrimnative.length*array.length)))*100
                pobabilityDD[[diagnosis.diagnosisName]]=(sumG/((array.length)+(discrimnative.length*array.length)))*100
            }
            


            
        } 
        if ((sumG)<array.length){
            
            delete SymptomAnalysis.pobabilityDD[[diagnosis.diagnosisName]]
            delete pobabilityDD[[diagnosis.diagnosisName]]
          
        } 

        console.log(pobabilityDD)

        Object.assign(symptomDiagnosis,{[symptom]:{}})
        for (let i in pobabilityDD){

            Object.assign(symptomDiagnosis[symptom],{[i]:pobabilityDD[i]})
        }

       console.log(symptomDiagnosis)
       Object.assign(SymptomAnalysis.symptomDiagnosis,symptomDiagnosis)
       console.log(SymptomAnalysis.symptomDiagnosis)
       

       let tc = x => (x>=1)


        if (g.every(tc)){
            this.analysis=diagnosis.diagnosisName
        }
    }

    
    Operator (argu){
        let input = Data.symptoms[argu].symptomValue
        let diagnosisName =Object.keys(Data.symptoms[argu].diagnosisNames)

        for (let x of diagnosisName){
            this.SymptomInputAnalysis(Data.symptoms[argu][x],input,argu,10)
        }
        this.GenerateDifferntialDiagnosis()

        let b =  x => (x)
        if (Object.values(input).every(b)&&!this.analysis){
            this.analysis= 'not typical presentation kindly review differential diagnosis'
        }


    }
     ChestPain (){ 
        let symptom ='chestPain' 
        //Query.generate(symptom)
        this.Operator(symptom)

    }
            
        
     Dyspnea (){
        let symptom ='dyspnea' 
        Query.generate(symptom)
        this.Operator(symptom)

    }
    Cough (){
        let symptom ='cough' 
        Query.generate(symptom)
        this.Operator(symptom)
    }

}

export class DiseaseAnalysis{

    static examHint =[]
    static investigationHint=[]
    static medicationHint=[]
    static medication=[]
    static tradeMedication=[]

    static Trading (){
        if (this.medication.includes('steroid')){
            this.tradeMedication.push('prednesilone')
        }
    }


    static Hinting (disease){
        console.log (disease)

             
            let z=0;
            for (let x of Object.keys(disease.exam)){
                DiseaseAnalysis.examHint[x +' '+disease.disease]= Object.values(disease.exam)[z].join(' ,')
                z++
                
            }
            let c=0;
            for (let x of Object.keys(disease.investigation)){
                DiseaseAnalysis.investigationHint[x+' '+disease.disease]= Object.values(disease.investigation)[c].join(' ,') 
                c++
            }
            let v=0;
            for (let x of Object.keys(disease.treatment)){
                DiseaseAnalysis.medicationHint[x+' '+disease.disease]= Object.values(disease.treatment)[v]
                v++
            }

    }

    static op (argu){
        let y =argu.toString()
        console.log(y)
        if (SymptomAnalysis.differentialDiagnosisArray.includes(y)){
            if (Data.diseases[y]){
                this.Hinting(Data.diseases[y])

            }
            

        }
    }
    static main(){
        console.log(Object.keys(SymptomAnalysis.pobabilityDD))
        for  (let x of  Object.keys(SymptomAnalysis.pobabilityDD)){
            this.op(x)
        }
        

    }



}





