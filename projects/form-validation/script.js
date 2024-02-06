var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submit = document.getElementById('submit-error');

/* Função que vai validar os inputs*/

function validateName() {
    var name = document.getElementById('contact-name').value;
    // Essa variável 'name' vai guardar o conteúdo escrito no input.

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        // Se o input não for preenchido por pelo menos um caractere (letra), será apresentado na tela a mensagem acima.
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) { // Essa expressão regular vai garantir que haja pelo menos uma letra seguida de um espaço e, em seguida, pelo menos mais uma letra até o final da string, para garantir que haja pelo menos duas palavras separadas por um espaço

    // O acento de exclamação (!) no início indica que, se o valor digitado dentro do input não estiver coincidindo com os caracteres da expressão, então será apresentada uma mensagem de erro.

        nameError.innerHTML = "Write your full name";
        return false;
    }

    nameError.innerHTML = '<i>Valid</i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        // Se o input não for preenchido por pelo menos um caractere (número), será apresentado na tela a mensagem acima.
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        // O número de telefone digitado pelo usuário não pode ultrapassar dez digitos.
        phoneError.innerHTML = 'Only 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        // Essa expreção vai checar se o número digitado contém os digitos de 0 a 9 e se ele tem dez caracteres no total. E caso o número de contato digitado não contenha algum destes requisitos, será mostrado na tela a mensagem abaixo:
        phoneError.innerHTML = 'Only digits';
        return false;
    }

    phoneError.innerHTML = '<i>Valid</i>'
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        // Se o input não for preenchido por pelo menos um caractere, será apresentado na tela a mensagem acima.
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '<i>Valid</i>';
    return true;
}

/*                  REMINDER:                   */

/*
1) ^[A-Za-z]\._\-[0-9]*:
        ^ indica o início da string.
        [A-Za-z] corresponde a qualquer caractere alfabético, seja minúsculo ou maiúsculo.
        \., \_ e \- correspondem exatamente aos caracteres "." (ponto), "_" (underline) e "-" (hífen), respectivamente.
        [0-9]* corresponde a zero ou mais dígitos.

2) [@]:
        [ ] é uma classe de caracteres que corresponde a qualquer caractere dentro dos colchetes.
        @ corresponde literalmente ao caractere "@".

3) [A-Za-z]*:
        Isso corresponde a zero ou mais caracteres alfabéticos, seja minúsculo ou maiúsculo, que são parte do domínio do e-mail após o "@".

4) [\.]:
        [ ] é uma classe de caracteres que corresponde a qualquer caractere dentro dos colchetes.
        \., o ponto após o caractere "", corresponde literalmente ao caractere "." (ponto) que separa o nome do domínio de nível superior (TLD).

5) [a-z]{2,4}$:
        [a-z] corresponde a qualquer caractere alfabético minúsculo.
        {2,4} significa que espera-se de 2 a 4 ocorrências do caractere anterior (no caso, caracteres alfabéticos minúsculos).
        $ indica o fim da string. 
*/

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length; // Irá mostrar na tela o número de caracteres que faltam para o valor total requerido pelo input.

    if (left>0) {
        messageError.innerHTML = left + 'More characters needed'
        return false;
    }

    messageError.innerHTML = '<i>Valid</i>'
}