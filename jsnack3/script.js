// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numberList = [];
let totalNumber = 0;

const result = document.querySelector("div")

for (let i = 0; i < 10; i++) {
    const num = prompt("Inserisci un numero");
    console.log(num);

    if (isNaN(num)) {
        result.innerHTML = "Hai inserito qualcosa che non è un numero!!!"

    } else {
        numberList.push(num)
        totalNumber += Number(numberList[i])
    }
}

result.innerHTML = `La somma dei tuoi numeri è ${totalNumber}` 