$(document).ready(function() { 
	    $.ajax({
		    url : 'http://restify.labs.hashedin.com/hashedinrecruitmentapp/recruitment?accessToken='+document.cookie,
            crossDomain : true,
            contentType: 'application/json',
            type:'GET',
            beforeSend: function( xhr ) {
                if (document.cookie == "")
                {
                     $('#welcome-msg').append("Please login to view the items");
                }
            },
		    success : function(data) {
		    	
		    }
	    });

    });

