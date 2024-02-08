/*                T O O L B A R - F U N C I O N A L I T I E S                  */

const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d'); // Esta linha está obtendo o contexto 2D do elemento <canvas>. O contexto 2D é uma interface que fornece métodos e propriedades para desenhar e manipular gráficos em um <canvas>.

const canvasOffsetX = canvas.offsetLeft; // Esta linha está armazenando a posição horizontal do elemento <canvas>.
const canvasOffsetY = canvas.offsetTop; // Esta linha está armazenando a posição vertical do elemento <canvas>

// Essas variáveis ​​(canvasOffsetX e canvasOffsetY) podem ser úteis para realizar cálculos relacionados à posição do mouse dentro do canvas ou para posicionar outros elementos na tela em relação ao canvas.

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5; // Essa variável é usada para definir a largura da linha ao desenhar no canvas.
let startX;
let startY;
// Estas duas linhas declaram variáveis startX e startY sem atribuir a elas um valor inicial. Elas podem ser usadas para armazenar as coordenadas de início do desenho, caso necessário.

toolbar.addEventListener('click', e => {
    if (e.target.id == 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Essa linha vai setar todos os pixels para a cor branca na área do canvas, e para isso o canvas.width e canvas.height tem que ser fornecido.
    }
});

toolbar.addEventListener('change', e => {

    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
        // Indica uma mudança na paleta de cores.
    }
    if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
        // Indica uma mudança na largura da linha de desenho.
    }
});

/*                D R A W I N G - M E C H A N I S M                  */

const draw = (e) => {
    if (!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
    ctx.beginPath(); // Inicia um novo caminho de desenho
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath(); // Inicia um novo caminho de desenho
});

canvas.addEventListener('mousemove', draw);