// Helper
function setText(id, text) {
    document.getElementById(id).innerHTML = text;
}

// Simple
function variableExample() {
    let example = 10;

    setText('variable-example-1', example + 10);
    setText('variable-example-2', example + '10');
    setText('variable-example-3', example + '\'000');
}

function ifElseExample() {
    const value = document.getElementById('if-else-input').value;

    if (value > 10) {
        setText('if-else-example', 'Greater than 10');
    } else {
        setText('if-else-example', 'Less than or equal to 10');
    }
}

function switchCaseExample() {
    const value = document.getElementById('switch-case-input').value;

    switch (value) {
        case 'DE':
            setText('switch-case-example', 'Hallo Welt!');
            break;
        case 'EN':
            setText('switch-case-example', 'Hello World!');
            break;
        case 'FR':
            setText('switch-case-example', 'Bonjour le monde!');
            break;
        case 'IT':
            setText('switch-case-example', 'Ciao mondo!');
            break;
        default:
            setText('switch-case-example', 'Unknown language');
            break;
    }

}

function functionExample(value) {
    setText('function-example-1', Math.floor(value));
    setText('function-example-2', Math.ceil(value));
    setText('function-example-3', Math.round(value * 100) / 100);
}

function interpolationExample() {
    const value = '10\'000';

    setText('interpolation-example-1', value + ' Einwohner');
    setText('interpolation-example-2', 'Einwohnerzahl: ' + value);
    setText('interpolation-example-3', `Es wurden ${value} Einwohner gezählt.`);
}

// Middle

function conditionalPluralExample() {
    const value = document.getElementById('conditional-plural-input').value;

    if (value > 1) {
        setText('conditional-plural-example', `${value} Personen`);
    }
    else {
        setText('conditional-plural-example', `${value} Person`);
    }
}

// Advanced
function drawLeftSidedPyramid() {
    let text = '';

    for (let row = 0; row < 7; row++) {
        let pyramid = '';
        for (let column = 0; column <= row; column++) {
            pyramid += '*';
        }
        text += pyramid + '\n';
    }

    setText('left-sided-pyramid', text);
}

function drawRightSidedPyramid() {
    let text = '';

    for (let row = 0; row < 7; row++) {
        let pyramid = '';
        for (let space = 0; space < 7 - row; space++) {
            pyramid += ' ';
        }
        for (let column = 0; column <= row; column++) {
            pyramid += '*';
        }
        text += pyramid + '\n';
    }

    setText('right-sided-pyramid', text);
}

function drawFullPyramid() {
    let text = '';

    for (let i = 0; i < 7; i++) {
        let pyramid = '';
        for (let space = 0; space < 7 - i; space++) {
            pyramid += ' ';
        }
        for (let leftColumn = 0; leftColumn <= i; leftColumn++) {
            pyramid += '*';
        }
        for (let rightColumn = 0; rightColumn <= i - 1; rightColumn++) {
            pyramid += '*';
        }
        text += pyramid + '\n';
    }

    setText('full-pyramid', text);
}