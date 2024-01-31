const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const buttons = document.querySelectorAll('button');
const computerChoiceBtn = document.getElementById('computer-choice');

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', playRound);
});

function playRound(e) {
  const userChoice = e.target.id;
  const computerChoice = generateComputerChoice();

  displayComputerChoice(computerChoice);

  const result = determineWinner(userChoice, computerChoice);
  updateScore(result);
}

function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function displayComputerChoice(choice) {
  computerChoiceBtn.textContent = getEmoji(choice);
}

function determineWinner(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

function updateScore(result) {
  if (result === 'user') {
    userScore++;
  } else if (result === 'computer') {
    computerScore++;
  }

  userScoreDisplay.textContent = `Usuario: ${userScore}`;
  computerScoreDisplay.textContent = `Computadora: ${computerScore}`;
}

function getEmoji(choice) {
  if (choice === 'rock') return '✊';
  if (choice === 'paper') return '✋';
  if (choice === 'scissors') return '✌';
}
