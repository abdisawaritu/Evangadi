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

// The snake is stored as an array.
//
// Each object represents one snake segment.
//
// Example:
// [
//   { x: 10, y: 10 },  ← head
//   { x: 9, y: 10 },
//   { x: 8, y: 10 }    ← tail
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
// Food will be implemented in a later stage.

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
//
// Movement will be implemented in a later stage.

const GAME_SPEED = 120;

// ========================================
// GET HTML ELEMENTS
// ========================================

// Main game container

const gameContainer = document.querySelector(".game-container");

// ========================================
// START SCREEN
// ========================================

const startScreen = document.getElementById("startScreen");

const playButton = document.getElementById("playButton");

const startBestScore = document.getElementById("startBestScore");

// ========================================
// GAME SCREEN
// ========================================

const gameScreen = document.getElementById("gameScreen");

const gameBoard = document.getElementById("gameBoard");

const scoreDisplay = document.getElementById("score");

const gameBestScoreDisplay = document.getElementById("bestScore");

// ========================================
// GAME-OVER SCREEN
// ========================================

const gameOverScreen = document.getElementById("gameOverScreen");

const finalScoreDisplay = document.getElementById("finalScore");

const finalLengthDisplay = document.getElementById("snakeLength");

const finalBestScoreDisplay = document.getElementById("gameOverBestScore");

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
// INITIALIZE GAME BOARD
// ========================================

function initializeBoard() {
  // Remove anything that currently exists
  // inside the board.

  gameBoard.innerHTML = "";

  // Create the board cells.

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let column = 0; column < BOARD_SIZE; column++) {
      const cell = document.createElement("div");

      cell.classList.add("game-cell");

      cell.dataset.row = row;

      cell.dataset.column = column;

      gameBoard.appendChild(cell);
    }
  }
}

// ========================================
// INITIALIZE SNAKE
// ========================================

function initializeSnake() {
  // Create the initial three-segment snake.

  snake = [
    {
      x: 10,
      y: 10,
    },

    {
      x: 9,
      y: 10,
    },

    {
      x: 8,
      y: 10,
    },
  ];

  // Initial direction.

  direction = "right";

  nextDirection = "right";
}

// ========================================
// RENDER SNAKE
// ========================================

function renderSnake() {
  // First remove any previous snake
  // styling from the board cells.

  const snakeCells = gameBoard.querySelectorAll(".snake");

  snakeCells.forEach(function (cell) {
    cell.classList.remove("snake");
    cell.classList.remove("snake-head");
  });

  // Add the snake to the correct cells.

  snake.forEach(function (segment, index) {
    const cell = gameBoard.querySelector(
      `[data-row="${segment.y}"][data-column="${segment.x}"]`,
    );

    if (!cell) {
      return;
    }

    cell.classList.add("snake");

    // The first segment is the head.

    if (index === 0) {
      cell.classList.add("snake-head");
    }
  });
}

// ========================================
// INITIALIZE BOARD AND SNAKE
// ========================================

function initializeGameBoard() {
  // Create the board.

  initializeBoard();

  // Create the initial snake.

  initializeSnake();

  // Display the snake.

  renderSnake();
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
  // Update current score.

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

  // Initialize the board and snake.

  initializeGameBoard();

  // Show the game screen.

  showGameScreen();
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
