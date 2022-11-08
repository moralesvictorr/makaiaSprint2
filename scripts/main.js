let firstName = document.querySelector("#inputName");
let lastName = document.querySelector("#inputLastName");
let email = document.querySelector("#inputEmail");
let password = document.querySelector("#inputPassword");
let btn = document.querySelector(".boton");
let formulario = document.querySelector(".form");

// Querys de Errores:

let errText = document.querySelectorAll(".err-input");
let errIcon = document.querySelectorAll(".err-icon");

let boolName = false;
let boolLastName = false;
let boolEmail = false;
let boolPassword = false;

const regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/i;
const regExpLastName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/i;
const regExpEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/i; // example@example.com
const regExpPassword = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;


function validateForm() {
    boolName = false; boolLastName = false; boolEmail = false; boolPassword = false;
    if (document.querySelector("#inputName").value == "") {
        firstName.classList.add('err-input-colors')
        setTimeout(() => {

            errText[0].style.display = "none";
            errIcon[0].style.display = "none";

        }, 3000);
        errText[0].style.display = "block";
        errIcon[0].style.display = "block"
    } else {
        firstName.classList.remove('err-input-colors')
        boolName = true;
    }

    if (document.querySelector("#inputLastName").value == "") {
        lastName.classList.add('err-input-colors')
        setTimeout(() => {
            errText[1].style.display = "none";
            errIcon[1].style.display = "none";
        }, 3000);
        errText[1].style.display = "block";
        errIcon[1].style.display = "block";
    } else {
        lastName.classList.remove('err-input-colors')
        boolLastName = true;
    }

    if (document.querySelector("#inputEmail").value == "" || (!regExpEmail.test(document.querySelector("#inputEmail").value))) {
        email.classList.add('err-input-colors')
        setTimeout(() => {
            errText[2].style.display = "none";
            errIcon[2].style.display = "none";
            email.placeholder = "example: email@example.com";
        }, 3000);

        errText[2].style.display = "block";
        errIcon[2].style.display = "block";
    } else {
        email.classList.remove('err-input-colors')
        boolEmail = true;
    }

    if (document.querySelector("#inputPassword").value == "") {
        password.classList.add('err-input-colors')
        setTimeout(() => {
            errText[3].style.display = "none";
            errIcon[3].style.display = "none";
        }, 3000);
        errText[3].style.display = "block";
        errIcon[3].style.display = "block";
    } else {
        password.classList.remove('err-input-colors')
        boolPassword = true;

    }
    console.log(regExpEmail.test(document.querySelector("#inputEmail").value));
    return true;
}


function submitToLS(_name,_lastName,_email, _password) {
    let _res = localStorage.getItem("respuestas") // undefined // nullables
    let respuestas = undefined ? [] : JSON.parse(_res) // ternary operator

    let nuevaRespuesta = {
        name: _name.value,
        lastName: _lastName.value,
        email: _email.value,
        password: _password.value
    }

    respuestas.push(nuevaRespuesta)

    let respuestasJSON = JSON.stringify(respuestas)

    localStorage.setItem("respuestas", respuestasJSON)

}

let respuestasJson = localStorage.getItem("respuestas")
let respuestas = JSON.parse(respuestasJson)
console.table(respuestas);

btn.addEventListener("click", event => {
    event.preventDefault();
    validateForm();
    if(boolName == true && boolLastName == true && boolEmail == true && boolPassword == true){
        submitToLS(document.querySelector("#inputName"), document.querySelector("#inputLastName"), document.querySelector("#inputEmail"),document.querySelector("#inputPassword"));
    }
    formulario.reset();
})

