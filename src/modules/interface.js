// interface.js

class Interface {
  constructor() {
    this.nameInput = document.querySelector('.name');
    this.scoreInput = document.querySelector('.score');
    this.scoreBoard = document.querySelector('.score-board');
  }

  addScore = (arr) => {
    let scoreHTML = '';

    if (arr.length === 0) {
      scoreHTML = '<p>No scores yet</p>';
    } else {
      arr.forEach((element) => {
        scoreHTML += `
          <div class="score-details">
            <p>${element.user} : ${element.score}</p>
          </div>
        `;
      });
    }

    this.scoreBoard.innerHTML = scoreHTML;
  };

  clearInputs = () => {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  }
}

export default Interface;