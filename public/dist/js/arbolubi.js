var ida = 0;
var crea = false;
var edit = false;
var codigo;
var descripcion;

var flag1 = false;
var flag2 = false;
var idpaed;
var nivmax = "";
var level = 0;
var n = 0;
var fled = 0;
var padglo = "";
var defi = "";
var codglo = "";

function limpiarniu() {
  ida = 0;
  idpaed = 0;
  codigo = "";
  descripcion = "";
}


$(function () {
  // 6 create an instance when the DOM is ready
  $('#jstreeniv').jstree("deselect_all");
  $('#jstree').jstree();
  // 7 bind to events triggered on the tree
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.instance.get_node(data.selected).text);
  });

  nivmax = $('#jstree').data('niv');
  $('#jstreenivu').jstree({

    "core": {
      // so that create works
      "check_callback": true
    },

    "plugins": ["search",
      "types", "ui"
    ],
    "types": {
      "#": {
        "max_children": 1,
        "max_depth": 9,
        "valid_children": ["root"],
      }
    },
    "search": {
      "case_insensitive": true,
      "show_only_matches": true
    }

  }).bind("select_node.jstree", function (e, data) {
    //console.log('entra');
    cursor_wait();
    var padre = data.instance.get_node(data.node.parent).text;
    console.log(padre);
    padglo = "";
    if (typeof (padre) === "undefined") {
      padglo = "Nivel Raiz";
    } else {
      padglo = padre.trim();
    }
    defi = "";
    defi = data.node.text.toString().trim();
    if (padre != null) {
      var pa = padre.trim();
    } else {
      var pa = "Nivel Raiz";
      console.log('ya');
    }
    var ya = data.instance.get_node(data.selected).id;
    var yason = JSON.parse(ya);
    var yason2 = jQuery.parseJSON(JSON.stringify(ya));
    console.log(ya);
    console.log(flag1);
    console.log(flag2);
    console.log(padglo);
    fled = 1;

    if (flag1 == false && flag2 == false) {
      $.get("WMSM_0006/getIdniv", {
        id: ya
      }, function (respuesta) {
        console.log(respuesta.id + " " + respuesta.wmsnub_descripcion + " " + respuesta.wmsnub_uuid_padre);
        codglo = "";
        codglo = respuesta.wmsnub_codigo;
        ida = respuesta.id;
        var cle = data.node.parents.length;
        if (cle == 1) {
          $("#checku").prop("checked", true);
        } else {
          $("#checku").prop("checked", false);
        }
        $('#wmsnub_codigo').val(respuesta.wmsnub_codigo);
        $('#wmsnub_descripcion').val(respuesta.wmsnub_descripcion);
        $('#wmsnub_uuid_padre').val(pa);

      }).done(function () {
        remove_cursor_wait();
      });
    }

    if (flag1 == true && flag2 == false) {
      $.get("WMSM_0006/getIdniv", {
        id: ya
      }, function (respuesta) {
        console.log(respuesta.id + " " + respuesta.wmsnub_descripcion + " " + respuesta.wmsnub_uuid_padre);
        ida = respuesta.id;
        codglo = "";
        codglo = respuesta.wmsnub_codigo;
      }).done(function () {
        remove_cursor_wait();
      });
      level = "";
      level = data.node.parents.length;
      var cle = data.node.parents.length;
      var text = data.node.text.toString().trim();
      $('#wmsnub_uuid_padre').val(text);
      var id = data.node.id;
      console.log(level);
      console.log(text);
      console.log(padre);
      n = 0;
      n = parseInt(level);
      n += 1;
      console.log(n);


    }

    if (flag2 == true && flag1 == false) {
      //document.getElementById("wmsnub_codigo").disabled=false;
      // document.getElementById("wmsnub_descripcion").disabled=false;

      $.get("WMSM_0006/getIdniv", {
        id: ya
      }, function (respuesta) {

        console.log(respuesta.id + " " + respuesta.wmsnub_descripcion + " " + respuesta.wmsnub_uuid_padre);
        var text = data.node.text.toString().trim();
        var cle = data.node.parents.length;
        if (cle == 1) {
          $("#checku").prop("checked", true);
        } else {
          $("#checku").prop("checked", false);
        }
        $('#wmsnub_uuid_padre').val(pa);
        $('#wmsnub_codigo').val(respuesta.wmsnub_codigo);
        $('#wmsnub_descripcion').val(respuesta.wmsnub_descripcion);


      }).done(function () {
        remove_cursor_wait();
      });
      level = 0;
      level = data.node.parents.length;

    }
  });

  var to = false;
  $('#plugins4_qnivu').keyup(function () {
    if (to) {
      clearTimeout(to);
    }
    to = setTimeout(function () {
      var v = $('#plugins4_qnivu').val();
      $('#jstreenivu').jstree(true).search(v);
    }, 250);
  });

});


function disableu(node_id) {
  var node = $("#jstreenivu").jstree().get_node(node_id);
  $("#jstreenivu").jstree().disable_node(node);
  node.children.forEach(function (child_id) {
    disable(child_id);
  });
}

function enableu(node_id) {
  var node = $("#jstreenivu").jstree().get_node(node_id);
  $("#jstreenivu").jstree().enable_node(node);
  node.children.forEach(function (child_id) {
    enable(child_id);
  });
}


function editarniu() {
  // $('#jstreenivu').jstree("deselect_all");
var titulo = document.getElementById('titulo');
  titulo.innerHTML = ' &nbsp Editar';
  if (fled == 0) {
    alert('Debe seleccionar un registro');
  } else {
    $('#wmsnub_codigo').val(codglo);
    $('#wmsnub_codigo').prop('disabled', true);
    $('#checku').prop('disabled', true);
    $('#wmsnub_descripcion').prop('disabled', false);
    $('#wmsnub_descripcion').val(defi);
    $('#wmsnub_uuid_padre').val(padglo);
    $('#buedu').prop('disabled', false);
    flag2 = true;
    flag1 = false;
  }
  //validarnivu();
}

$('#checku').click(function () {
  if ($("#checku").is(':checked')) {
    $('#wmsnub_uuid_padre').val('Nivel Raiz');
    $('#jstreenivu >ul > li').each(function () {
      disableu(this.id);
    });
  } else {
    $('#wmsnub_uuid_padre').val('');
    $('#jstreenivu >ul > li').each(function () {
      enableu(this.id);
    });
  }
});


function validarnivu() {
  console.log('ya');
  document.getElementById("wmsnub_codigo").disabled = false;
  document.getElementById("wmsnub_descripcion").disabled = false;
  //document.getElementById("wmsnub_uuid_padre").disabled=true;
  document.getElementById("buedu").disabled = false;
  document.getElementById("checku").disabled = false;

}

function validarcrea() {
  $('#wmsnub_codigo').prop('disabled', false);
  //document.getElementById("checku").disabled=false;
  document.getElementById("wmsnub_descripcion").disabled = false;
  document.getElementById("buedu").disabled = false;
}

var valueSelected;
$('#wmsnub_uuid_padre').on('change', function (e) {
  valueSelected = this.value;
  console.log(valueSelected);
});

function grabarnivu() {
  cursor_wait();
  var csi;

  
  if ( $("#wmsnub_uuid").val() == "" || $("#wmsnub_descripcion").val() == "") {
    alert('Existen espacios vacios');
    remove_cursor_wait();
  } else {

    if ($('#wmsnub_uuid_padre').val() == "") {
      alert('Debe seleccionar un padre');
      remove_cursor_wait();
    } else {
      if ($("#checku").is(':checked')) {
        console.log('nodo raiz');
        csi = 1;
      } else {
        csi = 0;
        console.log('nodo normal');
      }

      if (csi == 0 && level >= nivmax) {
        alert('No puede registrar. Nivel máximo es: ' + nivmax);
        remove_cursor_wait();
      } else {
        if (flag1 == true && flag2 == false) {
          var wmsnub_codigo = $("#wmsnub_codigo").val();
          var wmsnub_descripcion = $("#wmsnub_descripcion").val();
          var idpadre = ida;
          $.post("WMSM_0006/postCreaNiv", {
            level: n,
            codigo: wmsnub_codigo,
            descripcion: wmsnub_descripcion,
            idpadre: idpadre,
            csi: csi
          }, function (respuesta) {
            console.log(respuesta.mensaje);
            window.location.replace(window.location.pathname);
          }).fail(function () {
            alert("Código ya existe");
            remove_cursor_wait();
          }).done(function () {
            remove_cursor_wait();
          });
        }
        if (flag2 == true && flag1 == false) {
          var wmsnub_codigo = $("#wmsnub_codigo").val();
          var wmsnub_descripcion = $("#wmsnub_descripcion").val();
          $.post("WMSM_0006/postNiv", {
            level: n,
            id: ida,
            wmsnub_codigo: wmsnub_codigo,
            wmsnub_descripcion: wmsnub_descripcion,
            wmsnub_uuid_padre: idpaed,
            csi: csi
          }, function (respuesta) {
            console.log(respuesta.mensaje);
            window.location.replace(window.location.pathname);
          }).done(function () {
            remove_cursor_wait();
          });
        }
      }
    }
  }
}

function borrarniu() {
  //$('#jstreenivu').jstree("deselect_all");
  if (fled == 0) {
    alert('Debe seleccionar un registro');
  } else {
    var wmsnub_codigo = $("#wmsnub_codigo").val();
    var wmsnub_descripcion = $("#wmsnub_descripcion").val();
    $.get("WMSM_0006/boNiv", {
      id: ida
    }, function (respuesta) {
      cursor_wait();
      if (respuesta.flag == 's') {
        alert(respuesta.mensaje);
        remove_cursor_wait();
        window.location.replace(window.location.pathname);
      } else {
        alert(respuesta.mensaje);
        remove_cursor_wait();
      }
    }).done(function () {
      remove_cursor_wait();
    });
  }
}
/*var fn=false;
function manniu(){
    if(fn==false){
    document.getElementById("crearniu").disabled=false;
    document.getElementById("editarniu").disabled=false;
    document.getElementById("borrarniu").disabled=false;
    fn=true;
  }else{
     document.getElementById("crearniu").disabled=true;
    document.getElementById("editarniu").disabled=true;
    document.getElementById("borrarniu").disabled=true;
    fn=false;
  }

}*/

function demo_createniu() {
  var titulo = document.getElementById('titulo');
  titulo.innerHTML = ' &nbsp Nuevo';
  fled = 0;
  limpiarniu();
  console.log('a');
  $('#jstreenivu').jstree("deselect_all");
  $('#checku').prop('disabled', false);
  $('#checku').prop('checked', false);
  codigo = $('#wmsnub_codigo').val("");
  descripcion = $('#wmsnub_descripcion').val("");
  padre = $('#wmsnub_uuid_padre').val("").change();
  crea = true;
  flag1 = true;
  flag2 = false;
  // validarnivu();
  validarcrea();
}

function demo_rename() {}

function demo_delete() {

}