// 0 == not in
// 1 == correct
// 2 == correct BUT wrong place

function getOutputArray(input, word) {

    console.assert(input.length === word.length);

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
    return output;

}