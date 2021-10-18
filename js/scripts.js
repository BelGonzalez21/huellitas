/*!
* Start Bootstrap - Modern Business v5.0.4 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function registrarse(){
    window.location.replace('./registro.html');
}

function iniciarSesionn(){
    window.location.replace('./iniciar-sesion.html');
}

// Pagina para Iniciar Sesion
function iniciarSesion(){

    let usuario = document.getElementById('user').value
    let contraseña = document.getElementById('password').value

    if(usuario == 'juanhuellitas' && contraseña === '1234'){
        window.location.replace('./adoptar.html');
    }else{
        document.getElementById('alertError').classList.remove('alerta');
    }
}

// Pagina para Registrarse
function registrar(){
    let usuario = document.getElementById('username').value
    let contraseña = document.getElementById('password').value

    if(usuario == usuario && contraseña === contraseña){
        window.location.replace('./adoptar');
    }else{
        window.location.replace('./registro.html');
    }

}

// Redireccionar al formulario de adopcion

function formularioAdopcion(){
    window.location.replace('./formadopcion.html');
}

//Donaciones

function donaciones(donacion) {  
    if (donacion == 'Elegir Monto'){
        let monto = parseInt(prompt('¿Cuánto quiere donar? '));
        donaciones(monto); //auto invocaion pasando parametro de la donacion
    }
    
    else if (confirm('¿Está seguro de donar $'+ donacion+'?')){
       arrayDonacion.push(donacion); 
    }
    console.log (arrayDonacion)
    return arrayDonacion;
}

function totalDonaciones() {
    let total=0;
    for (let index = 0; index < arrayDonacion.length; index++) {        
         total+= arrayDonacion[index];      
    }
    alert('El total de donaciones es: $'+total)
}
const arrayDonacion= [];
