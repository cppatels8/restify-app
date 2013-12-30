$(document).ready(function() { 
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

    });

