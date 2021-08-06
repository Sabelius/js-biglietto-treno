let chilometri = parseInt( prompt("Inserire numero di chilometri da percorrere:"));
let etàPasseggero = parseInt( prompt("Inserire età:"));
const prezzoChilometriPercorsi = (0.21 * chilometri);
let prezzofinale;

console.log("definizione delle variabili");


document.getElementById("numerokm").innerHTML = chilometri;
document.getElementById("età").innerHTML = etàPasseggero;


console.log("definizione elementi per id");


if(etàPasseggero < 18){
    prezzofinale = (prezzoChilometriPercorsi - ((prezzoChilometriPercorsi * 20) / 100));
} else if(etàPasseggero >= 18 && etàPasseggero <= 65){
    prezzofinale = prezzoChilometriPercorsi;
} else{
    prezzofinale = (prezzoChilometriPercorsi - ((prezzoChilometriPercorsi * 20) / 100));
}

console.log("implementazione istruzioni condizionali");


document.getElementById("prezzofinale").innerHTML = prezzofinale.toFixed(2);

console.log("valore finale");