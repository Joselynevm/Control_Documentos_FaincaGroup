 $(document).ready(function(){
        $('#bu').click(function(){
            //lert($(this).text()); 
            $.get('getRequest',function(data){
                //console.log(data.name);
             // var $select="<select id=\"selectedOptions\">"
               var select = $("<select class=\"form-control\"></select>");
              $.each(JSON.parse(data), function( index, value ){
                         console.log(value.id+" "+value.nombre);
                         //select+="<option value=\""+value.id+"\" >"+value.nombre.text();+"</option>";
                          select.append($('<option>', { 
                               value: value.id,
                               text : value.nombre 
                            }));
                         
                    });
            // $select+="<select/>";
             
               // $select.appendTo('#co');
                
                /* $.each(items, function (i, item) {
                          $('#mySelect').append($('<option>', { 
                               value: item.value,
                               text : item.text 
                            }));
                    });*/

                /*var myNewElement = $('<p>Nuevo elemento</p>');
                myNewElement.appendTo('#co');*/
                //var select = $("<select></select>");
                select.appendTo('#contenedor');
             
            });
        });
     });
