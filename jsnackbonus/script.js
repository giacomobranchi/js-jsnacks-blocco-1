let odd = []

const printed = document.querySelector("div")

for (let i = 0; i < 6; i++) {
    const num = prompt("Inserisci un numero");
    console.log(num);

    if (num % 2 != 0) {
        printed.innerHTML += `${num} <br>`

    }
}