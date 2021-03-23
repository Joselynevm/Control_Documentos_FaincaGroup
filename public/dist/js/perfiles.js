var useid;
var arropci=[];
var arsup1=[];
var arsup2=[];
var cq=0;
    $('#use_id2').each(function (e) {
          useid=0;
          useid = this.value;
    });


$('#bopperfil').click(function(){
      console.log(useid);
      var pathname = window.location.pathname;
      console.log(pathname);
      //document.getElementById("opgr").disabled=false;
      var arr1 = [];
      var arr2 = [];
      $.get(pathname+'/editPerfil',{useid:useid},function(data){
              var select = "<select id=\"opdet2\" name=\"opdet[]\" class=\"form-control\" multiple=\"multiple\">";
              $.each(JSON.parse(data), function( index, value){
                          //console.log(data[index].id+" "+data[index].nombre);
                         $.each(this, function(k, v) {
                                  //console.log(index+"-"+v.id+"-"+v.nombre); /// do stuff
                                  if(index=='opcion2'){
                                   arr2.push(v.id);
                                  }else{
                                  arr1[v.id] = v.nombre;}
                            });
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
            $('#seledi2').html(select);
  
            $('#opdet2').val(arr2).prop("selected", true);
            $('#opdet2').multiSelect("refresh");
            document.getElementById("edgrup2").disabled=false;
            //var  = []; 
            $('#opdet2 :selected').each(function(i, selected){ 
              arropci[i] = $(selected).val(); 
            });
            for (var i = 0; i < arropci.length; i++) {
              console.log(arropci[i]);
            }
            // $("#editop").multiSelect();
      });
      //console.log(pathname);
  });

$('#edgrup2').click(function(){
    var pathname = window.location.pathname;
            
            $('#myModal2e').modal();
            $.get(pathname+'/getRequest',function(data){
              $("#contenedor2e").empty();
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
                  console.log(arropci[i]+" "+$("#opdet2 option[value='"+arropci[i]+"']").text());
                  div +='<div class="form-group"><label>'+$("#opdet2 option[value='"+arropci[i]+"']").text()+'</label>'+select+'</div>';
                  $.each( arsup1, function( key, value ) {
                      if(value==arropci[i]){
                        console.log('si');
                    $('#grupos').val(key).prop("selected", true);
                        //select.value = key;
                      }
                    });
                $('#contenedor2e').html(div);
                }       
            });
  });