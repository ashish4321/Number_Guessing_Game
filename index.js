var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var originalNumber = document.querySelector('.originalNumber');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessLabel = document.querySelector('#guessLabel');

var guessCount = 0;
var resetButton = document.querySelector('#restartButton');

guessLabel.innerHTML = 'Enter a guess:\t(' + (7 - guessCount) + ' chances remaining)';

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 0) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + '\t';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Awesome! You are great.';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 6) {
        lastResult.textContent = 'Game over! The original number was:';
        originalNumber.textContent = randomNumber;
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Oops You Missed!';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Try a higher number than this.';
        } else {
            lowOrHi.textContent = 'Try a smaller number than this.';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
    guessLabel.innerHTML = 'Enter a guess:\t(' + (7 - guessCount) + ' chances remaining)';
}

guessSubmit.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.classList.remove('invisible');
}

function resetGame() {
    guessCount = 0;
    guessLabel.innerHTML = 'Enter a guess:\t(' + (7 - guessCount) + ' chances remaining)';

    var resetParas = document.querySelector('.resultParas').children;
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.classList.add('invisible');

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
