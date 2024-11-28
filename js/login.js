let form = document.querySelector(".contact-form");
let errorEmail = document.querySelector(".email");
let email = document.querySelector("#email");

let errorPassword = document.querySelector(".password");
let fullPassword = document.querySelector("#password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valida = true

    if (email.value === "") {
        alert("Por favor complete el campo email");
        valida = false;
    }
    
    if (password.value === "") {
        alert("Por favor complete el campo contraseña");
        valida = false;
    }
    
    if(valida){
        this.submit();
     }
})