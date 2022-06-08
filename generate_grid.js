let NUM_OF_GUESSES = 6;
let LENGTH_OF_WORD = 5;
let word = "UNDEFINED";

// Takes a user input and a given word, and outputs the comparison array.
function getOutputArray(input, word) {
    // 0 == not in
    // 1 == correct
    // 2 == correct BUT wrong place
    console.assert(input.length === word.length);
    input = input.toLowerCase();

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
    // TODO make this random.
    return "apple";
}

// EventListener function for when a guess is submitted
function guessWord(event) {
    console.log("SUBMIT RECEIVED");
    let guessWord = textInput.value;
    console.log("guess word = ", guessWord, " real word = ", word);
    if (guessWord.length !== word.length) {
        // todo show length error
        return;
    }

    // todo guess word and update dom elements.

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

    for (let node = 0; node < LENGTH_OF_WORD; node++) {
        let thisNode = document.createElement("div");
        thisNode.classList.toggle("node2");
        thisRow.appendChild(thisNode);
    }
    rowsOfNodes.appendChild(thisRow);

}
container.appendChild(rowsOfNodes);