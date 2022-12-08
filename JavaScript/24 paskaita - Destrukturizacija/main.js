// Užduotys be ir su iteraciniais metodais

let zodziuMasyvas = ['labas', 'baltazaras', 'kiaušinis', 'oda', 'jeigu', 'žemė', 'teleportacija']
let skaiciuMasyvas = [1,2,3,45,151,-1,7,15,-62,-13,4657,51]
let misrusMasyvas = ['alkatrasas', 'Harry Potter', 5, 16,12, -8, false, true, true, false, 'Kalkuliatorius']

// forEach
// Į konsolę pateikti masyvo duomenis atskirose eilutėse

// nesinaudojant forEach()
let uzduotis_1_be = (masyvas) => {
    for ( i= 0 ; i < masyvas.length ; i++){
        console.log(masyvas[i])
    }
}

// naudojantis forEach()
let uzduotis_1_su = (masyvas) => {
    masyvas.forEach(elementas => console.log(elementas));
}

// filter()
// Parašyti funkciją, kuri gąžintų masyvą tik su skaiciais didesniais už 10 iš jai pateikto masyvo

// nesinaudojant filter()
let uzduotis_2_be = (masyvas) => {
    let daugiauNei = []
    for ( i = 0 ; i < masyvas.length ; i++){
        masyvas[i] > 10 ? daugiauNei.push(masyvas[i]) : null;
    } return console.log(daugiauNei)
}

// naudojantis filter()
let uzduotis_2_su = (masyvas) => masyvas.filter(skaicius => skaicius > 10)


// some()
// Parašyti funkciją, kuri patikrintu ar jai paduotame masyve bent vienas elementas yra žodis, kuris yra ilgesnis nei 5 raidžių žodis.

// ne some()
let uzduotis_3_be = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++){
        if (masyvas[i].length > 5){
            return true
        }
    }
}
console.log(uzduotis_3_be(zodziuMasyvas))


// su some()
let uzduotis_3_su = (masyvas) => masyvas.some(elementas => elementas.length > 10)

console.log(uzduotis_3_su(zodziuMasyvas))

// 
// Parašyti funkciją, kuri jai duotame masyve , rastų ir grąžintų pirmąjį kintamąjį, kuris yra skaičius


let uzduotis_4_be = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++){
        if (typeof(masyvas[i]) === 'number'){
            return masyvas[i]
        }
    }
}

let uzduotis_4_su = (masyvas) => masyvas.find(element => typeof(element) === 'number')
console.log(uzduotis_4_su(misrusMasyvas))


console.group('Destruktūrizacija')
//---------------------Destruktūrizavimas----------------------
/*
Išskirsto elementą į dalis ir jį priskiria.

Masyvai
let [a, b] = masyvas - priskiriama paeiliui
let [a, , b] = masyvas - praleidža elementą
let [a, , b, ...c] ž masyvas - likusiu elementų priskyrimas
let [a = 'default value', , b, ...c] = masyvas - priskiriamos numatyto reikšmės, jei nurodyto elemento reikšmė undefined


Objektai
let {a, b} = objektas - priskyrimas pagal objekto vardus
let {a, b: kitasB} = objektas - priskyrimas pagal pervadintą raktinį žodį
let {a, b: pilnasVardas, c = 'Pavardenis', ...kitas} = objektas - nustatoma default value ir visi kiti elementai



*/



let masyvas = [undefined, 1, true, 'zodis', 45, 42]

// be destruktūrizavimo
let a = masyvas[0]
let b = masyvas[1]


//su destruktūrizavimu
let [z = 'default value', x, y] = masyvas // tuščias tarpas reiškia, kad elementui nepriskiriama jokia reikšmė.
console.log(z, x)

let destrF = (arg1, arg2, ...args) => {console.log(arg1, arg2, args)}

// objektas be destruktūrizacijos

let objektas = {
    vardas: 'Dovydas',
    amzius: 26,
    gyvenamojiVieta: {
        salis: 'Lietuva',
        miestas: 'Tauragė'
    }
}

// let vardas = objektas.vardas
// let amzius = objektas.amzius

let {vardas: pilnasVardas, amzius} = objektas // nurodyti pavadinimai privalo būti tokie patys, kaip objekte nurodyti

console.log(pilnasVardas, amzius)




console.groupEnd('Destruktūrizacija')