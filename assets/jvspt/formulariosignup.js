var name = document.getElementById ('name').value;
var email = document.getElementById ('email').value;
var password = document.getElementById ('password').value;
var user = document.getElementById ('user').value;

function cadastroUser(){
    window.location = "formulario-sign-in.html";
}

function userCadastrado(){
    window.location = "browse.html";
}

function reviewAlbum(){
    if (userCadastrado == ""){
        window.location = "";
    } else{
        window.location = ""
    }
}