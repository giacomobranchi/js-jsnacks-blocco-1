// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// let word1 = prompt("Inserisci una parola");
// let word2 = prompt("Inserisci un'altra parola");

// console.log(word1, word2)

// if (word1.length > word2.length) {
//     document.querySelector(".words").innerHTML = word1 + " " + word2;
// } else if (word1.length < word2.length) {
//     document.querySelector(".words").innerHTML = word2 + " " + word1;
// } else {
//     document.querySelector(".words").innerHTML = word1 + " " + word2;
// }


// (con while) Snack 2:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const wordsWhile = [];
let i = 1;

while (i <= 2) {
    const userWord = prompt('Inserisci una parola')

    wordsWhile.push(userWord)

    i++

}

if (wordsWhile[0].length > wordsWhile[1].length) {

    document.querySelector(".words").innerHTML = wordsWhile[0] + " " + wordsWhile[1];

} else if (wordsWhile[1].length > wordsWhile[0].length) {

    document.querySelector(".words").innerHTML = wordsWhile[1] + " " + wordsWhile[0];

} else {

    document.querySelector(".words").innerHTML = "Le parole sono della stessa lunghezza!";

}