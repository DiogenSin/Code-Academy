/*

1) Kintamiejie
    String
    Number
    Boolean
    Array
    Object
2) Operatoriai
    Matematiniai
    Palyginimo
    Loginiai
3) Sąlygos
    if (if else, if elseselt else...)
    switch
    ternary
4) Ciklai
    for
    while
    iteraciniai metodai (forEach, map, filter ir t.t.)
5) Funkcijos
    paprastas funkcijos deklaravimas
    anoniminės funkcijose
    arrow/lambda
6) Metodai
    Number/Math
    String
    Array
    Objects

*/
console.groupCollapsed('JS array,string methods')
// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
console.groupCollapsed('1')
let masyvas = ['Dovydas', 'Jakas', 29, 1993, 08, 13, false, false]
function stringas(){
let stringas = masyvas[2]
console.log(typeof(stringas))
return console.log(stringas.toString() + ' ' + typeof(stringas.toString()))
}
console.groupEnd('1')
// 2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)
console.groupCollapsed('2')
console.groupEnd('2')
// 3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
console.groupCollapsed('3')
console.log(masyvas.reverse())

console.log(masyvas.sort(function(a, b){a - b}))
console.groupEnd('3')
// 4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).

console.groupCollapsed('4')
function isvalome(vardas, pavarde){

    let vardoPozicija = masyvas.indexOf(vardas)
    let pavardesPozicija = masyvas.indexOf(pavarde)

    masyvas.splice(vardoPozicija, 1)
    masyvas.splice(pavardesPozicija, 1)
    
}

console.log(isvalome('Dovydas', 'Jakas'))

console.log(masyvas)

console.groupEnd('4')

// 5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

console.groupCollapsed('5')

let max = masyvas.reduce((a, b) => Math.max(a, b), -Infinity);
let min = masyvas.reduce((a, b) => Math.min(a, b));

console.log(max)
console.log(min)

console.groupEnd('5')

// 6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

console.groupCollapsed('6')
let masyvas2 = [1,2,13,4,5,6,8,9,7,8,9,4,5,6,7,08,9,1993]

masyvas2.forEach(skaicius => {
    let dublikatas = masyvas.find(skaicius1 => skaicius1 == skaicius)
    console.log(dublikatas)
});

console.groupEnd('6')

// 7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
console.groupCollapsed('7')

let pirmas=["a","b","c","d","e","f"]
let antras=[0,3,4]

let naujasMasyvas = []

antras.forEach(index => {
    naujasMasyvas.push(pirmas[index])
})

console.log(naujasMasyvas)

console.groupEnd('7')

// 8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.
console.groupCollapsed('8')
var newArray = masyvas2.filter((value, index, self) => self.indexOf(value) === index);

console.log(newArray)

console.groupEnd('8')

// 9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
console.groupCollapsed('9')
let masyvas3 = [1,5,9,8,1993,51,45,65,32,78,11]

let masyvai = [masyvas, masyvas2, masyvas3]

masyvas3.forEach(skaicius => {
    let pirmoMasyvoDuplikatai = masyvas.find(skaicius1 => skaicius1 == skaicius)
    let antroMasyvoDuplikatai = masyvas2.find(skaicius2 => skaicius2 == skaicius)
    if(pirmoMasyvoDuplikatai == antroMasyvoDuplikatai){console.log(pirmoMasyvoDuplikatai, antroMasyvoDuplikatai)}

})
console.groupEnd('9')
// 10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).
console.groupCollapsed('10')
function didziausias(x,y){
    console.log(x, y)
    let kartu = [x, y]
    console.log(kartu)
    let sulygintas = kartu.flat()
    console.log(sulygintas)
    console.log(Math.max.apply(null, sulygintas))
}

didziausias([12,54,1,65,78,91,45],3)

console.groupEnd('10')
console.groupEnd('JS array,string methods')
// Ciklai ir funkcijos

console.groupCollapsed('Ciklai ir funkcijos')

// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
console.groupCollapsed('1')

for(i = 0 ; i < masyvas.length ; i++){
    console.log(masyvas[i])
}

console.groupEnd('1')


// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
console.groupCollapsed('2')

for(i = 0 ; i < masyvas2.length ; i = i +3){
    console.log(masyvas2[i])
}

console.groupEnd('2')


// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.
console.groupCollapsed('3')

function kazkelintas(x){
for(i = 0 ; i < masyvas2.length ; i = i +x){
    console.log(masyvas2[i])
}
}
console.groupEnd('3')


// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
console.groupCollapsed('4')

function didesnisNei(x){
for(i = 0 ; i < masyvas2.length ; i++){
    if(masyvas2[i] > x){
        return console.log(masyvas2[i])
    }
}
}
console.groupEnd('4')



let zodziuMasyvas = ['Dovydas', 'Jakas', 'dragūnas', 123, 15, 10, 5, 2, 'Liepoja', 'Draigužis', false, true]


// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.
console.groupCollapsed('5')

function pirmaRaide(x){
    for( i = 0 ; i < zodziuMasyvas.length; i++){
        if(zodziuMasyvas[i].toString().charAt(0) === x){
            console.log(zodziuMasyvas[i])
        }
    }
}

console.log(pirmaRaide("D"))
console.groupEnd('5')


// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
let rikiavimui = ['Dovydas', 'Jakas', 'dragūnas', 'Liepoja', 'Draigužis']
let rikiavimuiSkaiciai = [123, 15, 10, 5, 2, 55, 4]
console.groupCollapsed('6')

rikiavimuiSkaiciai.sort(function(a, b){return a-b})
rikiavimui.sort()

console.log(rikiavimuiSkaiciai)
console.log(rikiavimui)


console.groupEnd('6')



// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.

console.groupCollapsed('7')

function lyginiaiMazejimo(){
    let lyginiai = []
    masyvas2.forEach(skaicius => {
        skaicius % 2 == 0 ? lyginiai.push(skaicius) : null
    })
    lyginiai.sort(function(a, b){return b-a})
    console.log(lyginiai)
}
console.log(lyginiaiMazejimo())
console.groupEnd('7')

console.groupEnd('Ciklai ir funkcijos')



// JS kartojimas HigherOrderFunctions

console.group('Higher order functions')

// 1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.

console.groupCollapsed('1')
function daugiauNei(x){
    for(i=0; i<masyvas3.length;i++){
        if(masyvas3[i] > x){
            console.log(masyvas3[i])
        }
    }
}
console.log(daugiauNei(15))

console.groupEnd('1')


// 1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.

console.groupCollapsed('2')
function daugiauNeiMaziau(x, y){
    for(i=0; i<masyvas3.length;i++){
        if(masyvas3[i] > x && masyvas3[i] < y){
            console.log(masyvas3[i])
        }
    }
}
console.log(daugiauNeiMaziau(15, 100))

console.groupEnd('2')

// 1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).

console.groupCollapsed('3')
function daugiauNeiLyginiai(x, y){
    for(i=0; i<masyvas3.length;i++){
        if(masyvas3[i] > x && masyvas3[i] < y){
            if(masyvas3[i] % 2 == 0){
                console.log(masyvas3[i] + ' yra lyginis')
            } else { console.log(masyvas3[i] + ' yra nelyginis') }
        }
    }
}
console.log(daugiauNeiLyginiai(15, 100))

console.groupEnd('3')


// 1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.

console.groupCollapsed('4')

function daugiauNei1(x){

    masyvas3.forEach(skaicius => {
        skaicius > x ? console.log(skaicius) : null
    })

}
console.log(daugiauNei1(50))


function daugiauNeiMaziau1(x, y){

    masyvas3.forEach(skaicius => {
        skaicius > x && skaicius < y ? console.log(skaicius) : null
    })

}
console.log(daugiauNeiMaziau1(50, 100))


function daugiauNeiMaziau1(x, y){

    masyvas3.forEach(skaicius => {
        skaicius > x && skaicius < y ? 
            (skaicius % 2 == 0 ? console.log(skaicius + ' Lyginis'): console.log(skaicius + ' nelyginis')):
        null
    })

}
console.log(daugiauNeiMaziau1(50, 100))

console.groupEnd('4')









console.groupEnd('Higher order functions')

// let masyvas3 = [1,5,9,8,1993,51,45,65,32,78,11]