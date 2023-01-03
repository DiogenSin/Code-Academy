// 1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).
// findIndex((element, index, array) => { ... } )
console.groupCollapsed('indexOf, find, some, every practise')
console.groupCollapsed('1')

let masyvas = [46,874,6,1,2,3,4,5,6,7,8,9,4,5,6,16,5,8,79,91,3,54,6,49]

function iDaugiauNei(x){
    let rastas = (elemenet) => elemenet > x
    console.log(masyvas.findIndex(rastas))
}

console.log(iDaugiauNei(16))

console.groupEnd('1')

// 2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
// findIndex((element, index, array) => { ... } )

console.groupCollapsed('2')

function iMaziauuNei(x){
    let rastas = (elemenet) => elemenet < x
    console.log(masyvas.findIndex(rastas))
}

console.log(iMaziauuNei(16))

console.groupEnd('2')

// 3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
// findIndex((element, index, array) => { ... } )

let misrusMasyvas = [46,'Detras',874,6,'Dovydas',2,3,4,5,false,7,'Petras','Donas',9,4,5,6,5,8,79,true,3,54,6,49]

console.groupCollapsed('3')

let isMazosiosIndex = misrusMasyvas.findIndex(element => {
    if (typeof(element) == 'string'){
        
        if(element == element.toLowerCase()){
            return element
        } else {}
    }
})

console.log(isMazosiosIndex)

console.groupEnd('3')

// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
// findIndex((element, index, array) => { ... } )

console.groupCollapsed('4')

let isDidziosiosIndex = misrusMasyvas.findIndex(element => {
    if (typeof(element) == 'string'){
        if(element.charAt(0) == element.charAt(0).toUpperCase()){
            return element
        } else {}
    }
})

console.log(isDidziosiosIndex)

console.groupEnd('4')

// 5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// findIndex((element, index, array) => { ... } )

console.groupCollapsed('5 - nebaigtas')

console.groupEnd('5 - nebaigtas')

// 6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// findIndex((element, index, array) => { ... } )

console.group('6 - nebaigtas')

console.groupEnd('6 - nebaigtas')

// 7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).
// find((element, index, array) => { ... } )

console.groupCollapsed('7')

function elementDidesnisNei(x){
    let found = masyvas.find(element => element > x)
    console.log(found)
}
console.log(elementDidesnisNei(50))


console.groupEnd('7')

// 8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
// find((element, index, array) => { ... } )

console.groupCollapsed('8')

function elementMazesnisNei(x){
    let found = masyvas.find(element => element < x)
    console.log(found)
}
console.log(elementMazesnisNei(30))


console.groupEnd('8')

// 9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
// find((element, index, array) => { ... } )

console.groupCollapsed('9')

function elementIsMazosios(){
    let isMazosios = misrusMasyvas.find(element => {
        if(typeof(element) == 'string' ){
            if(element == element.toLowerCase()){
                return element
            } else {}
        }
    })
    console.log(isMazosios)
}
console.log(elementIsMazosios())


console.groupEnd('9')



// 10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
// find((element, index, array) => { ... } )

console.groupCollapsed('10')

function elementIsDidziosios(){
    let isDidziosios = misrusMasyvas.find(element => {
        if(typeof(element) == 'string' ){
            if(element.charAt(0) == element.charAt(0).toUpperCase()){
                return element
            } else {}
        }
    })
    console.log(isDidziosios)
}
console.log(elementIsDidziosios())


console.groupEnd('10')

// 11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// find((element, index, array) => { ... } )

console.groupCollapsed('11 - nebaigtas')

function elementIsDidziosios(b, a){
    let isDidziosios = misrusMasyvas.find(element => {
        if(element > b ){
            if(element < a ){
                return element
            } else {}
        }
    })
    console.log(isDidziosios)
}
console.log(elementIsDidziosios())


console.groupEnd('11 - nebaigtas')

// 12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// find((element, index, array) => { ... } )

console.groupCollapsed('12- nebaigtas')


console.groupEnd('12 - nebaigtas')

// 13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).
// some((element, index, array) => { ... } )

console.groupCollapsed('13')

function arYra(x){
    return masyvas.some(element => element > x )
}

console.log(arYra(25))

console.groupEnd('13')

// 14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
// some((element, index, array) => { ... } )

console.groupCollapsed('14')

function arYraMazesnis(x){
    return masyvas.some(element => element < x )
}

console.log(arYraMazesnis(25))

console.groupEnd('14')


// 15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
// some((element, index, array) => { ... } )

console.groupCollapsed('15')

function arYraIsMazosios(){
    return misrusMasyvas.some(element => {
        if(typeof(element) == 'string'){
            if(element == element.toLowerCase()){
                return element
            }
        }
    })
}

console.log(arYraIsMazosios())

console.groupEnd('15')

// 16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
// some((element, index, array) => { ... } )

console.groupCollapsed('16')

function arYraIsDidziosios(){
    return misrusMasyvas.some(element => {
        if(typeof(element) == 'string'){
            if(element.charAt(0) == element.charAt(0).toUpperCase()){
                return element
            }
        }
    })

}

console.log(arYraIsDidziosios())

console.groupEnd('16')

// 17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
// some((element, index, array) => { ... } )

console.groupCollapsed('17 - nebaigtas')

function arYraIsDidziosios(){
    return misrusMasyvas.some(element => {
        if(typeof(element) == 'string'){
            if(element.charAt(0) == element.charAt(0).toUpperCase()){
                return element
            }
        }
    })

}

console.log(arYraIsDidziosios())

console.groupEnd('17 - nebaigtas')

// 18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// some((element, index, array) => { ... } )

console.groupCollapsed('18 - nebaigtas')

function arYraIsDidziosios(){
    return misrusMasyvas.some(element => {
        if(typeof(element) == 'string'){
            if(element.charAt(0) == element.charAt(0).toUpperCase()){
                return element
            }
        }
    })

}

console.log(arYraIsDidziosios())

console.groupEnd('18 - nebaigtas')

// 19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
// every((element, index, array) => { ... } )

console.groupCollapsed('19 - nebaigtas')

console.groupEnd('19')

// let masyvas = [46,874,6,1,2,3,4,5,6,7,8,9,4,5,6,16,5,8,79,91,3,54,6,49]

console.groupEnd('indexOf, find, some, every practise')

// Suraskite butus, kurie turi nurodytą kambarių skaičių, yra nurodytame aukšte ir kurių kaina neviršija nurodytos kainos, ir juos išveskite į ekraną/konsolę/failą 'atsakymas.json'.


fetch('http://localhost:3000/posts')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        function pagalKaina(kainaIki, kambarSkaicius, aukstas){
            data.forEach(element => {
                if(element.kaina < kainaIki && element.kambSkaicius == kambarSkaicius){
               
                    let butoNr = element.nr
                    let laiptine = Math.ceil(((((20*27)-element.nr)/27)-20)*(-1))
                    let butoplotas = element.plotas
                    let kambariuSkaicius = element.kambSkaicius
                    let butokaina = element.kaina
                    let telNr = element.tel

                    console.log(laiptine)

                    console.log('Buto nr:' + butoNr)
                    console.log('Laiptinė: ' + laiptine)
                    console.log('Buto plotas: ' + butoplotas)
                    console.log('Kambarių skaičius: ' + kambariuSkaicius)
                    console.log('Kaina: ' + butokaina)
                    console.log('Tel. Nr.: ' + telNr)

                    // let filtruotiBustai = {
                    //     nr : butoNr,
                    //     plotas : butoplotas,
                    //     kambSkaicius : kambariuSkaicius,
                    //     kaina : butokaina,
                    //     tel : telNr
                    // }

                    // console.log(filtruotiBustai)

                    // fetch('http://localhost:3000/atsakymai', {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-type' : 'application/json'
                    //     },
                    //     body: JSON.stringify(filtruotiBustai)
                    // })
                    // .then (res => res.json())
                    // .then (data => console.log(data))
                
                }
            });
        }
        console.log(pagalKaina(40000, 2))
    })