const words = ["apple", "banana", "grape", "orange", "strawberry"];

function startGame() {
  alert("Welcome to the Word Guessing Game!");

  const wordToGuess = words[Math.floor(Math.random() * words.length)];
  let hiddenWord = "_".repeat(wordToGuess.length).split("");
  let lives = 5;
  let attempts = 0;
  let guessedLetters = [];

  alert(`The word to guess has ${wordToGuess.length} letters.`);
  alert(`The word: ${hiddenWord.join(" ")}`);

  while (lives > 0) {
    let message = `Word: ${hiddenWord.join(
      " "
    )}\nLives: ${lives}\nAttempts: ${attempts}\nGuessed Letters: ${guessedLetters.join(
      ", "
    )}`;
    let guess = prompt(message).toLowerCase();

    if (guess.length !== 1) {
      alert("Please enter only one letter.");
      continue;
    }

    if (guessedLetters.includes(guess)) {
      alert("You've already guessed that letter.");
      continue;
    }

    attempts++;
    guessedLetters.push(guess);

    if (wordToGuess.indexOf(guess) !== -1) {
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === guess) {
          hiddenWord[i] = guess;
        }
      }
    } else {
      lives--;
      alert("This attempt failed.");
    }

    if (hiddenWord.join("") === wordToGuess) {
      alert(`You guessed the word: ${wordToGuess}!`);
      break;
    }
  }

  if (lives === 0) {
    alert(`Game over! The word was: ${wordToGuess}`);
  }

  if (confirm("Do you want to play again?")) {
    startGame();
  }
}

startGame();
