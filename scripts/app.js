let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const editPlayer1BtnElement = document.getElementById('player-1-btn');
const editPlayer2BtnElement = document.getElementById('player-2-btn');
const cancelModal = document.querySelector('#cancel');
const modalPop = document.querySelector(".modal");
const overlay = document.querySelector("#backdrop");
const player2Name = document.querySelector('.name-2');
const player1Name = document.querySelector('.name-1');
const formELement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-errors');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerNameElement = document.getElementById('active-player-name');


editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelModal.addEventListener('click', closePlayerConfig);

overlay.addEventListener('click', closePlayerConfig);

formELement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}

