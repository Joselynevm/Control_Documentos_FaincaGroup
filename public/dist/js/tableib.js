  var iditem=0;
  var idbodega=0;
  var bodega='';
  var item='';
  var codigob='';
  var codigoi='';
  var flag=false;
  var f1 = false;
  var th=null;
  var movi=0;

 	  $('#tablaproducto').DataTable({
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
           select: true,
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
        	"order": [[ 1, 'asc' ]]
        });

 	    $('#tablabodega2').DataTable({
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
                }
           ],
 	    });
 	     $('#tablaasignacionbp').DataTable({
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
               }
           ],
 	     });


 	 $('#tablaproducto tr').css('cursor','pointer');
 	  $('#tablaproducto tbody').on('click', 'tr', function (event) {
      if(movi>0){
        if(confirm('Ha realizado movimientos, y si cambia de producto se perderán, desea continuar?')){
            movi=0;
            console.log('ya');
      $('#asigib').prop('disabled',false);
      var table3 = $('#tablaasignacionbp').DataTable();
      table3
    .clear()
    .draw();
    var table2 = $('#tablabodega2').DataTable();
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

      var table = $('#tablaproducto').DataTable();
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
        iditem = data[1];
        //id = data[5];
        //alert( 'You clicked on '+data[1]+'\'s row' );
        var c=0;
          $.get("WMSM_0008/getbodegas", {iditem:iditem}, function(respuesta){
            table2.clear();
            table3.clear();
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
                          if(th.is(':checked')){
                        table2.row.add([
                          check,
                          k,
                          v.oficina,
                          v.codigo,
                          v.nombre,
                          tipo
                          ]).draw(false)}});
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
                        if(th.is(':checked')){
                        table3.row.add([
                          check,
                          v.idbodega,
                          k,
                          v.idbodega,
                          v.idproducto,
                          v.oficina,
                          v.codigobo,
                          v.bodega,
                          tipo
                          ]).draw(false);}});
                      }
                 });               
        
      }).done(function() {
                      remove_cursor_wait();   
               }); 
        }
      }else{
      console.log('ya');
      $('#asigib').prop('disabled',false);
      var table3 = $('#tablaasignacionbp').DataTable();
      table3
    .clear()
    .draw();
    var table2 = $('#tablabodega2').DataTable();
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

 	   	var table = $('#tablaproducto').DataTable();
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
        iditem = data[1];
        //id = data[5];
        //alert( 'You clicked on '+data[1]+'\'s row' );
        var c=0;
          $.get("WMSM_0008/getbodegas", {iditem:iditem}, function(respuesta){
            table2.clear();
            table3.clear();
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
                          if(th.is(':checked')){
                        table2.row.add([
                          check,
                          k,
                          v.oficina,
                          v.codigo,
                          v.nombre,
                          tipo
                          ]).draw(false)}});
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
                        if(th.is(':checked')){
                        table3.row.add([
                          check,
                          v.idbodega,
                          k,
                          v.idbodega,
                          v.idproducto,
                          v.oficina,
                          v.codigobo,
                          v.bodega,
                          tipo
                          ]).draw(false);}});
                      }
                 });            	 
        
			}).done(function() {
                      remove_cursor_wait();   
               }); 
    }
    });


    /*$('#asigbodega').on('click',function(){
        var table2 = $('#tablabodega2').DataTable();
        var check = '<input type="checkbox" name="listacheckbp2"/>';
      $.get("WMSM_0008/getbodegasa",function(respuesta){
            table2.clear();
             $.each(JSON.parse(respuesta), function( index, value){
                  var tipo = "";
                  if(value.tipo=='A'){
                    tipo = "Almacenamiento";
                  }else if(value.tipo=='M'){
                    tipo = "Mal Estado";
                  }else if(value.tipo=='T'){
                    tipo = "Transito";
                  }
                  console.log(index+" "+value.nombre);
                    table2.row.add([
                      check,
                       index,
                       value.oficina,
                       value.codigo,
                       value.nombre,
                       tipo
                    ]).draw(true);
             });
      });
    });*/


    $('#tablabodega2 tbody').on('hover','tr').css('cursor','pointer');
    $('#tablabodega2 tbody').on('click', 'tr', function (event) {
      cursor_wait();
       var check = '<input type="checkbox" name="listacheckbp2"/>';
       var table2 = $('#tablabodega2').DataTable();
       var data = table2.row( this ).data();
       var idbodega = data[1];
       var oficina = data[2];
       var codigo = data[3];
       var bodega = data[4];
       var tipo = data[5];
       var id="0";
     /*  $.get("WMSM_0008/getbodegat1",{idbodega:idbodega},function(){

       });*/
       console.log(bodega+" "+item);
       var table3 = $('#tablaasignacionbp').DataTable();
       ++movi;
       table3.row.add([
        check,
        idbodega,
        id,
        idbodega,
        iditem,
        oficina,
        codigo,
        bodega,
        tipo,
        ]).draw(true);
        table2
        .row( $(this) )
        .remove()
        .draw(false);
        remove_cursor_wait();
        });


    $('#tablaasignacionbp tbody').on('hover','tr').css('cursor','pointer');
    $('#tablaasignacionbp tbody').on('click','tr',function(event){
      
        var check = '<input type="checkbox" name="listacheckbp2"/>';
        var table3 = $('#tablaasignacionbp').DataTable();
        var table2 = $('#tablabodega2').DataTable();
        var data = table3.row(this).data();
        var idbodega = data[3];
        cursor_wait();
        $.get("WMSM_0008/getbodegat1",{idbodega:idbodega},function(data){
                  var tipo = "";
                  if(data.tipo=='A'){
                    tipo = "Almacenamiento";
                  }else if(data.tipo=='M'){
                    tipo = "Mal Estado";
                  }else if(data.tipo=='T'){
                    tipo = "Transito";
                  }
            table2.row.add([
              check,
              data.id,
              data.oficina,
              data.codigo,
              data.nombre,
              tipo
              ]).draw(true);
            remove_cursor_wait();
       });
        table3
           .row( $(this) )
           .remove()
           .draw(true);
        ++movi;
    });

function asignarib(){
  cursor_wait();
 var arrid = [];
 //var arrnue =  ['',''];
  var table = $('#tablaasignacionbp').DataTable();
 
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
              console.log(data[2]+" "+data[3] + " "+ data[4]);
               var id = data[2];
               var idbodega = data[3];
               var idproducto = data[4];
               var et = {
                    "id" : id,
                    "idbodega": idbodega,
                    "idproducto": idproducto 
                }
                deleid.dat.push(et);
              console.log(deleid);
        });
          var jarrid = JSON.stringify(arrid);
          var jdeleid = JSON.stringify(deleid);

  $.post("WMSM_0008/postib",{jarrid:jarrid,jdeleid:jdeleid},function(respuesta){

      }).done(function(){
        remove_cursor_wait();
           cargatodoib();
           movi=0;
           console.log(movi);
      });
     // cargatodoib();
  }

  function cargatodoib(){
      var check = '<input type="checkbox" name="listacheckbp2"/>';
      console.log('s');
     var table = $('#tablaasignacionbp').DataTable();
     table
    .clear()
    .draw();
    cursor_wait();
   $.get('WMSM_0008/cargabodega',{iditem:iditem}, function(respuesta){
         $.each(JSON.parse(respuesta), function( index, value){
          console.log(index, value.idbodega,value.idproducto,value.bodega);
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
                          value.idbodega,
                          index,
                          value.idbodega,
                          value.idproducto,
                          value.oficina,
                          value.codigobo,
                          value.bodega,
                          tipo
                          ]).draw(false);



          }
            );
         }).done(function(){remove_cursor_wait();});
  }



    function todoaba(){
    ++movi;
    var check = '<input type="checkbox" name="listacheckbp2"/>';
    var table2 = $('#tablabodega2').DataTable();
    var table3 = $('#tablaasignacionbp').DataTable();
    var data = table2.rows().data();
    var id="0";
    table2.rows().every(function(){
         console.log(this.data()[1]+"-"+this.data()[2]);
         var idbodega = this.data()[1];
         var oficina = this.data()[2];
         var codigo = this.data()[3];
         var bodega = this.data()[4];
         var tipo = this.data()[5];
         table3.row.add([
              check,
              idbodega,
              id,
              idbodega,
              iditem,
              oficina,
              codigo,
              bodega,
              tipo,
          ]).draw(true);
    });
    table2.clear().draw();
  }


  function todoarri(){
    ++movi;
     var check = '<input type="checkbox" name="listacheckbp2"/>';
     var table2 = $('#tablabodega2').DataTable();
     var table3 = $('#tablaasignacionbp').DataTable();
     var data = table3.rows().data();
     table3.rows().every(function(){
        var idbodega = this.data()[1];
         var oficina = this.data()[5];
         var codigo = this.data()[6];
         var bodega = this.data()[7];
         var tipo = this.data()[8];
         table2.row.add([
           check,
           idbodega,
           oficina,
           codigo,
           bodega,
           tipo
          ]).draw(true);
     });
     table3.clear().draw();
  }


  $('#tablaproducto tbody').on('change','input[type=checkbox][name=listacheckbp]',function(){
     th = $(this), name = th.prop('name'); 
 if(th.is(':checked')){
      if(movi>0)
          {
            th.prop('checked',false);
            console.log('movimientos locos');
          }else{
         console.log('entra'+" "+name);
        $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false); 
     }  
  }else{
    var table3 = $('#tablaasignacionbp').DataTable();
     var table2 = $('#tablabodega2').DataTable();
     table2.clear().draw();
     table3.clear().draw();
  }
});
