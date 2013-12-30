$(document).ready(function() { 
	    $.ajax({
		    url : 'http://restify.labs.hashedin.com/bid/biding?accessToken='+document.cookie,
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
                $('#welcome-msg').append("Items you bid");
                var datas = data.data;
                var ignoreValues = ['id', 'resource_uri', 'modifiedAt', 'createdAt', 'duration', 'owner', 'bidId', 'supplierName']
                for (var i=0;i < datas.length; i++ ){
                var rrr = '<tr>';
                var ifAwarded = false;
                jQuery.each(datas[i], function(index, value) {
                   if( $.inArray(index, ignoreValues) == -1 ){
                    if (value == null)
                    {
                        value = "California"
                    }
                    
                    if (index == 'name')
                    {
                        itemName=value;
                    }
                    if (index == 'awardedDate' && value != null)
                    {
                        ifAwarded = true
                    }
                    if (ifAwarded == true)
                    {
                        rrr = rrr + "<td><div>" + value + "</div></td>";
                    }
                    else
                    {
                        rrr = rrr = rrr + "<td><div>" + value + "</div></td>";
                    }
                }

                   });
                 $('#table2').append(rrr+'</tr>');
                 }
		    }
	    });

    });

