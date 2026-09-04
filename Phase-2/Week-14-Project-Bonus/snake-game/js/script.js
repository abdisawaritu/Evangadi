// ========================================
// SNAKE GAME STATE
// ========================================

// Current game status.
// Possible values:
// "start"     → start screen
// "playing"   → game is running
// "gameOver"  → game has ended

let gameState = "start";

// ========================================
// SNAKE STATE
// ========================================

// The snake will be stored as an array.
//
// Example later:
// [
//   { x: 10, y: 10 },
//   { x: 9, y: 10 },
//   { x: 8, y: 10 }
// ]

let snake = [];

// Current movement direction.
let direction = "right";

// The direction requested by the player.
let nextDirection = "right";

// ========================================
// FOOD STATE
// ========================================

// The current food position.
//
// Example later:
// { x: 15, y: 10 }

let food = null;

// ========================================
// SCORE STATE
// ========================================

let score = 0;

let bestScore = 0;

// ========================================
// GAME SETTINGS
// ========================================

// Number of cells in the game board.

const BOARD_SIZE = 20;

// Time between snake movements in milliseconds.

const GAME_SPEED = 120;

// ========================================
// GET HTML ELEMENTS
// ========================================

// Main game container

const gameContainer = document.querySelector(".game-container");

// Start screen

const startScreen = document.getElementById("startScreen");

// Game screen

const gameScreen = document.getElementById("gameScreen");

// Game-over screen

const gameOverScreen = document.getElementById("gameOverScreen");

// ========================================
// START SCREEN ELEMENTS
// ========================================

const playButton = document.getElementById("playButton");

const startBestScore = document.getElementById("startBestScore");

// ========================================
// GAME SCREEN ELEMENTS
// ========================================

const gameBoard = document.getElementById("gameBoard");

const scoreDisplay = document.getElementById("score");

const gameBestScoreDisplay = document.getElementById("bestScore");

// ========================================
// GAME-OVER SCREEN ELEMENTS
// ========================================

const finalScoreDisplay = document.getElementById("finalScore");

const finalLengthDisplay = document.getElementById("finalLength");

const finalBestScoreDisplay = document.getElementById("finalBestScore");

const playAgainButton = document.getElementById("playAgainButton");

// ========================================
// INITIAL GAME STATE
// ========================================

function initializeGame() {
  // The game starts from the start screen.

  gameState = "start";

  // Reset snake.

  snake = [];

  // Reset direction.

  direction = "right";

  nextDirection = "right";

  // Reset food.

  food = null;

  // Reset score.

  score = 0;

  // Update score displays.

  updateScoreDisplays();

  // Show start screen.

  showStartScreen();
}

// ========================================
// SCREEN MANAGEMENT
// ========================================

function showStartScreen() {
  startScreen.hidden = false;

  gameScreen.hidden = true;

  gameOverScreen.hidden = true;
}

function showGameScreen() {
  startScreen.hidden = true;

  gameScreen.hidden = false;

  gameOverScreen.hidden = true;
}

function showGameOverScreen() {
  startScreen.hidden = true;

  gameScreen.hidden = true;

  gameOverScreen.hidden = false;
}

// ========================================
// SCORE DISPLAY
// ========================================

function updateScoreDisplays() {
  // Update current score only if
  // the element exists in the HTML.

  if (scoreDisplay) {
    scoreDisplay.textContent = score;
  }

  // Update game best score.

  if (gameBestScoreDisplay) {
    gameBestScoreDisplay.textContent = bestScore;
  }

  // Update start-screen best score.

  if (startBestScore) {
    startBestScore.textContent = `Best ${bestScore}`;
  }

  // Update final score.

  if (finalScoreDisplay) {
    finalScoreDisplay.textContent = score;
  }

  // Update final snake length.

  if (finalLengthDisplay) {
    finalLengthDisplay.textContent = snake.length;
  }

  // Update final best score.

  if (finalBestScoreDisplay) {
    finalBestScoreDisplay.textContent = bestScore;
  }
}

// ========================================
// START GAME
// ========================================

function startGame() {
  gameState = "playing";

  showGameScreen();

  // More game initialization will be added
  // in the next stages.
}

// ========================================
// END GAME
// ========================================

function endGame() {
  gameState = "gameOver";

  updateScoreDisplays();

  showGameOverScreen();
}

// ========================================
// START BUTTON
// ========================================

if (playButton) {
  playButton.addEventListener("click", startGame);
}

// ========================================
// PLAY AGAIN BUTTON
// ========================================

if (playAgainButton) {
  playAgainButton.addEventListener("click", startGame);
}

// ========================================
// INITIALIZE
// ========================================

initializeGame();
