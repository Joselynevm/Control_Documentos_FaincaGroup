/*var fla=false;
function uni_habilitar(){
	if(fla==false){
	 document.getElementById("unidadbase").disabled=false;
    document.getElementById("unidadrela").disabled=false;
    fla=true;
	}else{
	 document.getElementById("unidadbase").disabled=true;
    document.getElementById("unidadrela").disabled=true;
    clearForm();
    fla=false;
	}
}*/

function confir(){
    var codigo = document.forms["formedi1"]["invund_codigo"].value;
    var descripcion = document.forms["formedi1"]["invund_descripcion"].value;
    if (descripcion==""||codigo=="") {
        alert("Existen espacios en blancos");
        return false;
    }
}

function confir2(){
    var codigo = document.forms["formedi2"]["invund_codigo"].value;
    var descripcion = document.forms["formedi2"]["invund_descripcion"].value;
    var padre = document.forms["formedi2"]["invund_uuid_padre"].value;
    var relacion = document.forms["formedi2"]["invund_relacion"].value;
    var conversion = document.forms["formedi2"]["invund_conversion"].value;
    if (descripcion==""||codigo==""||relacion==""||conversion=="") {
        alert("Existen espacios en blancos");
        return false;
    }

}

$('input[type=radio][name=optionsRadios]').change(function() {
         var pathname = window.location.pathname;
         console.log(pathname);
        if (this.value == 'b') {
            //alert("Allot Thai Gayo Bhai");
            /*document.getElementById("invnud_codigo").disabled=false;
            document.getElementById("invnud_descripcion").disabled=false;
            document.getElementById("invnud_codigob").disabled=true;
            document.getElementById("invnud_uuid_padreb").disabled=true;
            document.getElementById("invnud_descripcionb").disabled=true;
            document.getElementById("invnud_relacionb").disabled=true;
            document.getElementById("invnud_conversionb").disabled=true;*/
            $('#invnud_codigo').prop( "disabled", false );
            $('#invnud_descripcion').prop( "disabled", false );
            $('#invnud_codigob').prop( "disabled", true );
            $('#invnud_descripcionb').prop( "disabled", true );
            $('#invnud_relacionb').prop( "disabled", true );
            $('#invnud_conversionb').prop( "disabled", true );
            $('#bbase').prop( "disabled", false );
            $('#brelacion').prop( "disabled", true );
            $('.select2').prop( "disabled", true );
            $('#invnud_codigo').focus();
            //$('#invnud_uuid_padreb').select2('disable');
            //$('#invnud_uuid_padreb').select2('false');

        }
        else if (this.value == 'r') {
            //alert("Transfer Thai Gayo");
            /*document.getElementById("invnud_codigob").disabled=false;
            document.getElementById("invund_uuid_padreb").disabled=false;
            document.getElementById("invnud_descripcionb").disabled=false;
            document.getElementById("invnud_relacionb").disabled=false;
            document.getElementById("invnud_conversionb").disabled=false;
            document.getElementById("invnud_codigo").disabled=true;
            document.getElementById("invnud_descripcion").disabled=true;*/
             $('#invnud_codigo').prop( "disabled", true );
            $('#invnud_descripcion').prop( "disabled", true );
            $('#invnud_codigob').prop( "disabled", false );
            $('#invnud_descripcionb').prop( "disabled", false );
            $('#invnud_relacionb').prop( "disabled", false );
            $('.select2').prop( "disabled", false );
            $('#invnud_conversionb').prop( "disabled", false );
            $('#bbase').prop( "disabled", true );
            $('#brelacion').prop( "disabled", false );
            $('#invund_uuid_padreb').focus();
           // $('#invnud_uuid_padreb').select2('false');
           // $('.form-control select2').prop( "disabled", false );
        }
    });
var id=0;
 $('#invund_uuid_padreb').on('change', function (e) {
         id=this.value;
         var pathname = window.location.pathname;
         cursor_wait();
         $.get(pathname+'/base',{id:id},function(data){
             var codigo = data.cod;
             var padreid = data.padreid;
             $('#invund_codigob').val(codigo);
             $('#padreid').val(padreid);
         }).done(function() {
                     remove_cursor_wait();
               });
    });

function clearForm(){
  $('input[type=radio][name=optionsRadios]').each(function(){
      $(this).prop('checked', false);
  });
 }

 function grabarbase(){
 	var codigo = $('#invund_codigo').val();
 	var descripcion = $('#invnud_descripcion').val();
  console.log(param);
 	if(param!=1)
    {
      if(codigo==""||descripcion==""){
         alert('Existen espacios en blancos');
      }else{
      if(descripcion==""){
         alert('Existen espacios en blancos');
      }else{
  $.post("create/grabarbase", {codigo:codigo,descripcion:descripcion}, function(respuesta){
    console.log(respuesta.mensaje);
    $(location).attr('href', '/INVM_0002')

  }).fail(function() {
                    alert( "Código ya ha sido registrado" );
                });
      }
    }
    }else{
      if(descripcion==""){
         alert('Existen espacios en blancos');
      }else{
  $.post("create/grabarbase", {codigo:codigo,descripcion:descripcion}, function(respuesta){
    console.log(respuesta.mensaje);
    $(location).attr('href', '/INVM_0002')

  }).fail(function() {
                    alert( "Código ya ha sido registrado" );
                });
      }
    }
 }

 var idpadre=0;
    /*    $('.select2').on('change', function (e) {
          idpadre = this.value;
          console.log(idpadre);
      });*/

 function grabarrelacion(){
 	var codigo = $('#invund_codigob').val();
  console.log(codigo);
 	var descripcion = $('#invnud_descripcionb').val();
 	var unidad_relacional = $('#invnud_relacionb').val();
  var padreid = $('#padreid').val();
 	var factor = $('#invnud_conversionb').val();
 	if(codigo==""||descripcion==""||factor==""){
 		alert('Existen espacios en blancos');
 	}else{
 	$.post('create/grabarrelacion',{codigo:codigo,descripcion:descripcion,
 		unidadrela:unidad_relacional,factor:factor,idpadre:padreid}, function(respuesta){
 				console.log(respuesta.mensaje);
 		$(location).attr('href', '/INVM_0002')
 		}).fail(function() {
                    alert( "Unidad Relacional - Código ya ha sido registrado" );
                });
 	}
 }