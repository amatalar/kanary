

$(document).ready(function(){

    
  $('.f').submit(function(event){
    event.preventDefault()
    let value = $('#fname').val()
    $.ajax({
      url: "http://localhost:3000/api/answer", // The URL of the Express server
      type: "POST", // The HTTP method
      dataType: "json", // The type of data expected from the server
      contentType: "application/json",
      data: JSON.stringify({animal:value}), // The data to send to the server
      success: function(data) {
        // The callback function to handle the response data
        let qq=data
        $('#chatbot').append(
          $('<p>').hide().text('sender: '+ value).show(),
          $('<p>').hide().text('chatbot: '+qq.message).show('slow')
          
        )
        console.log(data.message); // Log the data to the console
        // You can also use the data to update the web app UI here
        
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // The callback function to handle errors
        console.error(errorThrown); // Log the error to the console
      }
    });

    
  })

    $(".t").click(function(){
        $('.i').text("hi Amr")
        console.log('hi Amr')

        
        $.ajax({
          url: "http://localhost:3000/api/people", // The URL of the Express server
          type: "GET", // The HTTP method
          dataType: "json", // The type of data expected from the server
          success: function(data) {
            // The callback function to handle the response data
            console.log('why'+ data); // Log the data to the console
            // You can also use the data to update the web app UI here
            
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // The callback function to handle errors
            console.error(errorThrown); // Log the error to the console
          }
        });

        let hhh = {animal:"i should go now"}

        
        $.ajax({
          url: "http://localhost:3000/api/answer", // The URL of the Express server
          type: "POST", // The HTTP method
          dataType: "json", // The type of data expected from the server
          contentType: "application/json",
          data: JSON.stringify(hhh), // The data to send to the server
          success: function(data) {
            // The callback function to handle the response data
            console.log(data); // Log the data to the console
            // You can also use the data to update the web app UI here
            
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // The callback function to handle errors
            console.error(errorThrown); // Log the error to the console
          }
        });
        $.ajax({
          url: "http://localhost:3000/api/answer", // The URL of the Express server
          type: "POST", // The HTTP method
          dataType: "json", // The type of data expected from the server
          contentType: "application/json",
          data: JSON.stringify({animal:'hi'}), // The data to send to the server
          success: function(data) {
            // The callback function to handle the response data
            let qq=data
            $(".k").text(qq.message)
            console.log(data.message); // Log the data to the console
            // You can also use the data to update the web app UI here
            
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // The callback function to handle errors
            console.error(errorThrown); // Log the error to the console
          }
        });

        $.ajax({
          url: "http://localhost:3000/api/answer", // The URL of the Express server
          type: "GET", // The HTTP method
          dataType: "json", // The type of data expected from the server
          success: function(data) {
            // The callback function to handle the response data
            console.log('answer'+ data); // Log the data to the console
            // You can also use the data to update the web app UI here
           
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // The callback function to handle errors
            console.error(errorThrown); // Log the error to the console
          }
        });
        


   
    })
})




