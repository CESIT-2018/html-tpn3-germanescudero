
function comprobar() {
  var nombres = document.forms.nombre;
  var aviso = document.getElementById("aviso");
  aviso.innerHTML = "";
  var enviar = "si";
  if (nombres == "" || nombres.indexOf("") == 0) {
    var texto = "Completa este campo";
    aviso.innerHTML += texto;
    enviar = "NO";
  }
}

function enviarDatos() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  if (isNaN(email) && isNaN(nombre) || isNaN(apellido) || isNaN(telefono)) {
    alert("Datos Enviados con EXITO");
  }
}
function validarEmail() {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var email = document.getElementById("email").value;
  return regex.test(email) ? true : false;
}