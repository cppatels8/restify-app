$(document).ready(function() { 
	console.log(document.cookie);
	    $.ajax({
		    url : 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment?accessToken='+document.cookie,
            crossDomain : true,
            contentType: 'application/json',
            type:'GET',
            beforeSend: function( xhr ) {
                if (document.cookie == "")
                {
                	window.location.href = "/home";
                }
            },
		    success : function(data) {
		    	data
		    }
	    });

    });

