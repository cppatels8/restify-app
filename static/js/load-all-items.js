$(document).ready(function() { 
	    $.ajax({
		    url : 'http://restify.labs.hashedin.com/bid/biding?accessToken='+document.cookie,
            crossDomain : true,
            contentType: 'application/json',
            type:'GET',
		    success : function(data) {
                var datas = data.data;
                var ignoreValues = ['id', 'resource_uri', 'modifiedAt', 'createdAt', 'duration']
                for (var i=0;i < datas.length; i++ ){
                 var rrr = '';
                jQuery.each(datas[i], function(index, value) {
                   if( $.inArray(index, ignoreValues) == -1 ){
                    if (index == 'itemName')
                    {
                        itemName=value;
                        rrr = rrr + "<options>"+  value + "</options>";
                    }
                }

                   });
                 $('#bidValue').append(rrr);
                 }
		    }
	    });

    });

