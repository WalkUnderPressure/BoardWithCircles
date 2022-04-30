const board = document.getElementById('board');

const COLORS = [  
    '#c0ffee', '#a6fff8',
    '#70ffee', '#b5f2ff',
    '#9fe8ff', '#caffea',
    '#1affdb', '#691aff',
    '#ffdb1a', '#ff3355',
    '#33ff88', '#340d7f',
];

const SQUARES_NUMBER = 2244;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.appendChild(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const number = Math.random() * COLORS.length;
    const index = Math.floor(number);

    return COLORS[index];
}
