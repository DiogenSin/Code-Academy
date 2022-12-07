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
    Metodai, kurie su kiekvienu elementu atlieka iteraciją.

    
    forEach()
    map()
    filter()
    reduce()

    reduceRight()
    some()
    every()
    find()
    findIndex()
    findLast()
    findLastIndex()
    flatMap()

    sort()


    Populiarus rikiavimo metodas - BUbble sort
*/

let skMas = [5,46,8,4,3,2,5,4,65,8,45,12,55,7,84,9,46,5,13]

function skaiciuSortas(a, b){
    return a - b
}

console.log(skMas)
skMas.sort(skaiciuSortas)
console.log(skMas)


