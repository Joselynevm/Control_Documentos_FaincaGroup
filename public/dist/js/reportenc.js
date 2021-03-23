var pathname = window.location.pathname;
var fechadesde1, fechahasta1,fechadesde,fechahasta;
var ftodos=false;
var flag=0;


$(function(){
        fechadesde = 'null';
        fechahasta = 'null';
        $('#rangodefechas').prop('disabled',true);
        $('#ctodos').prop('checked',true);
});

$('#rangodefechas').daterangepicker({
         startDate: new Date(), endDate: new Date()
     },function(start, end, label) {
    //console.log("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        fechadesde1 = start.format('YYYY-MM-DD');
        fechahasta1 = end.format('YYYY-MM-DD');
        });

$('#ctodos').change(function() {
   if($(this).is(":checked")) {
      //'checked' event code
    //$('#fechadesde').prop('disabled',true);
    //$('#fechahasta').prop('disabled',true);  
    $('#rangodefechas').prop('disabled',true);
    ftodos = false;
    flag =1;
   }else{
     //$('#fechadesde').prop('disabled',false);
    //$('#fechahasta').prop('disabled',false);
    $('#rangodefechas').prop('disabled',false);
    ftodos = true;  
    flag =0;
   }
   //'unchecked' event code
});

$('#consultaclientes').DataTable({
          "autoWidth": true,
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
          "order": [[ 1, "asc" ]]
    });


 function consultareportes(){
    if($('#codEncuesta').val()=='N'){
        alert('Escoja una encuesta');
    }else{
    cursor_wait();
    if(ftodos){
       fechadesde = $('#rangodefechas').data('daterangepicker').startDate.format('YYYY-MM-DD');
       fechahasta = $('#rangodefechas').data('daterangepicker').endDate.format('YYYY-MM-DD');

    }
    else{
      fechadesde = 'null';
      fechahasta = 'null';
    }
    var codCliente,codVendedor,codEncuesta;
    fechadesde1 = fechadesde.replace('-', '');
    fechahasta1 = fechahasta.replace('-','');
    fechahasta1 = fechahasta1.replace('-','');
    fechadesde1 = fechadesde1.replace('-', '');

    console.log($('#codCliente').val());
    console.log($('#codVendedor').val());
    console.log($('#codEncuesta').val());

    codCliente = $('#codCliente').val();
    codVendedor = $('#codVendedor').val();
    codEncuesta = $('#codEncuesta').val();

    var vendedor,cliente, encuesta;

    if(codCliente=='T'){
      cliente = 'null';
    }else{
      cliente = codCliente;
    }

    if(codVendedor=='T'){
      vendedor = 'null';
    }else{
      vendedor = codVendedor;
    }
    if(codEncuesta=='T'){
      encuesta = 'null';
    }else{
      encuesta = codEncuesta;
    }

    console.log(cliente,vendedor,encuesta);

    $('#fechadesde').val(fechadesde);
    $('#fechahasta').val(fechahasta);
    $('#idcliente').val(cliente);
    $('#idvendedor').val(vendedor);
    $('#idencuesta').val(encuesta);

    $.get(pathname+"/getreportes",{fechadesde:fechadesde1,fechahasta:fechahasta1,cliente:cliente,vendedor:vendedor,encuesta:encuesta},function(){
        
              }).done(function(data){
                 remove_cursor_wait();
                $('#divcapa').remove();
                $('#ct').remove();
                var qw = '<div class="row" id="ct"><div class="col-md-12"><div class="box box-primary"><div class="box-body table-responsive" id="ta">';
               //  $('#ap').append(qw);
                 var table='';
              qw = qw + '<table id="tablareporte" class="table table-bordered table-striped table-hover" cellspacing="0" width="100%">';
               qw = qw + '<thead><tr>';
               var cab = '';
               $.each(data.primero,function(i){
                  cab = cab + '<th>'+ data.primero[i] +'</th>';
                  //console.log(cab);
               });
               qw = qw + cab;
               qw = qw + '</tr></thead>';
               qw  = qw + '<tfoot><tr>';
               qw = qw + cab;
               qw = qw + '</tr></tfoot></table>';
               qw = qw + '</div></div></div></div>';
               $('#ap').append(qw);

               var arreglot = [];
               $.each(data.segundo,function(index,value){
                var arr2 = [];
                $.each(value,function(k,v){
                    arr2.push(v);
                });
                 arreglot.push(arr2);
               });

               console.log(arreglot);
               

               $('#tablareporte').DataTable( {
                    //select: true,
                     data: arreglot,
                     select: true,
                    "deferRender": true,
                    "autoWidth": true,
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
              });

              // var tab = $('#tablareporte').DataTable();
               /*var reporte = $('#tablareporte').DataTable();
               reporte.clear().draw();
               for (var i = 0; i < arreglot.length; i++) {
                 reporte.row.add(arreglot[i]).draw();
               }*/
               $('#csv').prop('disabled',false);
               

              }).fail(function(){
                remove_cursor_wait();
                $('#divcapa').remove();
                $('#ct').remove();
                ("#csv").prop('disabled',true);
              });
      }
  }

