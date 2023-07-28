// game.js

class Game {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  newGame = async (gameName) => {
    const newGameResponse = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const newGameData = await newGameResponse.json();
    return newGameData.result;
  }

  getScores = async (idGame) => {
    const getScoresResponse = await fetch(`${this.url}${idGame}/scores/`);
    const getScoresData = await getScoresResponse.json();
    return getScoresData.result;
  }

  async scorePost(idGame, name, score) {
    try {
      if (name === '' || score === '') {
        throw new Error('Please enter a valid name and score');
      }

      const resStart = await fetch(`${this.url}${idGame}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const getData = await resStart.json();
      return getData.result;
    } catch (error) {
      return null;
    }
  }
}

export default Game;