let imgBox = document.getElementById("imgBox"); // Div do QR.
let qrImage = document.getElementById("qrImage"); // O QR que será gerado.
let qrText = document.getElementById("qrText"); // Nos dá o valor escrito no input.

function generateQR() { // Ao final do link após o '=', será adicionado o link/texto digitado pelo usuário.
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}