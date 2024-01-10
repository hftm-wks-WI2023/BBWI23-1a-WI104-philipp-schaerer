// Helper
function setText(id, text) {
    document.getElementById(id).innerHTML = text;
}

// Simple
function variableExample() {
    let example = 10;

    // 20
    // setText("variable-example-1", example + ...);
    // 1010
    // setText("variable-example-2", example + ...);
    // 10'000
    // setText("variable-example-3", example + ...);
}

function ifElseExample() {
    const value = document.getElementById("if-else-input").value;

    // When > 10
    // setText('if-else-example', 'Greater than 10');
    // When <= 10
    // setText('if-else-example', 'Less than or equal to 10');
}

function switchCaseExample() {
    const value = document.getElementById("switch-case-input").value;

    // DE
    // setText('switch-case-example', 'Hallo Welt!');
    // EN
    // setText('switch-case-example', 'Hello World!');
    // FR
    // setText('switch-case-example', 'Bonjour le monde!');
    // IT
    // setText('switch-case-example', 'Ciao mondo!');
    // Unknown
    // setText('switch-case-example', 'Unknown language');
}

function functionExample(value) {
    /*
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    */
    // 12
    // setText("function-example-1", Math. ...);
    // 13
    // setText("function-example-2", Math. ...);
    // 12.25
    // setText("function-example-3", Math. ...);
}

function interpolationExample() {
    const value = "10'000";

    // 10'000 Einwohner
    // setText("interpolation-example-1", ...);

    // Einwohnerzahl: 10'000
    // setText("interpolation-example-2", ...);

    // Es wurden 10'000 Einwohner gezählt.
    // setText("interpolation-example-3", ...);
}

// Middle
function conditionalPluralExample() {
    const value = document.getElementById("conditional-plural-input").value;

    // When > 1 = ... Personen
    // setText("conditional-plural-example", ...);

    // Else = ... Person
    // setText("conditional-plural-example", ...);
}

// Advanced
function drawLeftSidedPyramid() {
    let text = "";

    // for (let row = 0; ...) {
    //     rowText = ... init
    //     for (let column = 0; ...) {
    //         //columnText += ...
    //     }
    //     rowText +=
    // }

    setText("left-sided-pyramid", text);
}

function drawRightSidedPyramid() {
    let text = "";

    // for (let row = 0; ...) {
    //     rowText = ... init
    //     for (... whitespace) {
    //         //columnText += ...
    //     }
    //     for (... column) {
    //         pyramid += "*";
    //     }
    //     ...
    // }

    setText("right-sided-pyramid", text);
}

function drawFullPyramid() {
    let text = "";

    // for (...) {
    //     ...
    //     for (...) {
    //         ...
    //     }
    //     for (... left) {
    //         ...
    //     }
    //     for (... right) {
    //         ...
    //     }
    //     ...
    // }

    setText("full-pyramid", text);
}
