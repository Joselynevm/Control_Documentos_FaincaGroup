@extends('layout')

@section('content')
<h1>{{$mensaje}}</h1>  
    <form  id="formulario" style="margin-top: 10px; margin-bottom: 10px; font-size: 20px">
    <label for="usuario" style="color: #23b5c9"> <strong>Usuario: </strong>  </label>
    <input type="text" id="usuario" name="usuario" placeholder="Ingrese su usuario"> <br><br>
    <label style="color: #23b5c9"><strong>Contraseña:</strong></label>
    <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña"> <br> <br>
    <button class="btn btn-dark" type="button" onclick="Registrar()" id="boton">Crear</button>
    </form>
@stop

@section('script')
<script>
function Registrar(){
var datos = new FormData(document.getElementById("formulario"));

$.ajax({
    url:"{{ asset('')}}Practica",
    headers :{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    type: 'POST',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: datos,
    success:function(res){
       if(res.mensaje){
        alert(res.texto);
       }else{
        alert(res.texto);
       }
    }
})

}
</script>
@endsection
