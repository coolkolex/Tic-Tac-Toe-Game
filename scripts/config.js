const openPlayerConfig = (event) => {
  const selectedPlayerId = event.target.dataset.playerid;
  editedPlayer = +selectedPlayerId; // +'1' = 1 (converts string to number)
  modalPop.style.display = "block";
  overlay.style.display = "block";
};

const closePlayerConfig = () => {
  modalPop.style.display = "none";
  overlay.style.display = "none";
  formELement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formELement.firstElementChild.lastElementChild.value = '';
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Empty names are not allowed";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  //longer and more basic method:
  // if (editedPlayer === 1){
  //   players[0].name = enteredPlayerName;
  // } else {
  //   players[1].name = enteredPlayerName;
  // }
  closePlayerConfig();
};

