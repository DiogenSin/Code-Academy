// --------------------Lambda / arrow function-------------------------

function daugyba0(par1, par2){ // senasis būdas
    return par1*par2
}

let daugyba1 = (par1, par2) => par1*par2 // naujasis būdas

// lambda sintaksė-------------------------
/*
parametras => veiksmas

(parametras1, parametras2) => veiksmas

(parametras1, parametras2) => { return veiksmas }


(parametras1, parametras2) => {
    veiksmas1
    veiksmas2
    return ats
}

let pavadinimas = (parametras1, parametras2) => {return veiksmas}
*/
// Lembda yra standartizuotas funkcijų užrašymo būdas nuo Ecma6 versijos (2015 m.)
// Jis yra trumpesnis, patogesnis, nereikalaujantis callback`ų


//--------------------------Masyvų metodai-----------------------------
/*
    Iteraciniai masyvų metodai - iteruoja per masyvą ir leidžia atlikti kažkokį veiksmą su kiekviena interacija (masyvo elementu).
    Naudinga tose situacijose, kuriose neleidžiamas paprastas for`as arba for of`as.
    
    forEach()   - atlieka nurodytą funkciją kiekvienam masyvo elementui po kartą.
                forEach`o minusai: negali būti sustabdytas ir negražina jokios reikšmės.

    map()       - sukurią naują masyvą su ankstesnio masyvo duomenimis po pateiktos funkcijos pritaikymo.
    
    filter()    - sukuria "shalow" kopiją iš pateikto masyvo dalies, kuri praėjo filtrą, kuris naudojasi pateiktą funkciją.

    reduce()    - sumažina masyvą į vieną kintamajį, kuris susideda iš visų masyvo modifikuotų elementų.
                someArray.reduce((accumulator, element) => veiksmai)
                someArray.reduce((accumulator, element, iteration) => veiksmai)
                someArray.reduce((accumulator, element, iteration, array) => veiksmai)
                someArray.reduce((accumulator, element) => veiksmai, initialValue)
                someArray.reduce((accumulator, element, iteration) => veiksmai, initialValue)
                someArray.reduce((accumulator, element, iteration, array) => veiksmai, initialValue)
    reduceRight()- taip pat kaip paprastas reduce, tik veikia iš dešinės į kairę.
    some()      - tikrina ar bent vienas masyvo elementas atitinka kažkokią sąlygą ir gražina true/false.
    every()     - tikrina ar kiekvienas masyvo elementas atitinka kažkokią sąlygą ir gražina true/false.
    find()      - ieško elemento, kuris atitinka sąlygą ir radus gražina jį. (Neradus grąžina undefined.)
    findIndex() - ieško elemento, kuris atitinka sąlygą ir radus gražina jo indeksą. (Neradus grąžina -1.)
    findLast()  -   ieško paskutinio masyve esančio elemento, kuris atitinka sąlyga ir jį grąžina. (Neradus grąžina undefined.)
    findLastIndex() - ieško paskutinio masyve esančio elemento, kuris atitinka sąlyga ir grąžina jo indeksą. (Neradus grąžina -1.)
    flatMap()   - grąžina masyva, kuriame visi elementai yra vienu lygmeniu žemiau.

    sort()

----Visiems aukščiau išvardytiems metodams tinkama sintaksė (išskyrus reduce, reduceRight, sort)

    masyvas.metodas(elementas => veiksmai)
    masyvas.metodas((elementas, iteracija) => veiksmai)
    masyvas.metodas((elementas, iteracija, masyvas) => veiksmai)



    Populiarus rikiavimo metodas - BUbble sort
*/
let skaiciuMasyvas = [5,46,8,4,3,2,5,4,65]


//---------------------forEacch()-----------------------
console.groupCollapsed('forEach()')

skaiciuMasyvasKopija = []
skaiciuMasyvas.forEach(element => console.log(element)) // pateikia masyvo elementus konsolėje
skaiciuMasyvas.forEach(skaicius => {skaiciuMasyvasKopija.push(skaicius)}) // nukopijuoja masyvą
console.log('Kopija: ' + skaiciuMasyvasKopija)

//-------------

let pvzMasyvas = [4,6,1,'zodziu',false]

//masyvas.forEach(elementoPavadinimas => veiksmai)
pvzMasyvas.forEach(domuo => console.log('Masyvo domuo: ', domuo))

//masyvas.forEach((elementoPavadinimas, iteracija) => veiksmai)
pvzMasyvas.forEach((domuo, iteracija) => console.log('Masyvo domuo: ' + iteracija + ' <= Pozicija ' + ' Reikšmė => ' + domuo))

//masyvas.forEach((elementoPavadinimas, iteracija, masyvas) => veiksmai)
pvzMasyvas.forEach((domuo, iteracija, masyvas) => console.log('Masyvo domuo: ' + iteracija + ' <= Pozicija ' + ' Reikšmė => ' + domuo + ' sekanti reikšmė => ' + [iteracija + 1]))

console.groupEnd('forEach()')

//---------------------map()-----------------------
console.groupCollapsed('map()')

const zemelapis = skaiciuMasyvas.map(element => element*2)

console.log(zemelapis)

console.groupEnd('map()')

//---------------------filter()-----------------------
console.group('filter()')

const filtruotasMasyvas = skaiciuMasyvas.filter(skaicius => skaicius > 5)

console.log(filtruotasMasyvas)

console.groupEnd('filter()')

//---------------------reduce()-----------------------
console.group('reduce()')

const reduceMasyvas = skaiciuMasyvas.reduce((bendras, elementas) => bendras + ' ' + elementas, 'pradžia')
console.log(reduceMasyvas)
console.log(typeof(reduceMasyvas))

console.groupEnd('reduce()')

//----------------------sort()---------------------
console.groupCollapsed('sort()')

function skaiciuSortas(a, b){
    return a - b
}

console.log(skaiciuMasyvas)
skaiciuMasyvas.sort(skaiciuSortas)
console.log(skaiciuMasyvas)

console.groupEnd('sort()')



