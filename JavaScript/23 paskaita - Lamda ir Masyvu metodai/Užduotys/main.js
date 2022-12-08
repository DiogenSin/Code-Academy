//----------------1----------------
console.groupCollapsed('1')

console.log('Funckijos pavadinimas: labas')

let labas = () => console.log('Labas!')

console.groupEnd('1')

//----------------2----------------
console.groupCollapsed('2')

console.log('Funckijos pavadinimas: suma')

let suma = (skaicius1, skaicius2) => skaicius1+skaicius2

console.groupEnd('2')

//----------------3----------------
console.groupCollapsed('3')

console.log('Funckijos pavadinimas: tekstoIlgis')

let tekstoIlgis = (tekstas) => tekstas.length

console.groupEnd('3')

//----------------4----------------
console.groupCollapsed('4')

console.log('Funckijos pavadinimas: pirmojiRaide')

let pirmojiRaide = (tekstas) => tekstas.charAt(0)

console.groupEnd('4')

//----------------5----------------
console.groupCollapsed('5')

console.log('Funckijos pavadinimas: paskutineRaide')

let paskutineRaide = (tekstas) => tekstas.charAt(tekstas.length-1)

console.groupEnd('5')

//----------------6----------------
console.groupCollapsed('6')

console.log('Funckijos pavadinimas: kvadratas')

let kvadratas = (skaicius) => Math.pow(skaicius, 2)

console.groupEnd('6')

//----------------7----------------
console.groupCollapsed('7+')

console.log('Funckijos pavadinimas: masyvoKintamieji')

let masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let masyvas2 = [11, 22, 33, 44, 55, 66, 77, 88, 99]

let masyvoKintamieji = (masyvas) => {for ( i = 0 ; i < masyvas.length ; i++){ console.log(masyvas[i])}}

console.groupEnd('7+')

//----------------8----------------
console.groupCollapsed('8+')

console.log('Funckijos pavadinimas: masyvoKintamieji2')

let masyvoKintamieji2 = (masyvas) => {for ( i = 0 ; i < masyvas.length ; i = i + 2 ){ console.log(masyvas[i])}}

console.groupEnd('8+')

//----------------9++----------------
console.groupCollapsed('9++')

console.log('Funckijos pavadinimas: masyvoKintamiejiN')

let masyvoKintamiejiN = (masyvas, N) => {for ( i = 0 ; i < masyvas.length ; i = i + N ){ console.log(masyvas[i])}}

console.groupEnd('9++')

//----------------10+----------------
console.groupCollapsed('10+')

console.log('Funckijos pavadinimas: masyvoNelyginiai')

let masyvoNelyginiai = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(masyvas[i] % 2 !== 0){
        console.log(masyvas[i])
        } else {}
    }

}

console.groupEnd('10+')

//----------------11+----------------
console.groupCollapsed('11+')

console.log('Funckijos pavadinimas: masyvoLyginiai')

let masyvoLyginiai = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(masyvas[i] % 2 == 0){
        console.log(masyvas[i])
        } else {}
    }

}

console.groupEnd('11+')

//----------------12+----------------
console.groupCollapsed('12+')

console.log('Funckijos pavadinimas: ilgiVardai')

let varduMasyvas = ['Dovydas', 'Ona', 'Rūta', 'ana', 'Ūtė', 'kasparas', 'Apolonijus', 'baltrazamas']

let ilgiVardai = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(masyvas[i].length > 3){
        console.log(masyvas[i])
        } else {}
    }
}

console.groupEnd('12+')

//----------------13++----------------
console.groupCollapsed('13++')

console.log('Funckijos pavadinimas: pirmosiosVarduRaides')

let pirmosiosVarduRaides = (masyvas, raide) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(masyvas[i].includes(raide)){
        console.log(masyvas[i])
        } else {}
    }
}

console.groupEnd('13++')

//----------------14+++----------------
console.groupCollapsed('14+++')

console.log('Funckijos pavadinimas: ipatingiVardai')

let ipatingiVardai = (masyvas, ilgesnisNei, trumpesnisNei) => {
    for ( i = 0 ; i < masyvas.length ; i = i + 1 )    
    { if(masyvas[i].length > ilgesnisNei && masyvas[i].length < trumpesnisNei && masyvas[i].charAt(0) == masyvas[i].charAt(0).toLowerCase()){
        console.log(masyvas[i])
        } else {}
    }
}

console.groupEnd('14+++')

//----------------15+----------------
console.groupCollapsed('15+')

console.log('Funckijos pavadinimas: stringuMasyvas')

let misrusMasyvas = ['Dovydas', 1, 'Rūta', 2, 33333,12,13,15,14,19,18,15,16, 'kasparas', 20, 15, 7, 44444, 'baltrazamas']

let suformuotasStringuMasyvas = []

let stringuMasyvas = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'string'){
        suformuotasStringuMasyvas.push(masyvas[i])
        } else {}
    }   console.log(suformuotasStringuMasyvas)
}

console.groupEnd('15+')

//----------------16++----------------
console.groupCollapsed('16++')

console.log('Funckijos pavadinimas: ilgesniStringai')

let ilgesniuStringuMasyvas = []

let ilgesniStringai = (masyvas, daugiauNei) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'string' && masyvas[i].length > daugiauNei ){
        ilgesniuStringuMasyvas.push(masyvas[i])
        } else {}
    }   console.log(ilgesniuStringuMasyvas)
}

console.groupEnd('16++')

//----------------17++----------------
console.groupCollapsed('17++')

console.log('Funckijos pavadinimas: stringaiSuMazaja')

let stringaiIsMazosios = []

let stringaiSuMazaja = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'string' && masyvas[i].charAt(0) == masyvas[i].charAt(0).toUpperCase() ){
        stringaiIsMazosios.push(masyvas[i])
        } else {}
    }   console.log(stringaiIsMazosios)
}

console.groupEnd('17++')

//----------------18+----------------
console.groupCollapsed('18+')

console.log('Funckijos pavadinimas: grazintiNumberKintamuosius')

let numberKintamieji = []

let grazintiNumberKintamuosius = (masyvas) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'number'){
        numberKintamieji.push(masyvas[i])
        } else {}
    }   console.log(numberKintamieji)
}

console.groupEnd('18+')

//----------------19+----------------
console.groupCollapsed('19+')

console.log('Funckijos pavadinimas: grazintiDidesniusNumberKintamuosius')

let didesniNumberKintamieji = []

let grazintiDidesniusNumberKintamuosius = (masyvas, daugiauNei) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'number' && masyvas[i] > daugiauNei){
        didesniNumberKintamieji.push(masyvas[i])
        } else {}
    }   console.log(didesniNumberKintamieji)
}

console.groupEnd('19+')

//----------------20+----------------
console.groupCollapsed('20+')

console.log('Funckijos pavadinimas: grazintiMazesniNumberKintamuosius')

let mazesniNumberKintamieji = []

let grazintiMazesniNumberKintamuosius = (masyvas, maziauNei) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'number' && masyvas[i] < maziauNei){
        mazesniNumberKintamieji.push(masyvas[i])
        } else {}
    }   console.log(mazesniNumberKintamieji)
}

console.groupEnd('20+')

//----------------21++----------------
console.groupCollapsed('21++')

console.log('Funckijos pavadinimas: grazintiMazesniNumberKintamuosius')

let tarpiniaiNumberKintamieji = []

let grazintiTarpiniusNumberKintamuosius = (masyvas, daugiauNei, maziauNei) => {
    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'number' && masyvas[i] > daugiauNei && masyvas[i] < maziauNei){
        tarpiniaiNumberKintamieji.push(masyvas[i])
        } else {}
    }   console.log(tarpiniaiNumberKintamieji)
}

console.groupEnd('21++')

//----------------22+++----------------
console.groupCollapsed('22+++')

console.log('Funckijos pavadinimas: grazintiMazesniNumberKintamuosius')

let lyginiaiNelyginiai = []

let grazintiLyginiusNelyginius = (masyvas, daugiauNei, maziauNei, lyginis) => {

    for ( i = 0 ; i < masyvas.length ; i++ )    
    { if(typeof(masyvas[i]) === 'number' && masyvas[i] > daugiauNei && masyvas[i] < maziauNei){
        
        if (lyginis == 'lyginis' && masyvas[i] % 2 == 0){
            lyginiaiNelyginiai.push(masyvas[i] + ' lyginis')}
        else {lyginiaiNelyginiai.push(masyvas[i] + ' nelyginis')}

        } else {}
    }   console.log(lyginiaiNelyginiai)
}

console.groupEnd('22+++')

