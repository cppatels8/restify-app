var itemName;
$(document).ready(function() { 
            $.support.cors = true;
            // bind 'myForm' and provide a simple callback function 
            $('#registration1').submit(function() { // set onsubmit event to the form
              var data = $('#registration1').serialize(), // serialize all the data in the form 
              userName = $(this).find("#userName").val(),
              password = $(this).find("#password").val();
              firstName = $(this).find("#firstName").val();
              lastName = $(this).find("#lastName").val();
              emailId = $(this).find("#emailId").val();
              companyName = $(this).find("#companyName").val();
              arr = {"userName": userName,
                     "password": password,
                     "emailId": emailId,
                    };
              $.ajax({
                url: 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/users', // php script to retern json encoded string
                data: JSON.stringify(arr),  // serialized data to send on server
                dataType: 'json', // set recieving type - JSON in case of a question
                contentType: 'application/json',
                type:'POST', // set sending HTTP Request type
                async:false,
                crossDomain : true,
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations             
                    confirm("You are registered, Please login");

                },
                error: function(data) { // if error occured

                }
              });
              return false;

    });
            $('#login').submit(function() { // set onsubmit event to the form
              var data = $('#registration1').serialize(), // serialize all the data in the form 
              userName = $(this).find("#userName").val(),
              password = $(this).find("#password").val();
              $.ajax({
                url: 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/auth', // php script to retern json encoded string
                data: '',  // serialized data to send on server
                xhrFields: {
                        withCredentials: true
                    },
                dataType: 'json', // set recieving type - JSON in case of a question
                type:'POST', // set sending HTTP Request type
                async:false,
                //username: username,
                //password: password,
                crossDomain : true,
                contentType: 'application/json',
                origin: 'http://restify.labs.hashedin.com',
                headers: {
                    'Authorization': "Basic " + btoa(userName + ":" + password)
                  },
                success: function(data) { // callback method for further manipulations
                    document.cookie = data['AccessToken']+";path=/";
                    window.location.href = "/home";
                },
                error: function(data) { // if error occured

                }
              });
              return false;

    });

}); 


