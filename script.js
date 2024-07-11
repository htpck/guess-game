let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
const guessInput = document.getElementById('guess');
const submitGuessButton = document.getElementById('submitGuess');
const resultMessage = document.getElementById('resultMessage');
const previousGuesses = document.getElementById('previousGuesses');

submitGuessButton.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Lütfen 1 ile 100 arasında bir sayı girin.';
        return;
    }

    guesses.push(userGuess);
    previousGuesses.textContent = 'Önceki tahminler: ' + guesses.join(', ');

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Tebrikler! Doğru tahmin ettiniz!';
        resultMessage.style.color = 'green';
        setGameOver();
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Çok düşük! Tekrar deneyin.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Çok yüksek! Tekrar deneyin.';
        resultMessage.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
});

function setGameOver() {
    guessInput.disabled = true;
    submitGuessButton.disabled = true;
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Yeni Oyun';
    resetButton.classList.add('reset-button');
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guesses = [];
        previousGuesses.textContent = '';
        resultMessage.textContent = '';
        guessInput.disabled = false;
        submitGuessButton.disabled = false;
        guessInput.value = '';
        guessInput.focus();
        document.body.removeChild(resetButton);
    });
}
