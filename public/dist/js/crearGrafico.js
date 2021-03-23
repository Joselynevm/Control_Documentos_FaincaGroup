function crearGrafico(nombre,div,def,axisX,labels,datos,backgroundColor,tipo=null,options=null){
        var ctx = $('#'.concat(nombre));            
         $.get('graficos/getdata',{
          axisX:axisX,
          labels:labels,            
          datos:datos,
          backgroundColor:backgroundColor, 
          options:options   

        },function(data){

     $('#salesChart').remove();
      var cambas = "<canvas id='salesChart'></canvas>";
        $('#'.concat(div)).append(cambas);

  var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

  var salesChartOptions = {
    maintainAspectRatio : true,
    title: {display: true,
            text: data.titulo
            },
    responsive : true,
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        gridLines : {
          display : true,
        }
      }],
      yAxes: [{
        gridLines : {
          display : true,
        }
      }]
    },
    hover: {
      mode: "label", 
      intersect: true
    },
    tooltips: {
      mode: "label", 
      intersect: false
  }
  }


  var salesChart = new Chart(salesChartCanvas, { 
      type: def, 
      data: data.data, 
      options: salesChartOptions
    }
  )
         
         })

        
  }



function crearGraficoSQL(conexion,sql,col,nombre,div,def,axisX,labels,backgroundColor,tipo=null,options,nombrejex){
        $("#bo").html(''); 
        var ctx = $('#'.concat(nombre));
        if(def==null){
          def="line";
        }

        $.get('graficos/getdataSql',{
          selectedVal:def,
          axisX:axisX,
          labels:labels,
          backgroundColor:backgroundColor, 
          options:options,
          sql:sql, 
          col:col,
          conexion:conexion,
          coluflag:nombrejex},function(data){
           console.log(data);
         }).done(function(data){    

              $('#'.concat(nombre)).remove();
              var cambas = "<div class='info-box col-md-5' style=' margin: 1%;' ><canvas id='".concat(nombre).concat("'></canvas></div>");        
              $('#'.concat(div)).append(cambas);
              ty = $('#'.concat(nombre));
             new Chart(ty,data); 
         }).fail(function(){
              console.log('error');
         });


      }