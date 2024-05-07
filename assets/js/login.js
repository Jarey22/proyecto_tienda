//variables de boton
document.getElementById("btn_registrarse").addEventListener("click",registrar);
document.getElementById("btn_iniciar_sesion").addEventListener("click",iniciarSesion);
//variable responsive
window.addEventListener("resize",page);
//variables necesarias
let contenedor_login_registrar = document.querySelector(".contenedor_login_registrar");
let formulario_login = document.querySelector(".formulario_login");
let formulario_registrar = document.querySelector(".formulario_registrarse");

let caja_trasera_login = document.querySelector(".caja_login");
let caja_trasera_registrar = document.querySelector(".caja_registrar");


// funcion para resize, osea la transicion de pantalla grande a pantalla pequeña
function page(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display= "block";
        caja_trasera_registrar.style.display = "block";
    }else{
        caja_trasera_registrar.style.display = "block";
        caja_trasera_registrar.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display= "block";
        formulario_registrar.style.display = "none";
        contenedor_login_registrar.style.left = "0px";
    }
}
// la funcion page siempre esta ejecutada para que no haya problema en el responsive
 page();

//la opacidad es lo que ayuda aque la transicion se vea bien lo demas es para lo mismo la transicion
function iniciarSesion(){  
    //para responsive
    if(window.innerWidth > 850){
        //esto fue hecho antes pero el if es para la condicional del tamaño de la pantalla
        formulario_registrar.style.display = "none";
        contenedor_login_registrar.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registrar.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_registrar.style.display = "none";
        contenedor_login_registrar.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_registrar.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
};

function registrar(){
     //para responsive
    if(window.innerWidth > 850){
     //esto fue hecho antes pero el if es para la condicional del tamaño de la pantalla   
    formulario_registrar.style.display = "block";
    contenedor_login_registrar.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_registrar.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }else{
        formulario_registrar.style.display = "block";
        contenedor_login_registrar.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registrar.style.display = "none";
        caja_trasera_login.style.display = "block"
        caja_trasera_login.style.opacity = "1";
    }
};



