let order = [], clickedOrder = [];
let score = 0;

/*
0 - verde
1 - vermelho
2 - amarelo
3 - azul
*/

//Seleciona a classe do quadrante correspondente
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//Cria uma ordem randômica na qual serão acesas as luzes do Genius
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Seleciona o quadrante de acordo com o valor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Ilumina a cor que deve ser pressionada
let lightColor = (element, number) => {
    number *= 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => { //Remove a luminosidade
        element.classList.remove('selected');
    }, number + 50);
}
