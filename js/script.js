const km = parseInt(prompt('numero km'))
const age = parseInt(prompt('età passeggero'))

const basePrice = 0.21 * km;

let finalPrice;

if(age < 18){
    finalPrice = basePrice - ( basePrice *  20 / 100 );
}
else if(age > 65){
  
}

else{
}

console.log(`il prezzo finale del biglietto è di ${finalPrice.toFixed(2)}`)