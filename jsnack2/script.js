// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let word1 = prompt("Inserisci una parola");
let word2 = prompt("Inserisci un'altra parola");

console.log(word1, word2)

if (word1.length > word2.length) {
    document.querySelector(".words").innerHTML = word1 + " " + word2;
} else if (word1.length < word2.length) {
    document.querySelector(".words").innerHTML = word2 + " " + word1;
} else {
    document.querySelector(".words").innerHTML = word1 + " " + word2;
}