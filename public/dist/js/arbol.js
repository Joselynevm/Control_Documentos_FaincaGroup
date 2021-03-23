var ida=0;
var crea=false;
var edit=false;
var codigo;
var descripcion;

var flag1=false;
var flag2=false;
var idpaed;

function limpiar(){
  ida=0;
  idpaed=0;
  codigo="";
  descripcion="";
}


$(function () {
    // 6 create an instance when the DOM is ready
    $('#jstree2').jstree("deselect_all");
    $('#jstree').jstree();
    // 7 bind to events triggered on the tree
    $('#jstree').on("changed.jstree", function (e, data) {
      console.log(data.instance.get_node(data.selected).text);
    });
     $('#jstree2').jstree({

        "core" : {
       // so that create works
       "check_callback" : true
         },

         "plugins" : ["search",
        "types", "ui" ],
     "types" : {
    "#" : {
      "max_children" : 1,
      "max_depth" : 9,
      "valid_children" : ["root"],
    }
    },
 /*   "contextmenu":{         
    "items": function($node) {
        var tree = $("#jstree2").jstree(true);
        return {
            "Create": {
                "separator_before": false,
                "separator_after": false,
                "label": "Create",
                "action": function (obj) { 
                    $node = tree.create_node($node);
                    tree.edit($node);

                }
            },
            "Rename": {
                "separator_before": false,
                "separator_after": false,
                "label": "Rename",
                "action": function (obj) { 
                    tree.edit($node);
                }
            },                         
            "Remove": {
                "separator_before": false,
                "separator_after": false,
                "label": "Remove",
                "action": function (obj) { 
                    tree.delete_node($node);
                }
            }
        };
    }
},*/
    }).bind("select_node.jstree",function(e,data) {
     var padre = data.instance.get_node(data.node.parent).text;
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


      if(flag1==false&&flag2==false){
         $.get("CXCM_0001/getIdniv", {id:ya}, function(respuesta){
          console.log(respuesta.id+" "+respuesta.cxccni_descripcion+" "+respuesta.cxccni_uuid_padre);
          ida = respuesta.id;
          $('#cxccni_codigo').val(respuesta.cxccni_codigo);
          $('#cxccni_descripcion').val(respuesta.cxccni_descripcion);
          $('#cxccni_uuid_padre').val(pa);
         
      });
      }

      if(flag1==true&&flag2==false){
         //document.getElementById("cxccni_codigo").disabled=true;
         //document.getElementById("cxccni_descripcion").disabled=true;
            $.get("CXCM_0001/getIdniv", {id:ya}, function(respuesta){
          console.log(respuesta.id+" "+respuesta.cxccni_descripcion+" "+respuesta.cxccni_uuid_padre);
          ida = respuesta.id;
         // $('#cxccni_codigo').val(respuesta.cxccni_codigo);
         // $('#cxccni_descripcion').val(respuesta.cxccni_descripcion);

        });
          // $('#cxccni_uuid_padre').val(padre);
           var level = data.node.parents.length;
          var text  = data.node.text.toString().trim();
          $('#cxccni_uuid_padre').val(text);
          var id    = data.node.id;
          console.log(level);
          console.log(text);
          console.log(padre);
          var n = parseInt(level);
          console.log(n-1);
         

      }

      if(flag2==true&&flag1==false){
         document.getElementById("cxccni_codigo").disabled=false;
         document.getElementById("cxccni_descripcion").disabled=false;
          
         $.get("CXCM_0001/getIdniv", {id:ya}, function(respuesta){

          console.log(respuesta.id+" "+respuesta.cxccni_descripcion+" "+respuesta.cxccni_uuid_padre);
          idpaed = respuesta.id;
        //  idpaed = respuesta.cxccni_uuid_padre;
          console.log(idpaed);
         // $('#cxccni_codigo').val(respuesta.cxccni_codigo);
         // $('#cxccni_descripcion').val(respuesta.cxccni_descripcion);
          var text  = data.node.text.toString().trim();
          $('#cxccni_uuid_padre').val(pa);
          $('#cxccni_codigo').val(respuesta.cxccni_codigo);
          $('#cxccni_descripcion').val(respuesta.cxccni_descripcion);
        
          
      });

      }
    
   
    //var parent_node = $.jstree._reference('#jstree2')._get_parent(data.node);
   
  });





     var to = false;
  $('#plugins4_q').keyup(function () {
    if(to) { clearTimeout(to); }
    to = setTimeout(function () {
      var v = $('#plugins4_q').val();
      $('#jstree2').jstree(true).search(v);
    }, 250);
  });

  /*   $('#jstree2').on("changed.jstree", function (e, data) {
      var ya = data.instance.get_node(data.selected).id;
      var yason = JSON.parse(ya);
      var yason2 = jQuery.parseJSON(JSON.stringify(ya));
      console.log(ya);
      $.get("CXCM_0001/getIdniv", {id:ya}, function(respuesta){
          console.log(respuesta.id+" "+respuesta.cxccni_descripcion+" "+respuesta.cxccni_uuid_padre);
          id = respuesta.id;
          $('#cxccni_codigo').val(respuesta.cxccni_codigo);
          $('#cxccni_descripcion').val(respuesta.cxccni_descripcion);
          $('#cxccni_uuid_padre').val(respuesta.cxccni_uuid_padre).change();
      });
      
    });*/
    // 8 interact with the tree - either way is OK
  });


function editar(){
    $('#jstree2').jstree("deselect_all");
    flag2 = true;
    flag1 = false;
    validar();
}

 $('#check').click(function() {
         if($("#check").is(':checked')) {
            $('#cxccni_uuid_padre').val('Nivel Raiz');
          }else{
            $('#cxccni_uuid_padre').val('');
          }    
    });


function validar() {
    console.log('ya');
    document.getElementById("cxccni_codigo").disabled=false;
    document.getElementById("cxccni_descripcion").disabled=false;
    document.getElementById("cxccni_uuid_padre").disabled=true;
    document.getElementById("bued").disabled=false;
    document.getElementById("check").disabled=false;
    
}

 var valueSelected;
        $('#cxccni_uuid_padre').on('change', function (e) {
          valueSelected = this.value;
          console.log(valueSelected);
      });

function grabar(){
    var csi;
   if($("#cxccni_codigo").val()==""||$("#cxccni_descripcion").val()==""){
          alert('Existen espacios vacios');
    }else{


        if($("#check").is(':checked')) {
          console.log('nodo raiz');  
           csi=1;  
        } else {  
           csi=0;
           console.log('nodo normal'); 
        }  
  
        if(flag1==true&&flag2==false){
          var cxccni_codigo = $("#cxccni_codigo").val();
          var cxccni_descripcion = $("#cxccni_descripcion").val();
          var idpadre = ida;
          $.post("CXCM_0001/postCrea",{codigo:cxccni_codigo,descripcion:cxccni_descripcion,idpadre:idpadre,csi:csi},function(respuesta){
            console.log(respuesta.mensaje);
            // window.location.replace('home');
             location.reload(); 
          }).fail(function() {
             alert( "Existe Errores" );
             });
        }if(flag2==true&&flag1==false){
        var cxccni_codigo = $("#cxccni_codigo").val();
        var cxccni_descripcion = $("#cxccni_descripcion").val();
        //var idpadre = ida;
       // var cxccni_uui_padre = $("#cxccni_uuid_padre").val();
        console.log(ida+" "+cxccni_codigo+" "+valueSelected);
      $.post("CXCM_0001/postIdniv", {id:ida,cxccni_codigo:cxccni_codigo,cxccni_descripcion:cxccni_descripcion,cxccni_uuid_padre:idpaed,csi:csi}, function(respuesta){
            console.log(respuesta.mensaje);
            location.reload();
      });
      }
  }

}

function borrar(){
         $('#jstree2').jstree("deselect_all");
        var cxccni_codigo = $("#cxccni_codigo").val();
        var cxccni_descripcion = $("#cxccni_descripcion").val();
       // var cxccni_uui_padre = $("#cxccni_uuid_padre").val();
       // console.log(id+" "+cxccni_codigo+" "+valueSelected);
      $.get("CXCM_0001/boIdniv", {id:ida}, function(respuesta){
            if(respuesta.flag=='s'){
            alert(respuesta.mensaje);
            location.reload();
          }else{
            alert(respuesta.mensaje);
          }
      });

}
var fn=false;
function man(){
   if(fn==false){
    document.getElementById("crearni").disabled=false;
    document.getElementById("editarni").disabled=false;
    document.getElementById("borrarni").disabled=false;
    fn=true;
  }else{
     document.getElementById("crearni").disabled=true;
    document.getElementById("editarni").disabled=true;
    document.getElementById("borrarni").disabled=true;
    fn=false;
  }
}

 function demo_create() {
         limpiar();
         $('#jstree2').jstree("deselect_all");
        codigo =  $('#cxccni_codigo').val("");
        descripcion =  $('#cxccni_descripcion').val("");
        padre =  $('#cxccni_uuid_padre').val("").change();
        crea = true;
        flag1 = true;
        flag2 = false;
        validar();




           /*   var ref = $('#jstree2').jstree(true),
                sel = ref.get_selected();
              if(!sel.length) { return false; }
              sel = sel[0];
              sel = ref.create_node(sel, {"type":"file"});
              if(sel) {
                ref.edit(sel);
              }*/
            }
            function demo_rename() {
         /*     var ref = $('#jstree2').jstree(true),
                sel = ref.get_selected();
              if(!sel.length) { return false; }
              sel = sel[0];
              ref.edit(sel);*/
            }
            function demo_delete() {
        /*      var ref = $('#jstree2').jstree(true),
                sel = ref.get_selected();
              if(!sel.length) { return false; }
              ref.delete_node(sel);*/
            }
