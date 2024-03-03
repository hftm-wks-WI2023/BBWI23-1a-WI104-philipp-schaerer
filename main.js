
// ========================
// Variablen
// ========================
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

const zahl = 42;
const text = "Hallo Welt";
const bool = true;
const obj = {
    name: "Max",
    alter: 30
};
const arr = [1, 2, 3, 4, 5];

// ========================
// Arithmetische Operatoren
// ========================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators?retiredLocale=de

const addieren = 1 + 2;
const subtrahieren = 2 - 1;
const multiplizieren = 2 * 2;
const dividieren = 4 / 2;
const modulo = 5 % 2; // Restwert, kann z.B. verwendet werden um zu prüfen ob eine Zahl gerade oder ungerade ist
                      // Wennn der Restwert 0 ist, ist die Zahl gerade, ansonsten ungerade

// ========================
// Vergleichsoperatoren
// ========================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement

// Gleich
if (1 === 1) {
    console.log("1 ist gleich 1");
}

// Nicht gleich
if (1 !== 2) {
    console.log("1 ist nicht gleich 2");
}

// Kleiner als
if (1 < 2) {
    console.log("1 ist kleiner als 2");
}
// Kleiner oder gleich
if (1 <= 1) {
    console.log("1 ist kleiner oder gleich 1");
}

// Größer als
if (2 > 1) {
    console.log("2 ist größer als 1");
}
// Größer oder gleich
if (2 >= 2) {
    console.log("2 ist größer oder gleich 2");
}

// Ein Else Block wird ausgeführt, wenn die Bedingung in der if-Anweisung nicht zutrifft
if (false) {
}
else {
    console.log("Die Bedingung ist nicht erfüllt");
}

// Textvergleich
if ("Hallo" === "Hallo") {
    console.log("Die Texte sind gleich");
}

if ("Hallo" !== "Welt") {
    console.log("Die Texte sind nicht gleich");
}

// ========================
// Buil-in Funktionen
// ========================

// Math Funktionen (abs, floor, ceil)
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math
const abs = Math.abs(-5); // ergibt 5
const floor = Math.floor(3.6); // ergibt 3
const ceil = Math.ceil(3.6); // ergibt 4

// Array Funktionen (push, pop, shift, unshift)
const arr1 = [1, 2, 3, 4, 5];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
arr1.push(6);    // fügt 6 ans Ende des Arrays hinzu

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
arr1.pop();      // entfernt das letzte Element des Arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
arr1.shift();    // entfernt das erste Element des Arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
arr1.unshift(0); // fügt 0 am Anfang des Arrays hinzu

// ========================
// Array Beispiele
// ========================

const arr2 = [1, 2, 3, 4, 5];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const groesserAls3 = arr2.filter((zahl) => zahl > 3); // ergibt [4, 5]
// Etwas ähnliches kann man dann auch mit dem Modulo % Operator machen damit die Liste nur gerade oder ungerade Zahlen enthält

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
const zusammengefügt = arr2.join(", "); // ergibt "1, 2, 3, 4, 5"

const textListe = "a,b,c,d,e";
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const getrennt = textListe.split(","); // ergibt ["a", "b", "c", "d", "e"]