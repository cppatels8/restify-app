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


            $('#populateItems').submit(function() { // set onsubmit event to the form
              var name = $(this).find("#name").val(),
              type = $(this).find("#type").val();
              openDate = $(this).find("#openDate").val();
              closeDate = $(this).find("#closeDate").val();
              description = $(this).find("#description").val();
              allitems = {
                            "name": name,
                            "openDate": openDate,
                            "closeDate": closeDate,
                            "type": type,
                            "description": description                        
                         },
              $.ajax({
                url: 'http://restify.labs.hashedin.com/bid/items?accessToken='+document.cookie,
                data: JSON.stringify(allitems),
                dataType: 'json', // set recieving type - JSON in case of a question
                type:'POST', // set sending HTTP Request type
                async:false,
                //username: username,
                //password: password,
                crossDomain : true,
                contentType: 'application/json',
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations  
                    confirm("Item Submitted.");
                    window.location.href = "/admin";
                },
                error: function(data) { // if error occured

                }
              });
              return false;
    });

            $('#bidItems').submit(function() { // set onsubmit event to the form
              var address = $("#myModal").find("#address").val(),
              name = $("#myModal").find("#supplierName").val();
              bidValue = $("#myModal").find("#bidValue").val();

              allitems = {
                            "itemName": itemName,
                            "supplierAddress": address,
                            "bidValue": bidValue,
                "supplierName":[]
                         };
              $.ajax({
                url: 'http://restify.labs.hashedin.com/bid/biding?accessToken='+document.cookie,
                data: JSON.stringify(allitems),
                dataType: 'json', // set recieving type - JSON in case of a question
                type:'POST', // set sending HTTP Request type
                async:false,
                //username: username,
                //password: password,
                crossDomain : true,
                contentType: 'application/json',
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations  
                    window.location.href = "/home";
                },
                error: function(data) { // if error occured
                }
              });
              return false;
    });

            $('#award-item').submit(function() { // set onsubmit event to the form
              var awardItemName = $(this).find("#itemName").val(),
              supplierName = $(this).find("#supplierName").val();
              bidValue = $(this).find("#bidValue").val();
              bidId = $(this).find("#bidId").val();

              allitems = {
                            "itemName": awardItemName,
                            "supplierName": supplierName,
                            "awardedValue": bidValue,
                            "bidId": bidId
                         };
              $.ajax({
                url: 'http://restify.labs.hashedin.com/bid/results?accessToken='+document.cookie,
                data: JSON.stringify(allitems),
                dataType: 'json', // set recieving type - JSON in case of a question
                type:'POST', // set sending HTTP Request type
                async:false,
                //username: username,
                //password: password,
                crossDomain : true,
                contentType: 'application/json',
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations  
                    $.fn.myFunction(bidId);                    
                },
                error: function(data) { // if error occured
                }
              });
    });
        $.fn.myFunction = function(bidId) {
                var d = new Date();

                var month = d.getMonth()+1;
                var day = d.getDate();

                output = d.getFullYear() + '/' +
                    (month<10 ? '0' : '') + month + '/' +
                    (day<10 ? '0' : '') + day;
              $.ajax({
                url: "http://restify.labs.hashedin.com/bid/items/"+bidId + "?accessToken="+document.cookie,
                data: JSON.stringify({"awardedDate": output}),
                dataType: 'json', // set recieving type - JSON in case of a question
                type:'PUT', // set sending HTTP Request type
                async:false,
                //username: username,
                //password: password,
                crossDomain : true,
                contentType: 'application/json',
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations  
                    window.location.href = "/award-bid";
                },
                error: function(data) { // if error occured
                }
              });
    }

   $( "table" ).delegate( ".bidding", "click", function() {
      console.log(this);
          itemName = this.textContent;
          content = "You are bidding for " + itemName
	      $("#myModalLabel").html(content);
	      $("#myModal").modal("show");
	      });

}); 


