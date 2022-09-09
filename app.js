// DOM selectors
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time");
const score = document.querySelector("#score");
const record = document.querySelector("#record");

// Variables
let result = 0;
let currentTime = 30;
let timerId = null;
let hitPosition;

// Function to move the mole
const randomSquare = () => {
    // Remove the mole from the screen
    squares.forEach((square) => {
        square.classList.remove("mole");
    });
    // Add the mole in a random position
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
    // Set the "hit position"
    hitPosition = randomSquare.id;
};

// Function to catch the mole
squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result.toString();
            hitPosition = null;
        }
    });
});

// Function game
const moveMole = () => {
    record.textContent = localStorage.getItem("record");
    timerId = setInterval(randomSquare, 500);
};


// Function timer
const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime.toString();

    if (currentTime === 0) {
        if (result > localStorage.getItem("record")) {
            localStorage.setItem("record", result.toString());
        }
        clearInterval(timerId);
        clearInterval(letcountDownTimer);
        alert(`GAME OVER YOUR SCORE IS ${result}`);
    }
};

// Start the game
moveMole();

// Start the countdown timer
letcountDownTimer = setInterval(countDown, 1000);