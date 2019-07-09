// Initial Variables Set
var guessed;
var wins;
var losses;
var guessesLeft;
var random;
var blankWord;
var randomArray = [];
var guessArray = [];
var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var wordBank = ["bee", "hive", "honey", "stinger"];

// On window load
window.onload = function () {
    guessed = document.getElementById("guessed");
    wins = document.getElementById("wins");
    losses = document.getElementById("losses");
    guessesLeft = document.getElementById("guessesLeft");
    wins.textContent = 0;
    losses.textContent = 0;
    guessesLeft.textContent = 9;
    guessed.textContent = guessArray.toString();
    blankWord = document.getElementById("word");

    // Initial Answer Set
    resetAnswer();
    createBlank();
    console.log("Answer is: " + random);

}

// Initial Scores and text set

// Random number function
// X is range
function randomNum(x) {
    var num = Math.floor((Math.random() * (x)));
    return num;
}

// Blank Creation
function createBlank(x) {
    var blankArray = [];
    for (var i = 0; i < randomArray.length; i++) {
        blankArray.push("_ ");
    }
    blankWord.textContent = blankArray.join(" ");
}

// Reset Answer
function resetAnswer() {
    var i = randomNum(wordBank.length);
    var word = wordBank[i];
    random = word;
    randomArray = random.split("");
}
// Compare input to computer
// X is input
// Y is computer
function compareComp(x, y) {
    if (x == y) {
        console.log("compareComp function: true");
        return true;
    } else {
        console.log("compareComp function: false");
        return false;
    }
}

// Check array for guess
function checkArray(x) {
    var check = false;
    for (j = 0; j < guessArray.length; j++) {
        if (x == guessArray[j]) {
            check = true;
        } else {}
    }
    console.log("checkArray: " + check);
    return check;
}

// Add to guessed array
function addGuessed(x, y) {
    if (y == false) {
        guessArray.push(x);
        console.log("addGuess:" + guessed.textContent);
        guessed.textContent = guessArray.toString();
    } else {}
}

// Game Logic
// Start on Key
document.onkeyup = function (event) {
    // Check if button is a number
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90) {
        // Input Check
        console.log("Key Input: " + event.key);
        if (guessesLeft.textContent > 0) {
            if (compareComp(event.key, random) == true) {
                wins.textContent++
                alert("You win!");
                addGuessed(event.key, checkArray(event.key));
                resetAnswer();
                guessesLeft.textContent = 9;
                console.log("Reset: " + wins.textContent + " " + losses.textContent + " " + random);
            } else {
                guessesLeft.textContent--
                addGuessed(event.key, checkArray(event.key));
                console.log("Wrong Guess")
            }
        } else {
            alert("You lose");
            losses.textContent++
            guessed.textContent = "";
            guessArray = [];
            resetAnswer();
            guessesLeft.textContent = 9;
            console.log("Reset: " + wins.textContent + " " + losses.textContent + " " + random);
        }

    } else {
        // Input Check
        console.log("Incorrect input: " + event.key);
    }
}