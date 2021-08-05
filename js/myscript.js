let chilometri = prompt("Inserire numero di chilometri da percorrere:");
let etàPasseggero = prompt("Inserire età:");
const prezzoChilometriPercorsi = (0.21 * chilometri);
let prezzofinale;

console.log("definizione delle variabili");

document.getElementById("numerokm").innerHTML = chilometri;
document.getElementById("età").innerHTML = etàPasseggero;

console.log("definizione elementi per id");



if(etàPasseggero < 18){
    prezzofinale = ((prezzoChilometriPercorsi * 20) / 100);
} else if(etàPasseggero >= 18 && etàPasseggero <= 65){
    prezzofinale = prezzoChilometriPercorsi;
} else{
    prezzofinale = ((prezzoChilometriPercorsi * 40) / 100);
}

console.log("implementazione istruzioni condizionali");


document.getElementById("prezzofinale").innerHTML = prezzofinale;


console.log("valore finale");