let randomNumber;

function checkGuess() {
    const min = 1;
    const max = 10;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
}

checkGuess();

function guessNumber() {
    const input = prompt("Guess a number from one to 10");
    const guessThenumber = Number(input);
    if (input === null) {
        return console.log("Action canceled");
    }
    else if ( guessThenumber !== randomNumber || isNaN(guessThenumber)) {
        console.log("You didn't guess, try again");
        guessNumber();
    } else {
        console.log(`You guessed! The number was ${randomNumber}`);
    }
}

guessNumber();

