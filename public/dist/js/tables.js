  var iditem=0;
  var iduni=0;
  var unidad='';
  var item='';
  var codigou='';
  var codigoi='';
  var pathname = window.location.pathname;

 	  $('#tablaitem').DataTable({
          "autoWidth": false,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "búsQueda:",
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
           "responsive": true,
           "lengthChange": false,
            "columnDefs": [
            {
                "targets": [ 5 ],
                "visible": false,
                "searchable": false
            },
            {
            	"targets": [ 0 ],
            	"orderable": false,
            	"className": 'select-checkbox'
            }
           ],
          select: true,
        	"order": [[ 1, 'asc' ]]
        });

 	  $('#tablaunidad2').DataTable({
          "autoWidth": false,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "búsQueda:",
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
           "responsive": true,
           "lengthChange": false,
           "columnDefs": [
              {
                  "targets": [ 0 ],
                  "orderable": false,
              },
              {
                "targets": [ 1 ],
                "visible": false,
              }
           ],
        });

 	 

 	  $('#tablaasignacion').DataTable({
          "autoWidth": false,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "búsQueda:",
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
           "responsive": true,
           "lengthChange": false,
           "columnDefs" : [
                {
                  "targets":[ 0 ],
                  "orderable":false,
                }
           ],
        });


     $('#tablaitem tr').css('cursor','pointer');
 	   $('#tablaitem tbody').on('click', 'tr', function (event) {
      var table = $('#tablaasignacion').DataTable();
      table
    .clear()
    .draw();
    var table2 = $('#tablaunidad2').DataTable();
      table2
    .clear()
    .draw();
      iditem = 0;
      cursor_wait();
 	   	 if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
       }

 	   	var table = $('#tablaitem').DataTable();
 	   	var table2 = $('#tablaunidad2').DataTable();
      var check = '<input type="checkbox" name="listacheck2"/>';
 	    //table2.clear();
 	    //table2.draw();
        var data = table.row( this ).data();
        item="";
        item=data[3];
        codigoi='';
        codigoi=data[2];
        iditem = data[1];
        id = data[1];
        //alert( 'You clicked on '+data[1]+'\'s row' );
          $.get("INVM_0005/getunidades", {id:id}, function(respuesta){
            table2.clear();
                 //table2.draw();
                 $.each(JSON.parse(respuesta), function( index, value){
                  console.log(index+" "+value.descripcion);
                    table2.row.add([
                      check,
                       index,
                       value.codigo,
                       value.relacion,
                       value.descripcion
                    ]).draw(false);
                 }); 
                   	 
			}).done(function() {
                     //alert('hecho');
                     remove_cursor_wait();
               }); 
    });
 
$('#tablaunidad2 tbody').on('hover','tr').css('cursor','pointer');
$('#tablaunidad2 tbody').on('click','tr', function (event){
  iduni = 0;
   var table2 = $('#tablaasignacion').DataTable();
      table2
    .clear()
    .draw();
  cursor_wait();
  $('#bcrear').prop( 'disabled', false );
 if (event.target.type !== 'checkbox') {
            var ch = $(':checkbox',this);
            ch.trigger('click');
  }
  var table2 = $('#tablaunidad2').DataTable();
  var table3 = $('#tablaasignacion').DataTable();
  var check2 = '<input type="checkbox" name="listacheck3"/>';
  var data = table2.row(this).data();
  unidad="";
  unidad=data[4];
  codigou="";
  codigou=data[2];
  iduni = data[1];
  //item="";
  //unidad="";
  $.get('INVM_0005/getbarra',{iduni:iduni}, function(respuesta){
          table3.clear();
          $.each(JSON.parse(respuesta),function(index,value){
            //item = value.item;
            //unidad = value.unidad;

            table3.row.add([
              check2,
              index,
              value.codigo,
              value.item,
              value.unidad,
              ]).draw(false);
          });
          
  }).done(function() {
                     //alert('hecho');
                     remove_cursor_wait();
               }); 
});
var iditemedi;
var iduniedi;
var descripedi;
var nombreedi;
var codbedi;
var idbarra;
var fila;
var tablafinal;
$('#tablaasignacion tbody').on('hover','tr').css('cursor','pointer');
$('#tablaasignacion tbody').on('click','tr', function(event){
cursor_wait();
  if(event.target.type!=='checkbox'){
    var ch=$(':checkbox',this);
    ch.trigger('click');
  }
  var table3 = $('#tablaasignacion').DataTable();
  fila=null;
  fila = table3.row(this);
  tablafinal = null;
  tablafinal = table3;
  var data = table3.row(this).data();
  console.log(data[1]);
  idbarra="";
  idbarra = data[1];
  codbedi="";
  codbedi=data[2];
  $.get('INVM_0005/getbarraedi',{idbarra:idbarra},function(respuesta){
        iditemedi="";
        iduniedi="";
        descripedi="";
        nombreedi="";
        iditemedi=respuesta.iditem;
        iduniedi=respuesta.iduni;
        descripedi=respuesta.udescrip;
        nombreedi=respuesta.inombre;
  }).done(function() {
                     //alert('hecho');
                     remove_cursor_wait();
                     $('#beditar').prop('disabled',false);
                     $('#bborrar').prop('disabled',false);
               }); 
});


$('#tablaasignacion tbody').on('change','input[type=checkbox][name=listacheck3]',function(){
  var th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
     $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
  }
});

$('#tablaunidad2 tbody').on('change','input[type=checkbox][name=listacheck2]',function(){
  //console.log('entra');
 var th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
     $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
  }
});

$('input[type=checkbox][name=listacheck]').on('change',function(){
//console.log('ya');
 var th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
     $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
  }
});

/*$('input[type=checkbox][name=listacheck2]').on('change','#tablaunidad2 tr',function(){
console.log('ya');
 var th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
     $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
  }
});*/


function bcrear(){
      $('#invibr_codigobarra').val('');
      console.log(item+" "+unidad);
      $('#modalcrea').modal();
      $('#cabe').empty();
      div='';
      div='<div class="form-group"><label>Producto</label></br>';
      div+='<label>Id: '+iditem+' -- Código: '+codigoi+' -- Nombre: '+item+'</label></br>';
      div+='<label>Unidad</label></br>';
      div+='<label>Id: '+iduni+' -- Código: '+codigou+' -- Descripcion: '+unidad+'</label></br>';
      div+='</div>';
      $('#cabe').html(div);


}

$('#modalcrea').on('shown.bs.modal', function () {
    $('#invibr_codigobarra').focus();
});

function beditar(){
      $('#invibr_codigobarrae').val('');
      $('#modaledi').modal();
      $('#cabe2').empty();
      div='';
      div='<div class="form-group"><label>Item</label></br>';
      div+='<label>Id: '+iditemedi+' Nombre: '+nombreedi+'</label></br>';
      div+='<label>Unidad</label></br>';
      div+='<label>Id: '+iduniedi+' Descripcion: '+descripedi+'</label></br>';
      div+='</div>';
      $('#cabe2').html(div);
      console.log(codbedi);
      $('#invibr_codigobarrae').val(codbedi);


}

function bborrar(){
      if (confirm("Estas seguro de borrar este registro?")) {
        //alert("Clicked Ok");
        $.post(pathname+"/borrarcb",{idbarra:idbarra},function(respuesta){
            cargatodo();
            alert(respuesta.mensaje);
            //var table3 = $('#tablaasignacion').DataTable();
            //table3.row(fila).remove().draw();

        }
          ).fail(function() {
             alert( "Existen Errores. No se puede borrar este registro" );
             return false;
             });
        return true;
    } else {
        //alert("Clicked Cancel");
        return false;
    }
}

var check3 = '<input type="checkbox" name="listacheck3"/>';
function grabarcb(){
     if($('#invibr_codigobarra').val()==""){
          alert('El campo Código de Barra es obligatorio');
     }else{
      cursor_wait();
     var codb = $('#invibr_codigobarra').val();
     $.post("INVM_0005/postcodb",{iditem:iditem,iduni:iduni,codb:codb},function(respuesta){
          $('#modalcrea').modal('hide');
          //alert(respuesta.mensaje);
          var table3 = $('#tablaasignacion').DataTable();
          table3.row.add([
              check3,
              respuesta.id,
              codb,
              item,
              unidad,
              ]).draw(false);

     }).done(function(respuesta) {
                     //remove_cursor_wait();
                     alert(respuesta.mensaje);
                     remove_cursor_wait();
               }) .fail(function( data ) {
       /* var response = JSON.parse(data.responseText);
        var errorString = '';
        $.each( response.errors, function( key, value) {
            errorString += '--' + value + '\n';
        });
        alert(errorString);*/
        alert('Código de barra ya existe');
        remove_cursor_wait();
      });
    }
}

function grabaredi(){
  var codb = $('#invibr_codigobarrae').val();
  $.post("INVM_0005/postedib",{idbarra:idbarra,codb:codb},function(respuesta){
       cargatodo();
       $('#modaledi').modal('hide');
       alert(respuesta.mensaje);
  });
}

function cargatodo(){
  var table3 = $('#tablaasignacion').DataTable();
  table3.clear().draw();
  /*$.get('INVM_0005/gettodo',{iditem:iditem,iduni:iduni}, function(respuesta){
          $.each(JSON.parse(respuesta),function(index,value){
            //item = value.item;
            //unidad = value.unidad;
            table3.row.add([
              check3,
              index,
              value.codigo,
              value.item,
              value.unidad,
              ]).draw();
          });
  });*/
}

