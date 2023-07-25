import './style.css';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const scoreBoard = document.querySelector('.score-board');
const addScoreDetails = document.querySelector('.submit-button');

const addScore = () => {
  const scoreName = nameInput.value;
  const score = scoreInput.value;
  if (scoreName !== '' && score !== '') {
    scoreBoard.innerHTML += `
  <div class="score-details">
  <p>${scoreName}</p>
  <p>:</p>
  <p>${score}</p>
  </div>
  `;
  }
};

addScoreDetails.addEventListener('click', addScore);