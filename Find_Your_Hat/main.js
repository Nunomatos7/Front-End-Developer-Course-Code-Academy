const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }

  print() {
    for (let i = 0; i < this._field.length; i++) {
      console.log(this._field[i].join(' '));
    }
  }

  playGame() {
    let x = 0;
    let y = 0;
    let game = 1;

    while (game === 1) {
      this.print();
      let userName = prompt('Which direction? ');
      switch (userName.toUpperCase()) {
        case 'L':
          y--;
          break;
        case 'R':
          y++;
          break;
        case 'U':
          x--;
          break;
        case 'D':
          x++;
          break;
        default:
          console.log('Command not defined');
          break;
      }

      if (x < 0 || y < 0 || x >= this._field.length || y >= this._field[0].length) {
        game = 0;
        console.log('You ran out of bounds!\n\nNew Game');
        resetGame.playGame();
        return;
      }

      if (this._field[x][y] === hole) {
        game = 0;
        console.log('You fell down a hole, start again!\n\nNew Game');
        resetGame.playGame();
        return;
      }

      if (this._field[x][y] === hat) {
        game = 0;
        console.log('Congratulations! You found the hat!\n\nNew Game');
        myField.playGame();
        return;
      }

      this._field[x][y] = pathCharacter;

    }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

const resetGame = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);;

myField.playGame();