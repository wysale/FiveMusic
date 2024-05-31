function logar(){

    var username = document.getElementById('username').value;
    var password  = document.getElementById('password').value;

    if( username == "fivemusic" && password == "fivemusic"){
        location.href = "browse.html";
    }
    else{
        alert('incorrect username or password')
    }

    
}