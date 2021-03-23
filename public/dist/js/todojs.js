$("#checkpas").click(function() {  
        if($("#checkpas").is(':checked')) {  
           // alert("Está activado");  
           $('#pas').prop( 'disabled', false );
           		 var now = new Date();
 
			    var day = ("0" + now.getDate()).slice(-2);
			    var month = ("0" + (now.getMonth() + 1)).slice(-2);

			    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

			    $('#pasfecha').val(today);

        } else {  
           // alert("No está activado");  
            $('#pas').prop( 'disabled', true );
            $('#pasfecha').val(null);
        }  
    });  


  $('#scroll1').slimScroll({
        height: '270px'
    });


