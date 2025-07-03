//chiedere al passeggero quanti km deve percorrere
const km = parseInt(prompt('numero km'))
//chiedere al passeggero la sua età
const age = parseInt(prompt('età passeggero'))

//prezzo base
const basePrice = 0.21 * km;

//prezzo finale
let finalPrice;

//calcolo sconto in base l'età e km da percorrere
if(age < 18){
    finalPrice = basePrice - ( basePrice *  20 / 100 );

}
else if(age > 65){
    finalPrice = basePrice - ( basePrice *  40 / 100 );
}

else{
  finalPrice = basePrice
}

console.log(`il prezzo finale del biglietto è di ${finalPrice.toFixed(2)}`)