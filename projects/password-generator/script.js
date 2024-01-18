const passwordBox = document.getElementById("password");
const length = 12; /* O número máximo de caracteres da senha. */
/* Nesta parte do código é apresentado os tipos de caracteres que serão usados na hora de gerar a senha. */
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number    = "0123456789";
const symbol    = "!@#$%~^&*()-_|[]{}<>,./=+?"

const allCharacter  = upperCase + lowerCase + number + symbol; /* Fazendo a junção dos caracteres. */

function createPassword(){
    let password = ""; /* Aqui foi criada uma váriavel vazia chamada 'password' que receberá valor das quatro váriaveis abaixo. */
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    /* Aqui o Math.floor(Math.random() * ____.lenght) está randommicamente colocando a quantidade de elementos na senha. */

    while(length > password.length) { /* Aqui mostra que a largura da senha não pode ser maior que a quantidade definida na variável password.lenght (12 caracteres) anteriormente. */

    password += allCharacter[Math.floor(Math.random() * allCharacter.length)];

    }
    passwordBox.value = password; /* Irá mostrar ao usuário a senha assim que os 12 caracteres forem feitos aleatóriamente pelo código. */
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
  