// Initial Variables Set
var guessed;
var wins;
var losses;
var guessesLeft;
var random;
var blankWord;
var wordArray = [];
var randomArray = [];
var guessArray = [];
var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var wordBank = ["bee", "hive", "honey", "stinger", "nectar", "pollen", "swarm", "drone", "wax", "fly", "queen", "flower"];

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

    // Initial Scores and text set

    // Random number function
    // X is range
    function randomNum(x) {
        var num = Math.floor((Math.random() * (x)));
        return num;
    }

    // Blank Creation
    function createBlank(x) {
        blankArray = [];
        for (var i = 0; i < randomArray.length; i++) {
            blankArray.push("_");
        }
        blankWord.textContent = blankArray.join(" ");
    }

    // Blank Replacement
    function replaceBlank(x) {
        var updateBlank = [];
        for (var i = 0; i < randomArray.length; i++) {
            if (randomArray[i] == x) {
                updateBlank.push(x);
            } else if (blankArray[i] != "_") {
                updateBlank.push(blankArray[i]);
            } else {
                updateBlank.push("_");
            }
        }
        blankArray = updateBlank;
        blankWord.textContent = updateBlank.join(" ")
    }

    // Reset Answer
    function resetAnswer() {
        var i = randomNum(wordBank.length);
        var word = wordBank[i];
        random = word;
        randomArray = random.split("");
        console.log(randomArray);
    }
    // Compare input to computer
    // X is input
    // Y is computer
    function compareComp(x, y) {
        var check = false;
        for (var i = 0; i < y.length; i++) {
            if (x == y[i]) {
                console.log("compareComp function: true");
                check = true;
            } else {}
        }
        return check;
    }

    // Check array if already guessed
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

    // Add to letter guessed array
    function addGuessed(x, y) {
        if (y == false) {
            guessArray.push(x);
            console.log("addGuess:" + guessed.textContent);
            guessed.textContent = guessArray.toString();
        } else {}
    }

    function winCheck() {
        var check = false;
        for (var i = 0; i < blankArray.length; i++) {
            if (blankArray.includes("_") == true) {
                check = false;
            } else {
                check = true;
            }
        }
        if (check == true) {
            blankWord.textContent = blankArray.join("");
            setTimeout(function() { alert("You Win!"); }, 100);
            setTimeout(function () {
                wins.textContent++
                guessed.textContent = "";
                guessArray = [];
                resetAnswer();
                createBlank();
                guessesLeft.textContent = 9;
                console.log("Reset: " + wins.textContent + " " + losses.textContent + " " + random);
            }, 1000);
        } else {}
        console.log("Win: " + check);
        return check;
    }


    // Initial Answer Set
    resetAnswer();
    createBlank();
    console.log("Answer is: " + random);

    // Game Logic
    // Start on Key
    document.onkeyup = function (event) {
        // Check if button is a number
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Input Check
            console.log("Key Input: " + event.key);
            if (guessesLeft.textContent > 0 && winCheck() == false) {
                if (compareComp(event.key, randomArray) == true) {
                    replaceBlank(event.key);
                    addGuessed(event.key, checkArray(event.key));
                    guessesLeft.textContent--
                    console.log("Right Guess");
                    winCheck();
                } else {
                    guessesLeft.textContent--
                    addGuessed(event.key, checkArray(event.key));
                    console.log("Wrong Guess");
                }
            }
            // else if(winCheck() == true && guessesLeft.textContent > 0){
            //     guessed.textContent = "";
            //     wins.textContent++
            //     guessArray = [];
            //     alert("You Win");
            //     resetAnswer();
            //     createBlank();
            //     guessesLeft.textContent = 9;
            //     console.log("Reset: " + wins.textContent + " " + losses.textContent + " " + random);
            // }
            else {
                alert("You lose");
                losses.textContent++
                guessed.textContent = "";
                guessArray = [];
                resetAnswer();
                createBlank();
                guessesLeft.textContent = 9;
                console.log("Reset: " + wins.textContent + " " + losses.textContent + " " + random);
            }
        } else {}
    }
}