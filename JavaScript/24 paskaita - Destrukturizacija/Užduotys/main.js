//----------------1 užduotis---------------------
//Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

console.groupCollapsed('1 užduotis')

const cars = ["BMW", "VW", "Audi"]

let automobilioMarke = (masinuSarasas) => masinuSarasas.forEach(automobilis => {
    console.log(automobilis)
});

console.log(automobilioMarke(cars))

console.groupEnd('1 užduotis')

//----------------2 užduotis---------------------
//Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.groupCollapsed('2 užduotis')

let automobilioMarkeIrIndex = (masinuSarasas) => masinuSarasas.forEach((automobilis, index) => {
    console.log(index + ': ' + automobilis)
});

console.log(automobilioMarkeIrIndex(cars))

console.groupEnd('2 užduotis')
//----------------3 užduotis---------------------
//Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.groupCollapsed('3 užduotis')

let drauguVardai = ['Kęstas', 'Mindaugas', 'manTas', 'Gediminas', 'arvYdas']

let sutvarkytiKapitalizacija = (varduSarasas) => varduSarasas.map(vardas => vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase())

console.log(sutvarkytiKapitalizacija(drauguVardai))

console.groupEnd('3 užduotis')

//----------------4 užduotis---------------------
//Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
console.groupCollapsed('4 užduotis')

let drauguAmzius = [35, 32, 16, 15, 25, 13, 14, 5, 89]

let pilnameciai = (varduSarasas) => varduSarasas.filter(vardas => vardas > 18)

console.log(pilnameciai(drauguAmzius))

console.groupEnd('4 užduotis')

//----------------5 užduotis---------------------
//Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
console.groupCollapsed('5 užduotis')

let miestai = ['Vilnius', 'Ariogala', 'Klaipėda', 'Pakruojis', 'Utena']

let surastiMiesta = (miestuSarasas) => miestuSarasas.find( miestas => miestas.charAt(0) === 'K')

console.log(surastiMiesta(miestai))

console.groupEnd('5 užduotis')

//----------------6 užduotis---------------------
//Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
console.groupCollapsed('6 užduotis')

let miestasIsMazosios = (miestuSarasas) => miestuSarasas.some( miestas => miestas.charAt(0) === miestas.charAt(0).toLowerCase())

console.log(miestasIsMazosios(miestai))

console.groupEnd('6 užduotis')

//----------------7 užduotis---------------------
//Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
console.groupCollapsed('7 užduotis')

let miestaiIsDidziosios = (miestuSarasas) => miestuSarasas.every( miestas => miestas.charAt(0) === miestas.charAt(0).toUpperCase())

console.log(miestaiIsDidziosios(miestai))

console.groupEnd('7 užduotis')


//-------------ForEach, Filter, Reduce ir Map--------------

console.group('ForEach, Filter, Reduce ir Map')

//----------------------1------------------------
//Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
console.groupCollapsed('1 užduotis')

let prekiuInfo = [
    {id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1},
    {id:0, name:"Hamburgeris", inStock:true, primeCost:0.5, cost:2},
    {id:0, name:"Cheesburgeris", inStock:false, primeCost:0.1, cost:4},
    {id:0, name:"Hotdogas", inStock:true, primeCost:0.7, cost:1.2},
    {id:0, name:"Šnicelis", inStock:true, primeCost:1.3, cost:6},
    {id:0, name:"Kalafijoras", inStock:true, primeCost:3.3, cost:1},
    {id:0, name:"Barščiai", inStock:false, primeCost:10.3, cost:16},
    {id:0, name:"Kebabas", inStock:true, primeCost:0.45, cost:1.3},
    {id:0, name:"Pica", inStock:false, primeCost:0.78, cost:0.5},
    {id:0, name:"Wrapas", inStock:true, primeCost:0.2, cost:0.3},
]
console.log(prekiuInfo)
console.groupEnd('1 užduotis')

//----------------------2------------------------
//Naudojant forEach - išvesti masyvą į konsolę.

console.groupCollapsed('2 užduotis')

let prekiuMasyvas = (masyvas) => masyvas.forEach(preke => console.log(preke))

console.log(prekiuMasyvas(prekiuInfo))

console.groupEnd('2 užduotis')


//----------------------3------------------------
//Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.

console.groupCollapsed('3 užduotis')

let vardaiIrKainos = (masyvas) => masyvas.forEach(preke => console.log(preke.name + ' - ' + preke.cost + ' Eur'))

console.log(vardaiIrKainos(prekiuInfo))

console.groupEnd('3 užduotis')


//----------------------4------------------------
//Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.group('4 užduotis')

let yraSandelyje = (masyvas) => masyvas.filter( preke => preke.inStock == true )

console.log(yraSandelyje(prekiuInfo))

console.groupEnd('4 užduotis')


//----------------------4.1------------------------
//Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.group('4.1 užduotis - neatlikta')




console.groupEnd('4.1 užduotis - neatlikta')

//----------------------4.2------------------------
//Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)

console.group('4.2 užduotis - neatlikta')



console.groupEnd('4.2 užduotis - neatlikta')

//----------------------4.3------------------------
//Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)

console.group('4.3 užduotis - neatlikta')



console.groupEnd('4.3 užduotis - neatlikta')

//----------------------4.4------------------------
//Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.group('4.4 užduotis - neatlikta')



console.groupEnd('4.4 užduotis - neatlikta')

console.groupEnd('ForEach, Filter, Reduce ir Map')

//----------------------------------Destruktūrizacija--------------------------------------

console.group('Destruktūrizacija')

//------------1 užduotis-----------------
//Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.

console.groupCollapsed('1 užduotis')

const masyvas = [1,2,3,'zodis', 'darvienas', 'trecias', true, false, true, {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}]

let [pirmas, antras, trecias] = masyvas

console.log(antras)

console.groupEnd('1 užduotis')


//------------2 užduotis-----------------
//Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

console.groupCollapsed('2 užduotis')

const masyvas1 = [1,2,3,'zodis', 'darvienas', 'trecias', true, false, true, {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}]

let [skaicius1, skaicius2, skaicius3, zodis1, zodis2, zodis3, tiesaMelas1, tiesaMelas2, tiesaMelas3, id] = masyvas1

console.log(id)

console.groupEnd('2 užduotis')

//------------3 užduotis-----------------
//Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.

console.groupCollapsed('3 užduotis')

const masyvas2 = [1,2,3,'zodis', 'darvienas', 'trecias', true, false, true, {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}]

let [pirmasSkaicius, antrasSkaicius, , , , , , ...kasLiko ] = masyvas2

console.log(kasLiko)

console.groupEnd('3 užduotis')

//------------4 užduotis-----------------
//Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

console.groupCollapsed('4 užduotis')

const masyvas3 = [1,2,3,'zodis', 'darvienas', 'trecias', true, false, true, {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}]

let [ , , , ...paskutiniai] = masyvas3

console.log(paskutiniai)

console.groupEnd('4 užduotis')

//------------5 užduotis-----------------
//Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

console.groupCollapsed('5 užduotis')

const objektas = {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}

let {vardas, pavarde, amzius} = objektas

console.log(vardas, pavarde)

console.groupEnd('5 užduotis')

//------------6 užduotis-----------------
//Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

console.groupCollapsed('6 užduotis')

const objektas1 = {vardas: 'Dovydas', pavarde: 'Jakas', amzius: 29}

let {vardas: pirmasVardas, pavarde: antrasVardas} = objektas1

console.log(pirmasVardas, antrasVardas)

console.groupEnd('6 užduotis')








console.groupEnd('Destruktūrizacija')