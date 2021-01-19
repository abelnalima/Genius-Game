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

//Verifica se a ordem que foi pressionada coincide com a ordem das luzes
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver(); break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert('Score: ' +score +'\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//Computa a pontuação e procede com a próxima sequência
let nextLevel = () => {
    score++;

    shuffleOrder();
}

//Encerra a partida e reseta a ordem das cores e dos clicks
let gameOver = () => {
    alert('Score: ' +score +'!\nVocê perdeu o jogo!\n Clique em OK para reiniciar a partida!');
    
    order = [];
    clickedOrder = [];

    playGame();
}

//Ilumina a cor quando pressionada pelo jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//Incia a partida e reseta a pontuação do jogador
let playGame = () => {
    alert('Bem Vindo ao Genius! Iniciando novo jogo!');
    
    score = 0;

    nextLevel();
}

//Adiciona a cor clicada ao pressionar
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicia o jogo ao carregar a página
playGame();