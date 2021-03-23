var w = 0;
var x = 0;
var y = 0;
var z = 0;
var f = 0;
var g = 0;
var h = 0;
var k = 0;
var elements;
var elements2;
var elements3;
var elements4;
var elements5;
var elements6;
var elements7;
var elements8;

function habiniv() {
	console.log('ya');
    w = $('#gencia_nivelinven').val();
	
	if(w){

		console.log(w);
		/*for (var i = 0; i < z; i++) {
			   $( "input[name='grupos[]']" ).each(function() {
			   		alert('si');
			   });
		}*/
		 // var x = document.getElementsByName("gencia_invniv[]")[0].value;
		   elements = document.getElementsByName("gencia_invniv[]");
		//

		for (var i = 0; i < elements.length; i++) {
			elements[i].disabled = true;
			//elements[i].value ='';
		}
		  for (var i = 0; i < w; i++) {
		  	  elements[i].disabled = false;
		  }
		 // console.log(x);
	}else{
		alert('No ha ingresado valor');
	}
	
}

function habinivzon(){
	x = $('#gencia_nivelzonif').val();
	console.log(x);
	if(x){
		elements2 = document.getElementsByName("gencia_zonniv[]");
		console.log($('#cafizo').val());
		for (var i = 0; i < elements2.length; i++) {
			elements2[i].disabled = true;
		}

		for (var i = 0; i < x; i++) {
			elements2[i].disabled = false;
		}
		elements2[9].disabled = false;
	}else{
		alert('No ha ingresado valor');
	}

}

function habinivcla(){
	y = $('#gencia_nivelclasif').val();
	console.log(y);
	if(y){
		elements3 = document.getElementsByName("gencia_claniv[]");

		for (var i = 0; i < elements3.length; i++) {
			elements3[i].disabled = true;
			//elements3[i].value ='';
		}
		for (var i = 0; i < y; i++) {
		  	  elements3[i].disabled = false;
		  }
		 elements3[9].disabled = false;
	}else{
		alert('No ha ingresado valor')
	}

}

function habinivubi(){
		z = $('#gencia_nivelubica').val();
	console.log(z);
	if(z){
		elements4 = document.getElementsByName("gencia_ubiniv[]");

		for (var i = 0; i < elements4.length; i++) {
			elements4[i].disabled = true;
			//elements4[i].value ='';
		}
		for (var i = 0; i < z; i++) {
		  	  elements4[i].disabled = false;
		  }
	}else{
		alert('No ha ingresado valor')
	}
}


function habinivfijo(){
		f = $('#gencia_nivelacfijo').val();
	console.log(f);
	if(f){
		elements5 = document.getElementsByName("gencia_fisniv[]");

		for (var i = 0; i < elements5.length; i++) {
			elements5[i].disabled = true;
			//elements4[i].value ='';
		}
		for (var i = 0; i < f; i++) {
		  	  elements5[i].disabled = false;
		  }
	}else{
		alert('No ha ingresado valor')
	}
}

function habinivind(){

}




function redirigirc(){
 nivelprod = $('#gencia_nivelprod').val();
 nivelzonif = $('#gencia_nivelzonif').val();
 nivelubica = $('#gencia_nivelubica').val();
 nivelacfijo = $('#gencia_nivelacfijo').val();
 nivelprodind = $('#gencia_nivelprodind').val();
 nivelestvta = $('#gencia_nivelestvta').val();
 nivelfijind = $('#gencia_nivelfijind').val();
 nivelbienind = $('#gencia_nivelbienind').val();
 codigo = $('#gencia_codigo').val();
 version = $('#gencia_version').val();
 if(codigo==''||version==''){
 	alert('Campo código/versión se encuentra vacío.');
 }else if(nivelprod==0||nivelzonif==0||nivelubica==0||nivelacfijo==0||nivelestvta==0){
 	alert('Niveles se encuentra en 0');
 }
 else{
 cursor_wait();
 $.post('GENM_0008/postNivC',{nivelprod:nivelprod,nivelzonif:nivelzonif,nivelubica:nivelubica,nivelestvta:nivelestvta,nivelacfijo:nivelacfijo,nivelprodind:nivelprodind,
 	nivelfijind:nivelfijind,nivelbienind:nivelbienind,codigo:codigo,version:version},function(respuesta){
 			console.log(respuesta.mensaje);
 			location.reload(); 

 	});
  }
}




function redirigir(){
 nivelprod = $('#gencia_nivelprod').val();
 nivelzonif = $('#gencia_nivelzonif').val();
 nivelubica = $('#gencia_nivelubica').val();
 nivelacfijo = $('#gencia_nivelacfijo').val();
 nivelprodind = $('#gencia_nivelprodind').val();
 nivelestvta = $('#gencia_nivelestvta').val();
 nivelfijind = $('#gencia_nivelfijind').val();
 nivelbienind = $('#gencia_nivelbienind').val();
 codigo = $('#gencia_codigo').val();
 version = $('#gencia_version').val();
 console.log(nivelprod+nivelzonif+nivelubica+nivelacfijo+nivelestvta);
 if(codigo==''||version==''){
 		alert('Campo código/versión se encuentra vacío.');
 }else if(nivelprod==0||nivelzonif==0||nivelubica==0||nivelacfijo==0||nivelestvta==0){

 	alert('No se puede registrar niveles en 0');
 }
 else{
 cursor_wait();
 $.post('GENM_0008/postNiv',{nivelprod:nivelprod,nivelzonif:nivelzonif,nivelubica:nivelubica,nivelestvta:nivelestvta,nivelacfijo:nivelacfijo,nivelprodind:nivelprodind,
 	nivelfijind:nivelfijind,nivelbienind:nivelbienind,codigo:codigo,version:version},function(respuesta){
 			location.reload(); 
 	});

	}		
}
