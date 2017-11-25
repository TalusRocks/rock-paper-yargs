var argv = require('yargs').argv

class Player {
  constructor(name) {
    this.name = name
    this._move = null
  }

  get move(){
    let options = ["rock", "paper", "scissors"]
    return this._move || options[Math.floor(Math.random() * options.length)]
  }

  set move(input){
    this._move = input
  }

}

class Game {
  constructor(players) {
    this.players = []
  }

  addPlayers(player){
    this.players.push(player)
  }

  play () {
    const player1move = this.players[0].move
    const player2move = this.players[1].move

    if (player1move === "rock" && player2move === "rock") {
      console.log(`${this.players[1].name} picked rock. TIE!`);
    } else if (player1move === `rock` && player2move === `paper`) {
      console.log(`${this.players[1].name} picked paper. YOU LOSE.`);
    } else if (player1move === `rock` && player2move === `scissors`) {
      console.log(`${this.players[1].name} picked scissors. YOU WIN!`);
    } else if (player1move === `paper` && player2move === `paper`) {
      console.log(`${this.players[1].name} picked paper. TIE!`);
    } else if (player1move === `paper` && player2move === `rock`) {
      console.log(`${this.players[1].name} picked rock. YOU WIN!`);
    } else if (player1move === `paper` && player2move === `scissors`) {
      console.log(`${this.players[1].name} picked scissors. YOU LOSE.`);
    } else if (player1move === `scissors` && player2move === `scissors`) {
      console.log(`${this.players[1].name} picked scissors. TIE!`);
    } else if (player1move === `scissors` && player2move === `paper`) {
      console.log(`${this.players[1].name} picked paper. YOU WIN!`);
    } else if (player1move === `scissors` && player2move === `rock`) {
      console.log(`${this.players[1].name} picked rock. YOU LOSE.`);
    }
  }
}

const computer = new Player("robot")
const human = new Player("you")
const game = new Game()

human.move = argv.pick
game.addPlayers(human)
game.addPlayers(computer)
game.play()
