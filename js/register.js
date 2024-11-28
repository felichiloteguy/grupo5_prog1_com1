let formulario = document.querySelector(".formRegister");
let email = document.querySelector("#email");
let errorEmail = document.querySelector(".email-error");

let password = document.querySelector("#password");
let errorPassword = document.querySelector(".password-error");

formulario.addEventListener("submit" , function (e){
    e.preventDefault();

    errorEmail.style.display = "";
    errorPassword.style.display = "";

    let valida = true;

    if(email.value === ""){
        errorEmail.style.display = "block";
        errorEmail.innerText = "Por favor complete el campo Email";
        valida = false;
    }

    if(password.value ===""){
        errorPassword.style.display = "block";
        errorPassword.innerText = "Por favor complete el campo Contraseña";
        valida = false
    }
     if(valida){
        this.submit();
     }
})