const container = document.getElementById('container');

// Colors Array

const colors = ['#AA1919', '#E6EB28', '#29AA19', '#199BAA', '#AA1973'] // Definindo a gama de cores que aparecerá ao passar o mouse.
const squares = 649; // Definindo o número de quares que vão ser renderizados dentro do container.

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

const setColor = (square)=> { // Adição de cor ao square.
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (square)=> { // A função de remoção de cor do square vai fazer com que ele volte a sua posição inicial. (quando ainda não havia cor)
    square.style.background = `#1d1d1d`;
    square.style.boxShadow = `0 0 2px #131313`;

}

const getRandomColor = ()=> {
    return colors[Math.floor(Math.random()* colors.length)];
}