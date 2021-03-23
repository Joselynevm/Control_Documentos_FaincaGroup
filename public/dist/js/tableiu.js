  var iditem=0;
  var idubicacion=0;
  var ubicacion='';
  var item='';
  var codigou='';
  var codigoi='';
  var movi=0;


 	  $('#tablaproducto2').DataTable({
          "autoWidth": false,
            "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "Búsqueda:",
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
            	"orderable": false
            }
           ],
          select: true,
        	"order": [[ 1, 'asc' ]]
        });

 	    $('#tablaubicacion').DataTable({
 	    	 "autoWidth": false,
           "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "Búsqueda:",
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
                },
                {
                  "targets":[ 6 ],
                  "visible":false,
                }
           ],
 	    });
 	     $('#tablaasignacionup').DataTable({
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
                },
                 {
                "targets": [ 2 ],
                "visible": false,
                },
                 {
                "targets": [ 3 ],
                "visible": false,
               },
                {
                "targets": [ 4 ],
                "visible": false,
               },
                {
                "targets": [ 9 ],
                "visible": false,
               }
           ],
 	     });

$('#tablaproducto2 tr').css('cursor','pointer');
    $('#tablaproducto2 tbody').on('click', 'tr', function (event) {
      if(movi>0){
            if(confirm('Ha realizado movimientos, y si cambia de producto se perderán, desea continuar?')){
                movi=0;
                $('#asigiu').prop('disabled',false);
      var tableiu = $('#tablaasignacionup').DataTable();
      tableiu
    .clear()
    .draw();
    var table2 = $('#tablaubicacion').DataTable();
      table2
    .clear()
    .draw();
      iditem = 0;
     cursor_wait();
       if (event.target.type !== 'checkbox') {

        if($(':checkbox',this).prop('checked')){
           $(':checkbox', this).prop('checked',false).trigger("change");
        }else{
            $(':checkbox', this).prop('checked',true).trigger("change");
          }
       }

      var table = $('#tablaproducto2').DataTable();
     // var table3 = $('#tablaasignacionbp').DataTable();
      //var table2 = $('#tablabodega2').DataTable();
      var check = '<input type="checkbox" name="listacheckbp2"/>';
      //table2.clear();
      //table2.draw();
        var data = table.row( this ).data();
        item="";
        item=data[3];
        codigoi='';
        codigoi=data[2];
        iditem=0;
        iditem = data[1];
        //id = data[5];
        //alert( 'You clicked on '+data[1]+'\'s row' );
        var c=0;
          $.get("WMSM_0009/getubicacion", {iditem:iditem}, function(respuesta){
            table2.clear().draw();
            tableiu.clear().draw();
                 //table2.draw();
                 $.each(JSON.parse(respuesta), function( index, value){
                      if(index=='op1'){
                          $.each(this, function(k, v) {
                           var tipo = "";
                          if(v.tipo=='A'){
                            tipo = "Almacenamiento";
                          }else if(v.tipo=='M'){
                            tipo = "Mal Estado";
                          }else if(v.tipo=='T'){
                            tipo = "Transito";
                          }
                        table2.row.add([
                          check,
                          k,
                          v.codigo,
                          v.bodega,
                          v.nombre,
                          tipo,
                          v.idixbo
                          ]).draw(false)});
                      }else{
                         $.each(this, function(k, v) {
                           var tipo = "";
                          if(v.tipo=='A'){
                            tipo = "Almacenamiento";
                          }else if(v.tipo=='M'){
                            tipo = "Mal Estado";
                          }else if(v.tipo=='T'){
                            tipo = "Transito";
                          }
                        tableiu.row.add([
                          check,
                          v.idubica,
                          k,
                          v.idubica,
                          v.idproducto,
                          v.codigo,
                          v.bodega,
                          v.ubicacion,
                          tipo,
                          v.idixbo
                          ]).draw(false)});
                      }
                 }); 
                     
      }).done(function() {
                      remove_cursor_wait();   
               }); 
            }
      }else{
      $('#asigiu').prop('disabled',false);
      var tableiu = $('#tablaasignacionup').DataTable();
      tableiu
    .clear()
    .draw();
    var table2 = $('#tablaubicacion').DataTable();
      table2
    .clear()
    .draw();
      iditem = 0;
     cursor_wait();
       if (event.target.type !== 'checkbox') {

        if($(':checkbox',this).prop('checked')){
           $(':checkbox', this).prop('checked',false).trigger("change");
        }else{
            $(':checkbox', this).prop('checked',true).trigger("change");
          }
       }

      var table = $('#tablaproducto2').DataTable();
     // var table3 = $('#tablaasignacionbp').DataTable();
      //var table2 = $('#tablabodega2').DataTable();
      var check = '<input type="checkbox" name="listacheckbp2"/>';
      //table2.clear();
      //table2.draw();
        var data = table.row( this ).data();
        item="";
        item=data[3];
        codigoi='';
        codigoi=data[2];
        iditem=0;
        iditem = data[1];
        //id = data[5];
        //alert( 'You clicked on '+data[1]+'\'s row' );
        var c=0;
          $.get("WMSM_0009/getubicacion", {iditem:iditem}, function(respuesta){
            table2.clear().draw();
            tableiu.clear().draw();
                 //table2.draw();
                 $.each(JSON.parse(respuesta), function( index, value){
                      if(index=='op1'){
                          $.each(this, function(k, v) {
                           var tipo = "";
                          if(v.tipo=='A'){
                            tipo = "Almacenamiento";
                          }else if(v.tipo=='M'){
                            tipo = "Mal Estado";
                          }else if(v.tipo=='T'){
                            tipo = "Transito";
                          }
                        table2.row.add([
                          check,
                          k,
                          v.codigo,
                          v.bodega,
                          v.nombre,
                          tipo,
                          v.idixbo
                          ]).draw(false)});
                      }else{
                         $.each(this, function(k, v) {
                           var tipo = "";
                          if(v.tipo=='A'){
                            tipo = "Almacenamiento";
                          }else if(v.tipo=='M'){
                            tipo = "Mal Estado";
                          }else if(v.tipo=='T'){
                            tipo = "Transito";
                          }
                        tableiu.row.add([
                          check,
                          v.idubica,
                          k,
                          v.idubica,
                          v.idproducto,
                          v.codigo,
                          v.bodega,
                          v.ubicacion,
                          tipo,
                          v.idixbo
                          ]).draw(false)});
                      }
                 }); 
                     
      }).done(function() {
                      remove_cursor_wait();   
               }); 
     }
    });

  $('#tablaubicacion tbody').on('hover','tr').css('cursor','pointer');
    $('#tablaubicacion tbody').on('click', 'tr', function (event) {
      cursor_wait();
       var check = '<input type="checkbox" name="listacheckbp2"/>';
       var table2 = $('#tablaubicacion').DataTable();
       var data = table2.row( this ).data();
       var codigo = data[2];
       var bodega = data[3];
       var idubicacion = data[1];
       var ubicacion = data[4];
       var tipo = data[5];
       var idixbo = data[6];
       var id="0";
     /*  $.get("WMSM_0008/getbodegat1",{idbodega:idbodega},function(){

       });*/
       console.log(ubicacion+" "+item);
       var table3 = $('#tablaasignacionup').DataTable();
       ++movi;
       table3.row.add([
        check,
        idubicacion,
        id,
        idubicacion,
        iditem,
        codigo,
        bodega,
        ubicacion,
        tipo,
        idixbo
        ]).draw(true);
        table2
        .row( $(this) )
        .remove()
        .draw(false);
        remove_cursor_wait();
        });

$('#tablaasignacionup tbody').on('hover','tr').css('cursor','pointer');
    $('#tablaasignacionup tbody').on('click','tr',function(event){
      
        var check = '<input type="checkbox" name="listacheckbp2"/>';
        var table3 = $('#tablaasignacionup').DataTable();
        var table2 = $('#tablaubicacion').DataTable();
        var data = table3.row(this).data();
        var idubicacion = data[1];
        var codigo = data[5];
        var bodega = data[6];
        var ubicacion = data[7];
        var tipo = data[8];
        var idixbo = data[9];
        cursor_wait();
            table2.row.add([
              check,
              idubicacion,
              codigo,
              bodega,
              ubicacion,
              tipo,
              idixbo
              ]).draw(true);
            remove_cursor_wait();
        table3
           .row( $(this) )
           .remove()
           .draw(true);
         ++movi;
    });


function asignarub(){
  cursor_wait();
 var arrid = [];
 //var arrnue =  ['',''];
  var table = $('#tablaasignacionup').DataTable();
 
    table
    .column( 2 )
    .data()
    .each( function ( value, index ) {
        console.log( 'Data in index: '+index+' is: '+value );
        if(value!=0){
          arrid.push(value);
        }
    } );

    console.log(arrid);

        var deleid = {};
        var dat = [];
        deleid.dat = dat;

         console.log(deleid);
         table.rows().every(function(){
              var data="";
              var data = table.row($(this)).data();
              console.log(data[2]+" "+data[3] + " "+ data[4]+" "+data[9]);
               var id = data[2];
               var idubica = data[3];
               var idproducto = data[4];
               var idixbo = data[9];
               var et = {
                    "id" : id,
                    "idubica": idubica,
                    "idproducto": idproducto,
                    "idixbo": idixbo
                }
                deleid.dat.push(et);
              console.log(deleid);
        });
          var jarrid = JSON.stringify(arrid);
          var jdeleid = JSON.stringify(deleid);

  $.post("WMSM_0009/postib",{jarrid:jarrid,jdeleid:jdeleid},function(respuesta){

      }).done(function(){
        remove_cursor_wait();
           cargatodoub();
           movi=0;
           console.log(movi);
      });
      //cargatodoub();
  }


 function todoabau(){
    ++movi;
    var check = '<input type="checkbox" name="listacheckbp2"/>';
    var table2 = $('#tablaubicacion').DataTable();
    var table3 = $('#tablaasignacionup').DataTable();
    var data = table2.rows().data();
    var id="0";
    table2.rows().every(function(){
         console.log(this.data()[1]+"-"+this.data()[2]);
         var codigo = this.data()[2];
         var bodega = this.data()[3];
         var idubicacion = this.data()[1];
         var ubicacion = this.data()[4];
         var tipo = this.data()[5];
         var idixbo = this.data()[6];
         var id="0";
         table3.row.add([
              check,
              idubicacion,
              id,
              idubicacion,
              iditem,
              codigo,
              bodega,
              ubicacion,
              tipo,
              idixbo
          ]).draw(true);
    });
    table2.clear().draw();
  }


  function todoarriu(){
    ++movi;
    var check = '<input type="checkbox" name="listacheckbp2"/>';
     var table2 = $('#tablaubicacion').DataTable();
     var table3 = $('#tablaasignacionup').DataTable();
     var data = table3.rows().data();
     table3.rows().every(function(){
        var idubicacion = this.data()[1];
        var codigo = this.data()[5];
        var bodega = this.data()[6];
        var ubicacion = this.data()[7];
        var tipo = this.data()[8];
        var idixbo = this.data()[9];
         table2.row.add([
              check,
              idubicacion,
              codigo,
              bodega,
              ubicacion,
              tipo
          ]).draw(true);
     });
     table3.clear().draw();
  }




  function cargatodoub(){
      var check = '<input type="checkbox" name="listacheckbp2"/>';
      console.log('s');
     var table = $('#tablaasignacionup').DataTable();
     table
    .clear()
    .draw();
    cursor_wait();
   $.get('WMSM_0009/cargaubicacion',{iditem:iditem}, function(respuesta){
         $.each(JSON.parse(respuesta), function( index, value){
        //  console.log(index, value.idbodega,value.idproducto,value.bodega);
              var tipo = "";
                  if(value.tipo=='A'){
                    tipo = "Almacenamiento";
                  }else if(value.tipo=='M'){
                    tipo = "Mal Estado";
                  }else if(value.tipo=='T'){
                    tipo = "Transito";
                  }
            table.row.add([
                          check,
                          value.idubica,
                          index,
                          value.idubica,
                          value.idproducto,
                          value.codigo,
                          value.bodega,
                          value.ubicacion,
                          tipo,
                          value.idixbo,
                          ]).draw(false);}
            );
         }).done(function(){remove_cursor_wait();});
  }



  $('#tablaproducto2 tbody').on('change','input[type=checkbox][name=listacheckbp]',function(){
     th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
    if(movi>0){
         th.prop('checked',false);
         console.log('movimientos locos');
    }else{
      console.log('entra'+" "+name);
     $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
   }
  }else{
    var table3 = $('#tablaasignacionup').DataTable();
     var table2 = $('#tablaubicacion').DataTable();
     table2.clear().draw();
     table3.clear().draw();
  }
});
