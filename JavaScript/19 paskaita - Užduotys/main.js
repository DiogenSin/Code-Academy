console.groupCollapsed('1 Užduotis')

//----------------------Funkcijų užduotys-----------------------
//----------------------1 užduotis------------------------------
// Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). 
//(4 funkcijos) (optional 7 funkcijos)
console.groupCollapsed('Sudėtis')
function sudetis1(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 + nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }
}
console.groupEnd('Sudėtis')


console.groupCollapsed('Atimtis')
function atimtis(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 - nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }
}
console.groupEnd('Atimtis')



console.groupCollapsed('Daugyba')
function daugyba(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 * nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }
}
console.groupEnd('Daugyba')


console.groupCollapsed('Dalyba')
function dalyba(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 / nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }
}
console.groupEnd('Dalyba')


console.groupCollapsed('Šaknis')
function saknis(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 ** nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }
}
console.groupEnd('Šaknis')


console.groupCollapsed('Liekana')
function liekana(nr1, nr2){
    if(typeof(nr1) === 'number' && typeof(nr2) === 'number'){
        return(nr1 % nr2)
    } else{
        return 'Viena iš nurodytų verčių nėra skaičius.'
    }

}
console.groupEnd('Liekana')


console.groupEnd('1 Užduotis')


//----------------------2 užduotis------------------------------
// Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio
console.groupCollapsed('2 Užduotis')

let masyvas1=[1,2,5,7,6,21,'Dovydas','Jonas','Petras','Antanas',true, false,true,true]

function nuoPirmoIkiPaskutinio(masyvas1){
    for(i=0 ; i < masyvas1.lenght ; i++){
        return console.log(masyvas1[i])
    }
}
console.groupEnd('2 Užduotis')

//----------------------3 užduotis------------------------------
// Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo

console.groupCollapsed('3 Užduotis')

console.groupEnd('3 Užduotis')

//----------------------4 užduotis------------------------------
// Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.
console.groupCollapsed('4 Užduotis')

let ketvirtaUzduotis = ['Xavieras', 'Dovydas', 'Antanas', 'Petras']

console.log(ketvirtaUzduotis)

ketvirtaUzduotis.sort(function(a,b){return a.localeCompare(b)})

console.log(ketvirtaUzduotis)

console.groupEnd('4 Užduotis')

//----------------------5 užduotis------------------------------
// Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
console.groupCollapsed('5 Užduotis')

let penktaUzduotis = [1, 9, 20, 50, 101]

console.log('Naudojantis return b-a')
console.log(penktaUzduotis)
penktaUzduotis.sort(function(a,b){return b-a})
console.log(penktaUzduotis)

console.log('Naudojantis reverse')
console.log(penktaUzduotis)
penktaUzduotis.reverse()
console.log(penktaUzduotis)

console.groupEnd('5 Užduotis')

//----------------------6 užduotis------------------------------
// Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9).
console.groupCollapsed('6 Užduotis')

    console.groupCollapsed('Naudojantis Slice`u')

let sestaUzduotis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(sestaUzduotis)

function XYZ(a, b){
    let array2=[]
    for(i=a ; i <= b ; i++){
        array2.push(i)
    }
    return array2
}


console.log(sestaUzduotis)

    console.groupEnd('Naudojantis Slice`u')

    console.groupCollapsed('Naudojantis For`u')

function nuoIki(a, b){
    let nuoIkiReiksmes=[]; // Tuščias masyvas būsimoms reikšmėms
    for( i=a ; i <= b ; i++){
        nuoIkiReiksmes.push(i); // Tuščias pasyvas pripildomas reikšmėmis
    }
    return nuoIkiReiksmes; // Pateikiamas masyvas su naujomis reikšmėmis
}
    console.groupEnd('Naudojantis For`u')
console.groupEnd('6 Užduotis')

//----------------------7 užduotis------------------------------
// Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
console.groupCollapsed('7 Užduotis')

function KasKazkelintasNuoIki(a, b, c){
    let cikloReiksmes=[];       // Tuščias masyvas būsimoms reikšmėms
    for( i=b ; i <= c ; i+=a){
        cikloReiksmes.push(i);  // Tuščias pasyvas pripildomas reikšmėmis
    } 
    return cikloReiksmes;       // Pateikiamas masyvas su naujomis reikšmėmis
}

console.groupEnd('7 Užduotis')


