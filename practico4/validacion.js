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

function iniciarLabel(){
    document.getElementById("label").innerHTML = "* Campo Obligatorio";
    document.getElementById("label2").innerHTML = "* Campo Obligatorio";
    document.getElementById("label3").innerHTML = "* Campo Obligatorio";
    document.getElementById("label4").innerHTML = "* Campo Obligatorio";
    
    }
    
   
function validacionEmail() {
    let valor=document.getElementById("email").value;
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor))) {
        document.getElementById("label4").innerHTML="* Email Incorrecto";
        return false;
    }
    
    return true;
} 