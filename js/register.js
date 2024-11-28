let formulario = document.querySelector("formRegister");
let email = document.querySelector("#email");
let errorEmail = document.querySelector(".email-error");

let password = document.querySelector("#password");
let errorPassword = document.querySelector(".password-error");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    let valida = true;

    if(email.value === ""){
        errorEmail.textContent = "Por favor complete el campo Email" ;
        valida = false;
    } else{
        errorEmail.textContent = "";
    }

    if (password.value === ""){
        errorPassword.textContent = "Por favor complete el campo contraseña";
        valida = false;
    } else{
        errorPassword.textContent = "";
    }
    if (valida) {
        window.location.href = "login.html";
    }
})