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

// The snake is stored as an array of objects.
//
// Example:
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

// Current food position.
//
// Example:
// { x: 15, y: 10 }

let food = null;

// ========================================
// SCORE STATE
// ========================================

let score = 0;

let bestScore = 0;
// Number of food items eaten during the current game.

let applesEaten = 0;

// ========================================
// GAME SETTINGS
// ========================================

// Number of cells in the game board.

const BOARD_SIZE = 20;

// Time between snake movements in milliseconds.

const GAME_SPEED = 120;

// ========================================
// GAME LOOP
// ========================================

// Stores the interval responsible for
// continuously moving the snake.

let gameLoop = null;

// ========================================
// GET HTML ELEMENTS
// ========================================

// Main game container

const gameContainer = document.querySelector(".game-container");

// ========================================
// START SCREEN ELEMENTS
// ========================================

const startScreen = document.getElementById("startScreen");

const playButton = document.getElementById("playButton");

const startBestScore = document.getElementById("startBestScore");

// ========================================
// GAME SCREEN ELEMENTS
// ========================================

// ========================================
// GAME SCREEN ELEMENTS
// ========================================

const gameScreen = document.getElementById("gameScreen");

const gameBoard = document.getElementById("gameBoard");

const scoreDisplay = document.getElementById("score");

const gameBestScoreDisplay = document.getElementById("bestScore");

// D-pad buttons

const upButton = document.getElementById("upButton");

const downButton = document.getElementById("downButton");

const leftButton = document.getElementById("leftButton");

const rightButton = document.getElementById("rightButton");

// Game start message

const gameStartMessage = document.getElementById("gameStartMessage");

const gameStartText = document.getElementById("gameStartText");

// ========================================
// GAME-OVER SCREEN ELEMENTS
// ========================================

const gameOverScreen = document.getElementById("gameOverScreen");

const finalScoreDisplay = document.getElementById("finalScore");

const finalLengthDisplay = document.getElementById("finalLength");

const finalBestScoreDisplay = document.getElementById("gameOverBestScore");

const playAgainButton = document.getElementById("playAgainButton");
const applesEatenDisplay = document.getElementById("applesEaten");

// ========================================
// INITIAL GAME STATE
// ========================================

function initializeGame() {
  // The game starts from the start screen.

  gameState = "start";

  // Stop any existing game loop.

  stopGameLoop();

  // Reset snake.

  snake = [];

  // Reset direction.

  direction = "right";

  nextDirection = "right";

  // Reset food.

  food = null;

  // Reset score.

  // Reset score.

  score = 0;

  // Reset apples eaten.

  applesEaten = 0;

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
  // ========================================
  // CURRENT SCORE
  // ========================================

  if (scoreDisplay) {
    scoreDisplay.textContent = score;
  }

  // ========================================
  // BEST SCORE
  // ========================================

  if (gameBestScoreDisplay) {
    gameBestScoreDisplay.textContent = bestScore;
  }

  // ========================================
  // START SCREEN BEST SCORE
  // ========================================

  if (startBestScore) {
    startBestScore.textContent = bestScore;
  }

  // ========================================
  // GAME OVER SCORE
  // ========================================

  if (finalScoreDisplay) {
    finalScoreDisplay.textContent = score;
  }

  // ========================================
  // GAME OVER SNAKE LENGTH
  // ========================================

  if (finalLengthDisplay) {
    finalLengthDisplay.textContent = snake.length;
  }

  // ========================================
  // GAME OVER BEST SCORE
  // ========================================

  if (finalBestScoreDisplay) {
    finalBestScoreDisplay.textContent = bestScore;
  }
}

// ========================================
// INITIALIZE SNAKE
// ========================================

function initializeSnake() {
  // Create a three-segment snake
  // in the center of the board.

  const center = Math.floor(BOARD_SIZE / 2);

  snake = [
    { x: center, y: center },
    { x: center - 1, y: center },
    { x: center - 2, y: center },
  ];

  // Initial direction.

  direction = "right";

  nextDirection = "right";
}

// ========================================
// RENDER SNAKE
// ========================================

function renderSnake() {
  // Remove the previous snake elements.

  const oldSnake = gameBoard.querySelectorAll(".snake");

  oldSnake.forEach(function (segment) {
    segment.remove();
  });

  // Create one HTML element for every
  // segment in the snake array.

  snake.forEach(function (segment, index) {
    const snakeElement = document.createElement("div");

    snakeElement.classList.add("snake");

    // The first segment is the head.

    if (index === 0) {
      snakeElement.classList.add("snake-head");
    }

    // Position the segment according
    // to its grid coordinates.

    snakeElement.style.left = `${(segment.x / BOARD_SIZE) * 100}%`;

    snakeElement.style.top = `${(segment.y / BOARD_SIZE) * 100}%`;

    gameBoard.appendChild(snakeElement);
  });
}

// ========================================
// FOOD GENERATION
// ========================================

function generateFood() {
  // Create a random position.

  let newFood;

  // Keep generating a position until
  // it does not overlap the snake.

  do {
    newFood = {
      x: Math.floor(Math.random() * BOARD_SIZE),

      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (
    snake.some(function (segment) {
      return segment.x === newFood.x && segment.y === newFood.y;
    })
  );

  // Store the generated food.

  food = newFood;
}

// ========================================
// RENDER FOOD
// ========================================

function renderFood() {
  // Remove the previous food element.

  const oldFood = gameBoard.querySelector(".food");

  if (oldFood) {
    oldFood.remove();
  }

  // If there is no food,
  // there is nothing to render.

  if (!food) {
    return;
  }

  // Create the food element.

  const foodElement = document.createElement("div");

  foodElement.classList.add("food");

  // Position food according to
  // its grid coordinates.

  foodElement.style.left = `${(food.x / BOARD_SIZE) * 100}%`;

  foodElement.style.top = `${(food.y / BOARD_SIZE) * 100}%`;

  // Add food to the game board.

  gameBoard.appendChild(foodElement);
}

// ========================================
// RENDER GAME BOARD
// ========================================

function renderGameBoard() {
  // Remove only the previous snake elements.

  const oldSnake = gameBoard.querySelectorAll(".snake");

  oldSnake.forEach(function (segment) {
    segment.remove();
  });

  // Remove only the previous food element.

  const oldFood = gameBoard.querySelector(".food");

  if (oldFood) {
    oldFood.remove();
  }

  // Render snake.

  renderSnake();

  // Render food.

  renderFood();
}
// ========================================
// GAME COUNTDOWN
// ========================================

// ========================================
// GAME START COUNTDOWN
// ========================================

// ========================================
// MOVE SNAKE
// ========================================

function moveSnake() {
  // Only move when the game is playing.

  if (gameState !== "playing") {
    return;
  }

  // Apply the requested direction.

  direction = nextDirection;

  // Get the current head.

  const head = snake[0];

  // Create a new head based on
  // the current direction.

  const newHead = {
    x: head.x,
    y: head.y,
  };

  // Move right.

  if (direction === "right") {
    newHead.x++;
  }

  // Move left.
  else if (direction === "left") {
    newHead.x--;
  }

  // Move up.
  else if (direction === "up") {
    newHead.y--;
  }

  // Move down.
  else if (direction === "down") {
    newHead.y++;
  }

  // ========================================
  // COLLISION DETECTION
  // ========================================

  // Check collision BEFORE adding the
  // new head to the snake.

  if (checkCollision(newHead)) {
    endGame();

    return;
  }

  // Add the new head to the
  // beginning of the snake array.

  snake.unshift(newHead);

  // ========================================
  // FOOD CONSUMPTION
  // ========================================

  // Check whether the new head
  // is occupying the same cell as food.

  const ateFood = food && newHead.x === food.x && newHead.y === food.y;

  // If the snake ate the food.

  if (ateFood) {
    // ========================================
    // INCREASE SCORE
    // ========================================

    score++;

    // ========================================
    // INCREASE APPLES EATEN
    // ========================================

    applesEaten++;

    // ========================================
    // UPDATE HIGH SCORE
    // ========================================

    if (score > bestScore) {
      bestScore = score;
    }

    // ========================================
    // GENERATE NEW FOOD
    // ========================================

    generateFood();

    // ========================================
    // UPDATE ALL SCORE DISPLAYS
    // ========================================

    updateScoreDisplays();
  }
  // ========================================
  // SNAKE GROWTH
  // ========================================

  // If food was NOT eaten,
  // remove the last segment.
  //
  // If food WAS eaten, the tail remains,
  // so the snake grows by one segment.

  if (!ateFood) {
    snake.pop();
  }

  // Render the updated snake and food.

  renderGameBoard();
}

// ========================================
// START GAME LOOP
// ========================================

function startGameLoop() {
  // Prevent multiple game loops
  // from running at the same time.

  if (gameLoop !== null) {
    return;
  }

  gameLoop = setInterval(function () {
    moveSnake();
  }, GAME_SPEED);
}

// ========================================
// STOP GAME LOOP
// ========================================

function stopGameLoop() {
  if (gameLoop !== null) {
    clearInterval(gameLoop);

    gameLoop = null;
  }
}
// ========================================
// DIRECTION CONTROL
// ========================================

function changeDirection(newDirection) {
  // Do not allow direction changes
  // when the game is not running.

  if (gameState !== "playing") {
    return;
  }

  // Prevent the snake from immediately
  // moving in the opposite direction.

  if (newDirection === "up" && direction !== "down") {
    nextDirection = "up";
  }

  if (newDirection === "down" && direction !== "up") {
    nextDirection = "down";
  }

  if (newDirection === "left" && direction !== "right") {
    nextDirection = "left";
  }

  if (newDirection === "right" && direction !== "left") {
    nextDirection = "right";
  }
}

// ========================================
// KEYBOARD CONTROLS
// ========================================

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
    case "w":
    case "W":
      event.preventDefault();
      changeDirection("up");
      break;

    case "ArrowDown":
    case "s":
    case "S":
      event.preventDefault();
      changeDirection("down");
      break;

    case "ArrowLeft":
    case "a":
    case "A":
      event.preventDefault();
      changeDirection("left");
      break;

    case "ArrowRight":
    case "d":
    case "D":
      event.preventDefault();
      changeDirection("right");
      break;
  }
});

// ========================================
// D-PAD CONTROLS
// ========================================

if (upButton) {
  upButton.addEventListener("click", function () {
    changeDirection("up");
  });
}

if (downButton) {
  downButton.addEventListener("click", function () {
    changeDirection("down");
  });
}

if (leftButton) {
  leftButton.addEventListener("click", function () {
    changeDirection("left");
  });
}

if (rightButton) {
  rightButton.addEventListener("click", function () {
    changeDirection("right");
  });
}

// ========================================
// START GAME
// ========================================

// ========================================
// GAME START COUNTDOWN
// ========================================

// ========================================
// GAME START COUNTDOWN
// ========================================

function startCountdown() {
  return new Promise(function (resolve) {
    // Make the message visible.

    gameStartMessage.hidden = false;

    // GET READY

    gameStartText.textContent = "GET READY";

    // 3

    setTimeout(function () {
      gameStartText.textContent = "3";
    }, 1000);

    // 2

    setTimeout(function () {
      gameStartText.textContent = "2";
    }, 2000);

    // 1

    setTimeout(function () {
      gameStartText.textContent = "1";
    }, 3000);

    // GO!

    setTimeout(function () {
      gameStartText.textContent = "GO!";
    }, 4000);

    // Hide the message after GO!

    setTimeout(function () {
      gameStartMessage.hidden = true;

      resolve();
    }, 4500);
  });
}

// ========================================
// START GAME
// ========================================

function startGame() {
  gameState = "playing";

  
  // Reset game statistics.

  score = 0;
  applesEaten = 0;

  // Initialize the snake.

  initializeSnake();

  // Generate the first food.

  generateFood();

  // Show the game screen.

  showGameScreen();

  // Render the initial game board.

  renderGameBoard();

  // Update score displays.

  updateScoreDisplays();

  // Make sure the start message is visible.

  if (gameStartMessage && gameStartText) {
    gameStartMessage.hidden = false;

    gameStartText.textContent = "GET READY";
  }

  // Start the countdown before
  // allowing the snake to move.

  startCountdown().then(function () {
    // Start the snake movement
    // after the countdown finishes.

    if (gameState === "playing") {
      startGameLoop();
    }
  });
}
// ========================================
// COLLISION DETECTION
// ========================================

function checkCollision(head) {
  // ========================================
  // BOUNDARY COLLISION
  // ========================================

  // Check if the head has moved outside
  // the game board.

  if (
    head.x < 0 ||
    head.x >= BOARD_SIZE ||
    head.y < 0 ||
    head.y >= BOARD_SIZE
  ) {
    return true;
  }

  // ========================================
  // SELF COLLISION
  // ========================================

  // Check whether the new head position
  // is already occupied by the snake body.

  for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  // No collision detected.

  return false;
}

// ========================================
// END GAME
// ========================================

function endGame() {
  // Stop the snake movement.

  stopGameLoop();

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
