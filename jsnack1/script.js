/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
let num = [];
let num1 = prompt('inserisci un numero');
let num2 = prompt('inserisci un altro numero');
console.log(num1, num2);
num.push(num1)
const result = document.querySelector("div")
// if (num1 > num2) {
//     document.querySelector(".num").innerHTML = num1;
// } else if (num2 > num1) {
//     document.querySelector(".num").innerHTML = num2;
// } else {
//     document.querySelector(".num").innerHTML = num1;
// }



let i = 0;
while (i < num.length) {
    const element = num[i];

    if (isNaN(element)) {
        result.innerHTML = "Hai inserito qualcosa che non è un numero!!!"
        i--

    } else if (num1 > num2) {

        document.querySelector(".num").innerHTML = num1;

        i++

        console.log(num);


    } else if (num2 > num1) {

        document.querySelector(".num").innerHTML = num2;
        i++

    } else {
        document.querySelector(".num").innerHTML = `I numeri sono uguali!`
        i++
    }


}