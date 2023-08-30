/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
// if (num1 > num2) {
//     document.querySelector(".num").innerHTML = num1;
// } else if (num2 > num1) {
//     document.querySelector(".num").innerHTML = num2;
// } else {
//     document.querySelector(".num").innerHTML = num1;
// }
// let num1 = prompt('inserisci un numero');
// let num2 = prompt('inserisci un altro numero');
// console.log(num1, num2);
// num.push(num1)
// const result = document.querySelector("div")



const num = [];
let i = 0;
while (i < 2) {
    const userNum = Number(prompt(`Scegli un numero`));

    if (isNaN(num)) {
        console.log("Hai inserito qualcosa che non è un numero!!!");
        i--

    } else {

        num.push(userNum)

        i++

        console.log(num);


    }


}

if (num[0] > num[1]) {
    alert(num[0])
} else {
    alert(num[1])
}
