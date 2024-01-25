let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function() {
    // Se o input estiver como 'type=password' então ao clicar no icon ele se tornará um input type text para que a senha esteja visível. Ao clicar novamente, e o input estiver 'type=text' ao ser clicado ele voltará a ser do type password.
    if(password.type == "password") {
        password.type = "text"; // Senha visível.
        eyeicon.src = "images/eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "images/eye-close.png";
    }
}