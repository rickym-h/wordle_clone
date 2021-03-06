let NUM_OF_GUESSES = 6;
let LENGTH_OF_WORD = 5;
let word = "UNDEFINED";

function updateGuesses(array, guessedWord) {
    let rowToEdit = document.getElementsByClassName("un-guessedRow");
    if (rowToEdit.length === 0) {
        alert("The word was: " + word);
        return;
    }
    rowToEdit = rowToEdit[0];

    rowToEdit.classList.toggle("un-guessedRow");
    rowToEdit.classList.toggle("guessedRow");

    const children = rowToEdit.childNodes;
    console.assert(children.length === array.length);
    for (let i = 0; i < guessedWord.length; i++) {
        console.log(children[i]);
        let node = children[i];
        node.textContent = guessedWord.charAt(i);

        if (array[i] === 0) {
            continue;
        }
        if (array[i] === 1) {
            node.classList.toggle("node1");
            node.classList.toggle("node0");
        }
        if (array[i] === 2) {
            node.classList.toggle("node2");
            node.classList.toggle("node0");
        }
    }
    console.log(array);
    console.log(guessedWord);
}
// Takes a user input and a given word, and outputs the comparison array.
function getOutputArray(input, word) {
    // 0 == not in
    // 1 == correct
    // 2 == correct BUT wrong place
    console.assert(input.length === word.length);
    input = input.toUpperCase();

    let output = [];

    for (let i = 0; i<input.length; i++) {
        if (input.charAt(i) === word.charAt(i)) {
            output.push(1);
            continue;
        }

        if (word.includes(input.charAt(i))) {
            output.push(2);
            continue;
        }
        console.log(word, input.charAt(i))

        output.push(0);
    }
    let actualOutput = [output, input]
    return actualOutput;

}

// Get a random word which is n letters long.
function getWordOfLengthN(n) {
    let arrayOfWords = ["which",
        "there",
        "their",
        "about",
        "would",
        "these",
        "other",
        "words",
        "could",
        "write",
        "first",
        "water",
        "after",
        "where",
        "right",
        "think",
        "three",
        "years",
        "place",
        "sound",
        "great",
        "again",
        "still",
        "every",
        "small",
        "found",
        "those",
        "never",
        "under",
        "might",
        "while",
        "house",
        "world",
        "below",
        "asked",
        "going",
        "large",
        "until",
        "along",
        "shall",
        "being",
        "often",
        "earth",
        "began",
        "since",
        "study",
        "night",
        "light",
        "above",
        "paper",
        "parts",
        "young",
        "story",
        "point",
        "times",
        "heard",
        "whole",
        "white",
        "given",
        "means",
        "music",
        "miles",
        "thing",
        "today",
        "later",
        "using",
        "money",
        "lines",
        "order",
        "group",
        "among",
        "learn",
        "known",
        "space",
        "table",
        "early",
        "trees",
        "short",
        "hands",
        "state",
        "black",
        "shown",
        "stood",
        "front",
        "voice",
        "kinds",
        "makes",
        "comes",
        "close",
        "power",
        "lived",
        "vowel",
        "taken",
        "built",
        "heart",
        "ready",
        "quite",
        "class",
        "bring",
        "round"]
    let selectedWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)].toUpperCase();

    console.log(selectedWord);
    return selectedWord;
}

// EventListener function for when a guess is submitted
function guessWord(event) {
    console.log("SUBMIT RECEIVED");
    let guessWord = textInput.value;
    console.log("guess word = ", guessWord, " real word = ", word);
    const log = document.getElementById('info');
    log.textContent = "";
    if (guessWord.length !== word.length) {
        log.textContent = "Please enter a word of length " + LENGTH_OF_WORD;
        return;
    }

    let comparisonResult = getOutputArray(guessWord, word);
    updateGuesses(comparisonResult[0], comparisonResult[1]);


}
const textInput = document.querySelector("#textInput");
const guessButton = document.querySelector("#guessButton");
guessButton.addEventListener("click", guessWord);

word = getWordOfLengthN(5);
const container = document.querySelector("#container");

let rowsOfNodes = document.createElement("div");

for (let row = 0; row < NUM_OF_GUESSES; row++) {
    // Create a row of nodes and add it to the
    let thisRow = document.createElement("div");
    thisRow.classList.toggle("row");
    thisRow.classList.toggle("un-guessedRow");

    for (let node = 0; node < LENGTH_OF_WORD; node++) {
        let thisNode = document.createElement("div");
        thisNode.classList.toggle("node0");
        thisRow.appendChild(thisNode);
    }
    rowsOfNodes.appendChild(thisRow);

}
container.appendChild(rowsOfNodes);
