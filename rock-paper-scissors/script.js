"use strict";
//scores
const playerScore = document.querySelector(".score-1");
const computerScore = document.querySelector(".score-2");

//buttons
const choiceBtn = document.querySelectorAll(".gameButton");

let player = 0;
let computer = 0;
let playerSelection;
let computerSelection;

choiceBtn.forEach((button) =>
  button.addEventListener("click", function () {
    playerSelection = button.className.split(" ")[1];
    console.log(playerSelection);
    computerSelection = computerChoice();
    console.log(computerSelection);

    playGame();

    playerScore.textContent = `${player}${playerSelection}`;
    computerScore.textContent = `${computer}${computerSelection}`;
  })
);

const options = ["✊", "✋", "✌️"];

function computerChoice() {
  const randNum = Math.floor(Math.random() * options.length);
  return options[randNum];
}

function playGame() {
  if (playerSelection == computerSelection) {
    return;
  } else if (computerSelection == "✊") {
    return playerSelection == "✋" ? player++ : computer++;
  } else if (computerSelection == "✋") {
    return playerSelection == "✌️" ? player++ : computer++;
  } else if (computerSelection == "✌️") {
    return playerSelection == "✊" ? player++ : computer++;
  }
}
