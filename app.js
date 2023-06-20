// Gets computer's choice
function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// Gets player1's choice
function playerChoice() {
    const prompt = require('prompt-sync')({ sigint: true });
    let player1Choice = prompt("Make your choice!(Rock, Paper, Scissors): ").toLowerCase();
    return player1Choice;
}

let player1Wins = 0;
let compWins = 0;
let winner = '';
// play the game and gives winning points
function play() {
    let compChoice = computerChoice();
    let player1 = playerChoice();

    if (player1 == compChoice) {
        console.log('It\'s a tie');
    } else {
        if (player1 == 'rock') {
            if (compChoice == 'scissors') {
                player1Wins++;
            } else {
                compWins++;
            }
        } else if (player1 == 'scissors') {
            if (compChoice == 'paper') {
                player1Wins++;
            } else {
                compWins++;
            }
        } else if (player1 == 'paper') {
            if (compChoice == 'rock') {
                player1Wins++;
            } else {
                compWins++;
            }
        }
    }
}
//play the game 5 times
// for (let i = 0; i < 5; i++) {
//     play();
// }
while (player1Wins < 5 && compWins < 5) {
    play();
}
// calculates the winner
if (player1Wins > compWins) {
    winner = 'Player1';
} else if (player1Wins < compWins) {
    winner = 'Computer';
} else {
    console.log('It\'s a tie! Play again!');
    play();
    if (player1Wins > compWins) {
        winner = 'Player1';
    } else {
        winner = 'Computer';
    }
}
//prints the winner
console.log(player1Wins + ' ' + compWins);
console.log(`${winner} wins!`);




