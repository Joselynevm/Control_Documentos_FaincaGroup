var ida=0;
var crea=false;
var edit=false;
var codigo;
var descripcion;

var flag1=false;
var flag2=false;
var fled=0;
var idpaed;
var nivmax="";
var level="";
var n=0;
var idedi=0;
var padglo = "";
var defi = "";
var codglo = "";

function limpiarni(){
  ida=0;
  idpaed=0;
  codigo="";
  descripcion="";
}


$(function () {
    // 6 create an instance when the DOM is ready
    $('#jstreeniv').jstree("deselect_all");
    $('#jstree').jstree();
    // 7 bind to events triggered on the tree
    $('#jstree').on("changed.jstree", function (e, data) {
      console.log(data.instance.get_node(data.selected).text);
    });
    nivmax = $('#jstree').data('niv');


     $('#jstreeniv').jstree({

        "core" : {
       // so that create works
       "check_callback" : true
         },

         "plugins" : ["search",
        "types", "ui" ],
     "types" : {
    "#" : {
      "max_children" : 1,
      "max_depth" : nivmax,
      "valid_children" : ["root"],
    }
    },"search": {
       "case_insensitive": true,
       "show_only_matches" : true
    }

    }).bind("select_node.jstree",function(e,data) {
      cursor_wait();
     var padre = data.instance.get_node(data.node.parent).text;
      padglo = "";
     if(typeof(padre)  === "undefined"){
       padglo = "Nivel Raiz";
     }else{
       padglo = padre.trim();
     }
     defi="";
     defi = data.node.text.toString().trim();
     if(padre!=null){
      var pa = padre.trim();
     }
     else{
      var pa = "Nivel Raiz";
     }
     var ya = data.instance.get_node(data.selected).id;
      var yason = JSON.parse(ya);
      var yason2 = jQuery.parseJSON(JSON.stringify(ya));
      console.log(ya);
      console.log(flag1);
      console.log(flag2);
       console.log(padglo);

      fled = 1;
      if(flag1==false&&flag2==false){
         $.get("INVM_0001/getIdniv", {id:ya}, function(respuesta){
          console.log(respuesta.id+" "+respuesta.invniv_descripcion+" "+respuesta.invniv_uuid_padre);
          codglo = "";
          codglo = respuesta.invniv_codigo;
          console.log(codglo);
          idedi=0;
          idedi = respuesta.id;
          ida = respuesta.id;
          var cle = data.node.parents.length;
          if(cle==1){
            $( "#check" ).prop( "checked", true );
          }else{
              $( "#check" ).prop( "checked", false );
          }
          $('#invniv_codigo').val(respuesta.invniv_codigo);
          $('#invniv_descripcion').val(respuesta.invniv_descripcion);
          $('#invniv_uuid_padre').val(pa);
         
      }).done(function() {
                     remove_cursor_wait();
               });
      }

      if(flag1==true&&flag2==false){
            $.get("INVM_0001/getIdniv", {id:ya}, function(respuesta){
          console.log(respuesta.id+" "+respuesta.invniv_descripcion+" "+respuesta.invniv_uuid_padre);
          ida = respuesta.id;
           codglo="";
          codglo = respuesta.invniv_codigo;
        }).done(function() {
                     remove_cursor_wait();
               });
          level="";
          level = data.node.parents.length;
          var text  = data.node.text.toString().trim();
          $('#invniv_uuid_padre').val(text);
          var id    = data.node.id;
          console.log(level);
          console.log(text);
          console.log(padre);
          n=0;
          n = parseInt(level);
          n+=1;
          console.log(n);
         

      }

      if(flag2==true&&flag1==false){
         var cle = data.node.parents.length;
          if(cle==1){
            $( "#check" ).prop( "checked", true );
          }else{
              $( "#check" ).prop( "checked", false );
          }
        // document.getElementById("invniv_codigo").disabled=false;
        // document.getElementById("invniv_descripcion").disabled=false;
          
         $.get("INVM_0001/getIdniv", {id:ya}, function(respuesta){

          console.log(respuesta.id+" "+respuesta.invniv_descripcion+" "+respuesta.invniv_uuid_padre);
          idedi=0;
          idedi = respuesta.id;
          console.log(idedi);
          var text  = data.node.text.toString().trim();
          $('#invniv_uuid_padre').val(pa);
          $('#invniv_codigo').val(respuesta.invniv_codigo);
          $('#invniv_descripcion').val(respuesta.invniv_descripcion);
        
          
      }).done(function() {
                     remove_cursor_wait();
               });
          level="";
          level = data.node.parents.length;

      }
  });

     var to = false;
  $('#plugins4_qniv').keyup(function () {
    if(to) { clearTimeout(to); }
    to = setTimeout(function () {
      var v = $('#plugins4_qniv').val();
      $('#jstreeniv').jstree(true).search(v);
    }, 250);
  });

  });

function disable(node_id) {
  var node = $("#jstreeniv").jstree().get_node( node_id );
  $("#jstreeniv").jstree().disable_node(node); 
  node.children.forEach( function(child_id) {            
    disable( child_id );
  });
}

function enable(node_id){
   var node = $("#jstreeniv").jstree().get_node( node_id );
  $("#jstreeniv").jstree().enable_node(node); 
  node.children.forEach( function(child_id) {            
    enable( child_id );
  });
} 

function editarni(){
    var titulo = document.getElementById('titulo');
  titulo.innerHTML = ' &nbsp Editar';
    if(fled==0){
      alert('Debe seleccionar un registro');
    }else{
   // $('#jstreeniv').jstree("deselect_all");
     $('#invniv_codigo').val(codglo);
    $('#invniv_codigo').prop('disabled', true);
     $('#check').prop('disabled', true);
     $('#invniv_descripcion').prop('disabled', false);
     $('#invniv_descripcion').val(defi);
     $('#bued').prop('disabled', false);
     $('#invniv_uuid_padre').val(padglo);
    flag2 = true;
    flag1 = false;
  }
    //validarniv();
}

 $('#check').click(function() {
         if($("#check").is(':checked')) {
            $('#invniv_uuid_padre').val('Nivel Raiz');
              $('#jstreeniv >ul > li').each( function() {
                     disable( this.id );        
              });
          }else{
            $('#invniv_uuid_padre').val('');
             $('#jstreeniv >ul > li').each( function() {
                     enable( this.id );        
              });
          }    
    });


function validarniv() {
    console.log('ya');
    document.getElementById("invniv_codigo").disabled=false;
    document.getElementById("invniv_descripcion").disabled=false;
    document.getElementById("invniv_uuid_padre").disabled=true;
    document.getElementById("bued").disabled=false;
    document.getElementById("check").disabled=false;
    
}
function validarcreai(){
  $('#invniv_codigo').prop('disabled',false);
  //$('#ckeck').prop('disabled',false);
 document.getElementById("check").disabled=false;
  document.getElementById("invniv_descripcion").disabled=false;
  document.getElementById("bued").disabled=false;
}

 var valueSelected;
        $('#invniv_uuid_padre').on('change', function (e) {
          valueSelected = this.value;
          console.log(valueSelected);
      });

function grabarniv(){
    var csi;
    console.log(nivmax+" "+level);
    if(param!=1){
      if($("#invniv_codigo").val()=="" || $("#invniv_descripcion").val()==""){
          alert('Existen espacios vacios');
    }else{

        if($('#invniv_uuid_padre').val()==""){
          alert('Debe seleccionar un padre');
        }else{
        if($("#check").is(':checked')) {
          console.log('nodo raiz');  
           csi=1;  
        } else {  
           csi=0;
           console.log('nodo normal'); 
        }  

        if(csi==0&&level>=nivmax){
          alert('No puede registrar. Nivel máximo es: '+nivmax);
        }
    else{
        if(flag1==true&&flag2==false){
          cursor_wait();
          var invniv_codigo = $("#invniv_codigo").val();
          var invniv_descripcion = $("#invniv_descripcion").val();
          var idpadre = ida;
          $.post("INVM_0001/postCreaNiv",{level:n,codigo:invniv_codigo,descripcion:invniv_descripcion,idpadre:idpadre,csi:csi},function(respuesta){
            console.log(respuesta.mensaje);
            // window.location.replace('home');
             location.reload(); 
          }).fail(function() {
             alert( "Código ya existe" );
             }).done(function() {
                     remove_cursor_wait();
               });
        }if(flag2==true&&flag1==false){
          cursor_wait();
        var invniv_codigo = $("#invniv_codigo").val();
        var invniv_descripcion = $("#invniv_descripcion").val();
        console.log(idedi+" "+invniv_codigo+" "+valueSelected);
      $.post("INVM_0001/postNiv", {level:n,id:idedi,invniv_codigo:invniv_codigo,invniv_descripcion:invniv_descripcion,invniv_uuid_padre:idpaed,csi:csi}, function(respuesta){
            console.log(respuesta.mensaje);
            location.reload();
      }).done(function() {
                     remove_cursor_wait();
               });
      }
    }
  }
  }
    }else{
      if($("#invniv_descripcion").val()==""){
          alert('Existen espacios vacios');
    }else{

        if($('#invniv_uuid_padre').val()==""){
          alert('Debe seleccionar un padre');
        }else{
        if($("#check").is(':checked')) {
          console.log('nodo raiz');  
           csi=1;  
        } else {  
           csi=0;
           console.log('nodo normal'); 
        }  

        if(csi==0&&level>=nivmax){
          alert('No puede registrar. Nivel máximo es: '+nivmax);
        }
    else{
        if(flag1==true&&flag2==false){
          cursor_wait();
          var invniv_codigo = $("#invniv_codigo").val();
          var invniv_descripcion = $("#invniv_descripcion").val();
          var idpadre = ida;
          $.post("INVM_0001/postCreaNiv",{level:n,codigo:invniv_codigo,descripcion:invniv_descripcion,idpadre:idpadre,csi:csi},function(respuesta){
            console.log(respuesta.mensaje);
            // window.location.replace('home');
             location.reload(); 
          }).fail(function() {
             alert( "Código ya existe" );
             }).done(function() {
                     remove_cursor_wait();
               });
        }if(flag2==true&&flag1==false){
          cursor_wait();
        var invniv_codigo = $("#invniv_codigo").val();
        var invniv_descripcion = $("#invniv_descripcion").val();
        console.log(idedi+" "+invniv_codigo+" "+valueSelected);
      $.post("INVM_0001/postNiv", {level:n,id:idedi,invniv_codigo:invniv_codigo,invniv_descripcion:invniv_descripcion,invniv_uuid_padre:idpaed,csi:csi}, function(respuesta){
            console.log(respuesta.mensaje);
            location.reload();
      }).done(function() {
                     remove_cursor_wait();
               });
      }
    }
  }
  }
    }
   

}

function borrarni(){
       //  $('#jstreeniv').jstree("deselect_all");
       var pathname = window.location.pathname;
        if(fled==0){
      alert('Debe seleccionar un registro');
    }else{
        var invniv_codigo = $("#invniv_codigo").val();
        var invniv_descripcion = $("#invniv_descripcion").val();
      $.get(pathname+"/boNiv", {id:ida}, function(respuesta){
             cursor_wait();
            if(respuesta.flag=='s'){
            alert(respuesta.mensaje);
            remove_cursor_wait();
            location.reload();
          }else{
            remove_cursor_wait();
            alert(respuesta.mensaje);
          }
      }).done(function() {
                     remove_cursor_wait();
               });
}
}


 function demo_createni() {
  var titulo = document.getElementById('titulo');
  titulo.innerHTML = ' &nbsp Nuevo';

           fled=0;
         limpiarni();
         $('#jstreeniv').jstree("deselect_all");
         $('#invniv_codigo').prop('readonly',false);
        $('#check').prop('disabled',false);
        $('#check').prop('checked',false);
        codigo =  $('#invniv_codigo').val("");
        descripcion =  $('#invniv_descripcion').val("");
        padre =  $('#invniv_uuid_padre').val("").change();
        crea = true;
        flag1 = true;
        flag2 = false;
        validarcreai();
            }
            function demo_rename() {
            }
            function demo_delete() {
       
            }
