// index.js

import './style.css';
import Game from './modules/game.js';
import Interface from './modules/interface.js';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const addScoreDetails = document.querySelector('.submit-button');
const refreshButton = document.querySelector('.refresh-button');

const game = new Game();
const interface1 = new Interface();

let idGame = localStorage.getItem('idGame');

document.addEventListener('DOMContentLoaded', async () => {
  if (!idGame) {
    idGame = await game.newGame('Lunch game');
    localStorage.setItem('idGame', idGame);
  }
});

refreshButton.addEventListener('click', async () => {
  const scores = await game.getScores(idGame);
  interface1.addScore(scores);
});

addScoreDetails.addEventListener('click', async () => {
  if (!nameInput.checkValidity() || !scoreInput.checkValidity()) {
    return;
  }

  await game.scorePost(idGame, nameInput.value, scoreInput.value);
  interface1.clearInputs();
});