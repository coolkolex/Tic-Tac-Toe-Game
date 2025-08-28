function startNewGame(){
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter player names');
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
    event.target.textContent = players[activePlayer].symbol; //players[0] for now :)
    event.target.classList.add('disabled');
    switchPlayer();
}