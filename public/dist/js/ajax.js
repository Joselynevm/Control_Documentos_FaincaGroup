$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
});


 

 $(document).ready(function(){
var arropci=[];
var cp=0;
var arsup1=[];
var arsup2=[];



function getSelectedOptions2() {
    //var opciones = document.getElementById("my-select").options;
    

    if(cp>0){
        //alert('no');
         document.getElementById("edgrup").disabled=false;
    }
     
    else{
      document.getElementById("edgrup").disabled=true;
    }
 
    }

  $('#edgrup').click(function(){
    var pathname = window.location.pathname;
     if ($('#nombre').val().trim() === '') {
                  alert('El campo Nombre esta vacío');
        } else {
                 $('#myModal2').modal();
            $.get(pathname+'/getRequest',function(data){
              $("#contenedor2").empty();
               var select = "<select id=\"grupos[]\" name=\"grupos[]\" class=\"form-control\">";
        /*      $.each(JSON.parse(data), function( index, value ){
                         console.log(value.id+" "+value.nombre);
                     select+="<option value=\""+value.id+"\">"+value.nombre+"</option>";
                    });*/
             $.each(JSON.parse(data), function( index, value){
                  //console.log(index);
                  $.each(this,function(k,v){
                      if(index=='primero'){
                          arsup1[v.grupoid]=v.optionid;
                      }else{
                          arsup2[v.id]=v.nombre;
                          select+="<option value=\""+v.id+"\">"+v.nombre+"</option>";
                      }
                  });
              });
             console.log(arsup1);
             console.log(arsup2);
            select+="</select>";
                 var div = '';
                 for (var i=0; i<arropci.length; i++){        
                  console.log(arropci[i]+" "+$("#opdet option[value='"+arropci[i]+"']").text());
                  div +='<div class="form-group"><label>'+$("#opdet option[value='"+arropci[i]+"']").text()+'</label>'+select+'</div>';
                  $.each( arsup1, function( key, value ) {
                      if(value==arropci[i]){
                        console.log('si');
                    $('#grupos').val(key).prop("selected", true);
                        //select.value = key;
                      }
                    });
                $('#contenedor2').html(div);
                }       
            });
        }

  });

  $('#bomo').click(function(){
      var pathname = window.location.pathname;
      document.getElementById("opgr").disabled=false;
      //document.getElementById("edgrup").disabled=false;
      var arr1 = [];
      var arr2 = [];
      $.get(pathname+'/editRequest',function(data){
        //console.log(data.mensaje);
         var select = "<select id=\"opdet\" name=\"opdet[]\" class=\"form-control\" multiple=\"multiple\">";
             //console.log(data.);

              $.each(JSON.parse(data), function( index, value){
                          //console.log(data[index].id+" "+data[index].nombre);
                         $.each(this, function(k, v) {
                                  //console.log(index+"-"+v.id+"-"+v.nombre); /// do stuff
                                  if(index=='opcion2'){
                                   arr2.push(v.id);
                                  }else{
                                  arr1[v.id] = v.nombre;}
                            });
                         //$("#callbacks").append(
                         //       $('<option></option>').val(index).html(value)
                          //);
                     //select+="<option value=\""+index+"\">"+value+"</option>";
                    });
             console.log(arr2.length);
             $.each( arr2, function( key, value ) {
                    console.log( key + ": " + value );
                });
             console.log(arr1.length);
             $.each( arr1, function( key, value ) {
                   console.log( key + ": " + value );
                   if(value!=null){
                   select+="<option value=\""+key+"\">"+value+"</option>";}
                }); 
            select+="</select>";
            $('#seledi').html(select);
            /*$('#opdet').multiSelect({
               afterSelect:function(values){
                ++cp;
                alert(cp);
                var v = values.toString();
                arropci.push(v);
                getSelectedOptions2();
              },
              afterDeselect:function(values){
                 --cp;
                  var v = values.toString();
                    for (var i=0; i<arropci.length; i++){ 
                            if(v==arropci[i].toString()){
                                  arropci.splice(i, 1);
                            }
                      }
                  getSelectedOptions2();
              }
            });*/
            $('#opdet').val(arr2).prop("selected", true);
            $('#opdet').multiSelect("refresh");
            document.getElementById("edgrup").disabled=false;
            //var  = []; 
            $('#opdet :selected').each(function(i, selected){ 
              arropci[i] = $(selected).val(); 
            });
            for (var i = 0; i < arropci.length; i++) {
              console.log(arropci[i]);
            }

            // $("#editop").multiSelect();
      });
      //console.log(pathname);
  });

 
//var ediop = [];

//var pathname = window.location.pathname;
//alert(pathname);
 /* $.get(pathname+'/editRequest',function(data){
       //console.log(data.mensaje);
        $.each(JSON.parse(data), function( index, value){
                         console.log(index+" "+value);
                         ediop.push(index);
                        //console.log(ediop[0]);
                         $('#callbacks').val(index).prop("selected", true);
                        });
      //console.log(ediop[0]);
  });
 for (var i = 0; i < ediop.length; i++) {
        //$('#callbacks').val(20).prop("selected", true);
        //$('#callbacks').val(20).prop("selected", true);

  }
  //$('#callbacks').val(20).prop("selected", true);
  //console.log(ediop[0]);
  $('#callbacks').val(ediop).prop("selected", true);*/

  var opci = [];

        $('#bu').click(function(){
        if ($('#nombre').val().trim() === '') {
                  alert('El campo Nombre esta vacío');
        } else {
                 $('#myModal').modal();
            //lert($(this).text()); 
            $.get('getRequest',function(data){
              $("#contenedor").empty();
                //console.log(data.name);
             // var $select="<select id=\"selectedOptions\">"
               var select = "<select name=\"grupos[]\" class=\"form-control\">";
              $.each(JSON.parse(data), function( index, value ){
                         console.log(value.id+" "+value.nombre);
                         //select+="<option value=\""+value.id+"\" >"+value.nombre.text();+"</option>";
                       /*   select.append($('<option>', { 
                               value: value.id,
                               text : value.nombre 
                            }));     */
                     select+="<option value=\""+value.id+"\">"+value.nombre+"</option>";
                    });
            select+="</select>";
          // $('#contenedor').html(select);
          /*  $.each(myArray, function(i, item) {
                         myHtml += '<li>' + item + '</li>';
          });*/

            // var select = $("<select name=\"grupos[]\" class=\"form-control\"></select>");
            /*var $myNewElement = $('<p>Nuevo elemento</p>');
            $myNewElement.appendTo('#contenedor');
            $myNewElement.appendTo('#contenedor');*/
            //$('ul').last().after($myNewElement.clone());
            // $select+="<select/>";
             
               // $select.appendTo('#co');
                
                /* $.each(items, function (i, item) {
                          $('#mySelect').append($('<option>', { 
                               value: item.value,
                               text : item.text 
                            }));
                    });*/
               /* var myNewElement = $('<p>Nuevo elemento</p>');
                myNewElement.appendTo('#co');*/
                //var select = $("<select></select>");
                //select.append('#contenedor');
              
              //var nuevo = $('<p>Nuevo elemento</p>');
            //  for (var i = 0; i < 3; i++) {
                     //$('#contenedor').append('<div id=\"eso\" class=\"form-group\"></div>');
               //}; 
              // var div = $('<div class="form-group">');
             //  var div+= $('hola');
             //  var div+= $('</div>');


          //CODIGO DE LOS DIOSES
           /*   var div = '';
                    for (var i = 0; i < 3; i++) {
                    div += '<div class="form-group"> hola </div>';
               }; 

               $('#contenedor').html(div);*/

          /*      var myHtml = '';
    
           $.each(myArray, function(i, item) {
                     myHtml += '<li>' + item + '</li>';
             });
           $('#ballers').html(myHtml);*/

               /*var nuevo = "<p>Nuevo elemento</p>";
                for (var i = 0; i < 3; i++) {
                     div+=nuevo;
                  }*/
                //div+="</div>";
                //div.append('#contenedor');
               //$('#eso').html(select);
               // document.getElementById("contenedor").appendChild(select);
                 var div = '';
                 for (var i=0; i<arrayOpciones.length; i++){        
                  console.log(arrayOpciones[i]+" "+$("#callbacks option[value='"+arrayOpciones[i]+"']").text());
                  div +='<div class="form-group"><label>'+$("#callbacks option[value='"+arrayOpciones[i]+"']").text()+'</label>'+select+'</div>';
                $('#contenedor').html(div);
                    //var el2 =$("<label>"+$("#callbacks option[value='"+arrayOpciones[i]+"']").text()+"</label><br></br>");
                    //el2.appendTo('#contenedor');
                }       
            });
        }
       
        });

      $('#bu2').click(function(){
      var rol = $("#nombre").val();
       // var values = $("input[name='pname[]']")
         //     .map(function(){return $(this).val();}).get();

      
      var newArray = [];
          $( "select[name='grupos[]']" ).each(function() {
            newArray.push($( this ).val());
            });
          //console.log(newArray);
     // var c1 = arrayOpciones.length;
     // var c2 = newArray.length;
     // console.log(c1+" "+c2);
    // var arrop = new Array();
  /*  console.log(
    Array.isArray(arrayOpciones) // false
);*/
  //  var bb = Array.prototype.slice.call(arrayOpciones);
   // console.log(arrayOpciones);

     for (var i = 0; i < arrayOpciones.length; i++) {
     // arrop.push(arrayOpciones[i]);
      console.log(newArray[i]+"-"+arrayOpciones[i]);
     };

    // var arop = JSON.stringify(arrop);


     var opcionJSON = JSON.stringify(arrayOpciones);
     var grupoJSON = JSON.stringify(newArray);
    $.post('postRequest',{opcion:opcionJSON,grupo:grupoJSON,rol:rol},function (data) {
          location.reload();
          console.log(data.mensaje);
     });

      });


    /* $('#use_id').on('change', function() {
            alert( this.value ); // or $(this).val()
      });*/
    

    var valueSelected;
    $('#use_id').on('change', function (e) {
  //  var optionSelected = $("#use_id option:selected").text();
          valueSelected = this.value;
  //  alert(optionSelected + " " + valueSelected);
    console.log(valueSelected);
    $.get('getOpt',{value:valueSelected},function(data){
          var select = "<select id=\"ya\" name=\"grupos[]\" class=\"form-control\" multiple=\"multiple\">";
              $.each(JSON.parse(data), function( index, value){
                         console.log(index+" "+value);
                         //$("#callbacks").append(
                         //       $('<option></option>').val(index).html(value)
                          //);
                     select+="<option value=\""+index+"\">"+value+"</option>";
                    });
            select+="</select>";
            $('#op').html(select);
            $('#ya').multiSelect({
               afterSelect: function(values){
                  value = values.toString();
                  opci.push(value);



               },
               afterDeselect: function(values){
                  var v = values.toString();
                   for (var i=0; i<opci.length; i++){ 
                         if(v==opci[i].toString()){
                              opci.splice(i, 1);
                            } 
                    }
              }

            });


    });
    });

/*$(function () {
    $('#jstree2').jstree();
     $('#jstree2').on("changed.jstree", function (e, data) {
      var ya = data.instance.get_node(data.selected).id.toString();
      var yason = JSON.parse(ya);
      var yason2 = jQuery.parseJSON(JSON.stringify(ya));
      console.log(ya);
      
    });
});*/

    
      $('#buop').click(function(){
               var opcionJSON = JSON.stringify(opci);
                      $.post('postOpt',{opcion:opcionJSON,value:valueSelected},function (data) {
                              console.log(data.mensaje);
                                location.href('/SECM_0007');
                        });
            

      });
});