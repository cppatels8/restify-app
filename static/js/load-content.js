$(document).ready(function() { 
	    $.ajax({
		    url : 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment?accessToken='+document.cookie,
            crossDomain : true,
            contentType: 'application/json',
            type:'GET',
            beforeSend: function( xhr ) {
                if (document.cookie == "")
                {
                	window.location.href = "/login";
                }
            },
		    success : function(data) {
		    	var datas = data.data;
		    	var rrr = '';
		    	for (var i=0;i < datas.length; i++ ){
		    		rrr = rrr + "<tr><td><a href=/interviews/"+ datas[i]['id'] +">" + datas[i]['condidateName'] + "</a></td>";
		    		rrr = rrr + "<td>" + datas[i]['interviewerEmailId'] + "</td>";
		    		rrr = rrr + "<td>" + datas[i]['interviewTime'] + "</td>";
		    		rrr = rrr + "<td>" + datas[i]['roundNumber'] + "</td>";
		    		rrr = rrr + "<td>" + datas[i]['interviewStatus'] + "</td></tr>";
		    	};
		    	$('#table1').append(rrr);
		    		
		    }
	    });
	    $('#scheduleInterview').click(function(){
	    	var	candidateName = $('.modal-body').find("#candidateName").val(),
	    	candidateEmail = $('.modal-body').find("#candidateEmail").val();
	    	round = $('.modal-body').find("#round").val();
	    	band = $('.modal-body').find("#band").val();
	    	contactNumber = $('.modal-body').find("#contactNumber").val();
	    	interviewType = $('.modal-body').find("#interviewType").val();
	    	interviewTime = $('.modal-body').find("#interviewTime").val();
	    	interviewerEmail = $('.modal-body').find("#interviewerEmail").val();
	    	scheduleData =  {
	    			  "roundNumber": round,
	    			  "interviewTime": interviewTime,
	    			  "interviewType": interviewType,
	    			  "condidateEmailId": candidateEmail,
	    			  "interviewFeedbackUri": "Url",
	    			  "band": parseInt(band),
	    			  "contactNumber": contactNumber,
	    			  "interviewStatus": "open",
	    			  "condidateName": candidateName,
	    			  "interviewerEmailId":interviewerEmail
	    			};
	    	$.ajax({
                url: 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment?accessToken='+ document.cookie, // php script to retern json encoded string
                data: JSON.stringify(scheduleData),  // serialized data to send on server
                dataType: 'json', // set recieving type - JSON in case of a question
                contentType: 'application/json',
                type:'POST', // set sending HTTP Request type
                async:false,
                crossDomain : true,
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations             
                	location.reload();
                },
                error: function(data) { // if error occured
                	alert("Some error ocured. try again later.");
                }
              });
	    });



	$('#registerInterviewer').click(function(){
	    	var	interviewerFirstName = $('.register-body').find("#interviewerFirstName").val(),
	    	interviewerLastName = $('.register-body').find("#interviewerLastName").val();
	    	interviewerPassword = $('.register-body').find("#interviewerPassword").val();
	    	interviewerUsername = $('.register-body').find("#interviewerUsername").val();
	    	interviewerEmail = $('.register-body').find("#interviewerEmail").val();
	    	interviewerData =  {
	    			  "userName": interviewerUsername,
	    			  "password": interviewerPassword,
	    			  "emailId": interviewerEmail,
	    			  "firstName": interviewerFirstName,
	    			  "lastName": interviewerLastName,
	    			  "isInterviewer": 'true'
	    			};
	    	$.ajax({
                url: 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/users?accessToken='+ document.cookie, // php script to retern json encoded string
                data: JSON.stringify(interviewerData),  // serialized data to send on server
                dataType: 'json', // set recieving type - JSON in case of a question
                contentType: 'application/json',
                type:'POST', // set sending HTTP Request type
                async:false,
                crossDomain : true,
                origin: 'http://restify.labs.hashedin.com',
                success: function(data) { // callback method for further manipulations 
                	console.log("successs");
                	location.reload();
                },
                error: function(data) { // if error occured
                	alert("Some error ocured. try again later.");
                }
              });
	    });
	
    });

