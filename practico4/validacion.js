function validarFormulario(f) {
                    
    if (f.nombre.value == "") {
    document.getElementById("label").style.color = "red";
    document.getElementById("label").innerHTML = "* Campo Obligatorio"; 
    return false;
    }
     if (f.apellido.value == "") {
        document.getElementById("label2").style.color = "red";
        document.getElementById("label2").innerHTML = "* Campo Obligatorio";

        return false;
         }
    
    if (f.telefono.value == "") {
        document.getElementById("label3").style.color = "red";
        document.getElementById("label3").innerHTML="* Campo Obligatorio";
       
        return false;
    }
    if (f.email.value == "") {
        document.getElementById("label4").style.color = "red";
        document.getElementById("label4").innerHTML = "* Campo Obligatorio";
       
        return false;
    }
  
alert("CAMPOS CORRECTAMENTE SUMINISTRADOS ");
return true;
}

function validarFormularios() {
    let nombres=document.getElementById("nombre");
    let apellidos=document.getElementById("apellido");
    let telefonos=document.getElementById("telefono");
    let emails=document.getElementById("email");     
    let validacionNombre=validarNombre(); 
    let validacionApellido=validarApellido();
    let validacionTelefono=validarTelefono();  
    let correo=validacionEmail();        
    if (nombres.value == "" || validacionNombre==false) {
    document.getElementById("label").style.color = "red";
    document.getElementById("label").innerHTML = "* Debes ingresar letras"; 
    return false;
    }
     if (apellidos.value == "" || validacionApellido==false) {
        document.getElementById("label2").style.color = "red";
        document.getElementById("label2").innerHTML = "* Debes ingresar letras";

        return false;
         }
    
    if (telefonos.value == "" || validacionTelefono==false) {
        document.getElementById("label3").style.color = "red";
        document.getElementById("label3").innerHTML="* Debes ingresar números";

        return false;
    }
    if (emails.value == "" || correo==false) {
        document.getElementById("label4").style.color = "red";
        document.getElementById("label4").innerHTML = "* Email Incorrecto";
       
        return false;
    }
  
alert("CAMPOS CORRECTAMENTE SUMINISTRADOS ");
return true;
}


function limpiarLabel() {
    document.getElementById("label").innerHTML = "";
}
function limpiarLabel2() {
    document.getElementById("label2").innerHTML = "";
}
function limpiarLabel3() {
    document.getElementById("label3").innerHTML = "";
}
function limpiarLabel4() {
    document.getElementById("label4").innerHTML = "";
}

function validarTelefono() {
    let telefonos=parseInt(document.getElementById("telefono").value);
    if(isNaN(telefonos)){
        document.getElementById("label3").innerHTML="* Debes ingresar números";
        return false;
    }
    
    return true;
}  

function validarNombre() {
    let nombres=document.getElementById("nombre").value;
    if(/^[a-zA-Z][a-zA-Z]*/.test(nombres)==false){
        document.getElementById("label").innerHTML="* Debes ingresar letras";
        return false;
    }
}

function validarApellido() {
    let apellidos=document.getElementById("apellido").value;
    if(/^[a-zA-Z][a-zA-Z]*/.test(apellidos)==false){
        document.getElementById("label2").innerHTML="* Debes ingresar letras";
        return false;
    }
    
    return true;
} 
  
function validacionEmail() {
    let valor=document.getElementById("email").value;
    
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor))) {
        document.getElementById("label4").innerHTML="* Email Incorrecto";
        return false;
    }
    return true;
} 