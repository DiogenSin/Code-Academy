//-----------------------------number 1------------------------------------

console.groupCollapsed('number-1')

var milkPrice = Math.random()*1

if (milkPrice % 1 > 0) {
    console.log('Jums reikės centų.')
}

console.groupEnd('number-1')

//-----------------------------number 2------------------------------------

console.groupCollapsed('number-2')

if (milkPrice % 1 > 0) {
    console.log('O dar tiksliau, tai jums reikės ' + milkPrice.toFixed(2) + ' centų.')
}

console.groupEnd('number-2')

//-----------------------------number 3------------------------------------

console.groupCollapsed('number-3')

let skaiciuokle = document.querySelector('#skaiciuokle') // nustatome vietą

let rezultatoLaukas = document.createElement('h1') // sukuriame h1 elementą
let rezultatas = document.createTextNode('') // sukuriame placeholder tekstą
rezultatoLaukas.append(rezultatas) // priskiriame placeholder tekstą prie rezultato lauko
skaiciuokle.append(rezultatoLaukas) // pridedame rezultato lauką prie formos

skaiciuokle.addEventListener('submit', function(e){ // įjungiame pasiklausymą ir nustatome fiksuoti submit atvejus
    e.preventDefault(e); // išjungiame numatytąjį veiksmą, kuris perkrauna puslapį
    console.log(e)
    kaina = e.target.elements.kaina.valueAsNumber
    kiekis = e.target.elements.kiekis.valueAsNumber
    console.log(kaina)
    console.log(kiekis)
    rezultatas = (kaina * kiekis).toFixed(2)
    console.log(rezultatas)
    rezultatoLaukas.append(rezultatas + ' Eur')
})

console.groupEnd('number-3')