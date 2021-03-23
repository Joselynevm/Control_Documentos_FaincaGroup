function cargagrupos(){
        
        $.ajax({
                url:   'getgrupos',
                type:  'GET',
                beforeSend: function () {
                        alert('Espere por favor...');
                },
                success:  function (response) {
                alert('Entra');
                
                /*var objects = JSON.stringify(response);
                var x = document.createElement("SELECT");
                //for(var key in objects){
                    //x.append("<option value=\""+key.id+"\">"+key.nombre+"</option>");
                    alert("id="+response.name+"name="+response.state);*/
                     //document.getElementById("contenedor").appendChild(x);
                  //  select+="<option value=\""+arrayOpciones[i]+"\" >"+$("#callbacks option[value='"+arrayOpciones[i]+"']").text()+"</option>";
                //}
            }
                   /*response.forEach(group => {
                         x.append(`<option value=${group.id}> ${group.nombre} </option>`);
                     });*/
                   /* for(d in response.group){
                         x.append('<option value=${response.group[d].id}> ${response.group[d].nombre} </option>');
                    }*/           
        });
}

/*var objects = JSON.stringify(data);
    for (var key in objects) {
        var checkBox = "<input type='checkbox' data-price='" + key.Price + "' name='" + key.Name + "' value='" + key.ID + "'/>" + key.Name + "<br/>";
        $(checkBox).appendTo('#modifiersDiv');
    };
    $('#addModifiers').modal('show');*/