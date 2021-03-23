
 $('#tablaestado').DataTable({
          "autoWidth": true,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "Búsqueda:",
            "select": {
                  "rows": "%d Registros seleccionados"
                  },
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
        select: true,
        "responsive": true,
        "order": [[ 1, "asc" ]]
    });

  $('#tablatipotrans').DataTable({
            "autoWidth": true,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "Búsqueda:",
            "select": {
                  "rows": "%d Registros seleccionados"
                  },
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
        select: true,
        "responsive": true,
        "order": [[ 1, "asc" ]]
        });


     $('#tablageneral').DataTable({
        "lengthMenu": [[ 100,50,20], [100,50,20]],
            "autoWidth": false,
          "language": {
            "lengthMenu": "Mostrar _MENU_ Registros",
            "zeroRecords": "No hay registros...",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados de _MAX_ registros totales)",
            "search": "Búsqueda:",
            "select": {
                  "rows": "%d Registros seleccionados"
                  },
             "paginate": {
             "first":      "First",
             "last":       "Last",
             "next":       "Sigue",
             "previous":   "Previo"
              }
        },
        select: true,
        "responsive": true,
        "order": [[ 1, "asc" ]]
        });