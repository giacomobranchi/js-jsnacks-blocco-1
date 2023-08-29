/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let num1 = prompt('inserisci un numero');
let num2 = prompt('inserisci un altro numero');
console.log(num1, num2);

if (num1 > num2) {
    document.querySelector(".num").innerHTML = num1;
} else if (num2 > num1) {
    document.querySelector(".num").innerHTML = num2;
} else {
    document.querySelector(".num").innerHTML = num1;
}
