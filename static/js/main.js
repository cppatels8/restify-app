$(document).ready(function() { 
    $('#saveFeedback').click(function() { // set onsubmit event to the form
    	result = $('.feedback_table').find("#result").val(),
    	status = $('.feedback_table').find("#status").val();
    	feedbcak = $('.feedback_table').find("#feedbcak").val();
   
    	
    	arr = {"result": result,
             "interviewStatus": status,
             "feedback": feedbcak.trim(),
            };
 
      var id = location.pathname.split("/")[2];
      $.ajax({
        url: 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment/'+ id +'?accessToken='+ document.cookie, // php script to retern json encoded string
        data: JSON.stringify(arr),  // serialized data to send on server
        dataType: 'json', // set recieving type - JSON in case of a question
        contentType: 'application/json',
        type:'PUT', // set sending HTTP Request type
        async:false,
        crossDomain : true,
        origin: 'http://restify.labs.hashedin.com',
        success: function(data) { // callback method for further manipulations             
            console.log("feedback added successfully.");
        	location.reload();
        },
        error: function(data) { // if error occured
        	alert("your feebback sent.");
        	location.reload();
        }
      });
      
    });
}); 


