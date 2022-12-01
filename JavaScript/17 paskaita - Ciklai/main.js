/*          Kintamieji          */
/*

    Objektas    Object  -   {raktas: reikšmė, raktas2: reikšmė2 ...}
    Masyvas     Array   -   


    Tiek objektas, tiek masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą reikšmių (gali būti skirtingų kintamųjų tipų).

*/
//------------Objektai----------------
{
    let vardas='Dovydas'
    let pavarde='Jakas'
    let amzius=26
    let vedes=false

    let vardas1='Jonas'
    let pavarde1='Jonaitis'
    let amzius1=27
    let vedes1=true

    let zmogus={
        vardas:'Dovydas',
        pavarde: 'Jakas',
        amzius:26,
        vedes:false,
        gyvenamojiVieta: {
            miestas:'Kaunas',
            salis:'Lietuva',
            zemynas:'Europa',
            planeta: 'Žemė'
        }
    }

    let zmogus1={
        vardas:'Jonas',
        pavarde:'Jonaitis',
        amzius:27,
        vedes:false
    }

    console.log(zmogus)
    console.log(zmogus.vardas)
    console.log(zmogus.pavarde)
    console.log(zmogus.amzius)
    console.log(zmogus.vedes)
    console.log(zmogus.gyvenamojiVieta.miestas)

    zmogus1.vardas="Petras" //Pakeičiamas vardas
    console.log(zmogus1.vardas)

    zmogus1.ugis=186
    console.log(zmogus1)
}

/*-------------------Masyvai------------------*/
{
    let menesis1='Sausis'
    let menesis2='Vasaris'
    let menesis3='Kovas'
    let menesis4='Balandis'
    let menesis5='Gegužė'
}
    //-----------
{
    let menesiai=['Sausis', 'Vasaris', 'Kovas', 'Balandis','Gegužė','Birželis','Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'];
    console.log(menesiai[10]);

    let masyvas=['Mėlyna',[1,2,'Nebūtinai skaičiai',3,4,5], 256, true];
    console.log(masyvas[1][2])
    
    masyvas[1]='Pakeistas'
    
    masyvas.push('Nauja reikšmė')
    console.log(masyvas)

    masyvas.unshift('Pridėtas pradžioje')
    console.log(masyvas)
    
    var masyvoMetoduBandymai=masyvas.pop() //išima informaciją iš masyvo galo
    console.log(masyvoMetoduBandymai)


    masyvoMetoduBandymai=masyvas.shift() // išima informacija iš masyvo pradžios
    console.log(masyvoMetoduBandymai)

    masyvoMetoduBandymai=masyvas.length // masyvo ilgio duomuo
    console.log(masyvoMetoduBandymai)

    console.log(masyvas)
    console.log(masyvas [0])
    console.log(masyvas[masyvas.length - 4])
    console.log(masyvas)
}

//------------Masyvai ir objektai-------------

{ console.groupCollapsed('Masyvai ir objektai')

    let mix1={
        vardas:'Dovydas',
        Amzius:26,
        Vedes:false,
        GyvenamojiVieta:{
            miestas: 'Kaunas',
            salis: 'Lietuva',
            zemynas: 'Europa'
        },
        pomegiai: ['Buriavimas', 'Skaitymas', 'Begiojimas', 'Šachmatai']
    }

    console.log(mix1.vardas+' turi '+mix1.pomegiai.length+' pomėgius.')
    
    console.log('Vienas iš pomėgių yra '+ mix1.pomegiai[3]+'.')

    console.log(Math.floor(Math.random()*mix1.pomegiai.length));

    let mix2=[
        {
            vardas:'Dovydas',
            amzius:26
        },
        {
            vardas:'Jonas',
            amzius:28
        },
        {
            vardas:'Petras',
            amzius:29
        },
        {
            vardas:'Mantas',
            amzius:30
        }
    ];

    console.log(mix2)


//---------------Užduotis 1 -----------------------

let rusis='Liūtas'
let vietove='Savana'
let maistas='Mėsaėdis'
let oda='Kailis'
let pagrindineVeikla='Miegas'

let kojuSkaicius=4
let rankuSkaicius=0
let sparnuSkaicius=0
let akiuSkaicius=2
let tantuSkaicius=32

let valgoMesa=true
let galiPlaukti=false
let galiSkristi=false

//--------------Užduotis 2------------------------
//Objektas
{
let gyvunasObjekte={
    rusis:'Liūtas',
    vietove:'Savana',
    maistas:'Mėsaėdis',
    oda:'Kailis',
    pagrindineVeikla:'Miegas',

    kojuSkaicius:4,
    rankuSkaicius:0,
    sparnuSkaicius:0,
    akiuSkaicius:2,
    tantuSkaicius:32,

    valgoMesa:true,
    galiPlaukti:false,
    galiSkristi:false
}
console.log(gyvunasObjekte)

//Masyvas objekte
let MasyvasObjekte={
    rusis:'Liūtas',
    vietove:'Savana',
    maistas:'Mėsaėdis',
    oda:'Kailis',
    pagrindineVeikla:'Miegas',

    kunoDaliuSkaiciai:[4,0,0,2,32],

    valgoMesa:true,
    galiPlaukti:false,
    galiSkristi:false
}
console.log(MasyvasObjekte)

//Objektas objekte
let ObjektasObjekte={
    rusis:'Liūtas',
    vietove:'Savana',
    maistas:'Mėsaėdis',
    oda:'Kailis',
    pagrindineVeikla:'Miegas',

    kunoDaliuSkaiciaiObjektu:{
        kojuSkaicius:4,
        rankuSkaicius:0,
        sparnuSkaicius:0,
        akiuSkaicius:2,
        tantuSkaicius:32
    },


    valgoMesa:true,
    galiPlaukti:false,
    galiSkristi:false
}
console.log(ObjektasObjekte)

//Masyvas
let gyvunasMasyve=['Liūtas','Savana','Mėsaėdis','Kailis','Miegas',4,0,0,2,32,true,false,false]
console.log(gyvunasMasyve)

//Masyvas masyve
let MasyvasMasyve=['Liūtas','Savana','Mėsaėdis','Kailis','Miegas',[4,0,0,2,32],true,false,false]
console.log(MasyvasMasyve)

//Objektas masyve
let ObjektasMasyve=['Liūtas','Savana','Mėsaėdis','Kailis','Miegas',gyvunasObjekte={
    rusis:'Liūtas',
    vietove:'Savana',
    maistas:'Mėsaėdis',
    oda:'Kailis',
    pagrindineVeikla:'Miegas',

    kojuSkaicius:4,
    rankuSkaicius:0,
    sparnuSkaicius:0,
    akiuSkaicius:2,
    tantuSkaicius:32,

    valgoMesa:true,
    galiPlaukti:false,
    galiSkristi:false
}, true,false,false]
console.log(ObjektasMasyve)
}
//--------------Užduotis 3------------------------
// 3) Į konsolę išvesti:
//   3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.
//   3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.

// {
// console.log(gyvunasObjekte.rusis + ' yra ' + maistas + ' ir jam svarbus ' + pagrindineVeikla)
// console.log('Jo gyvenamoji vieta yra '+ gyvunasMasyve[1] + ', o odą dengia ' + gyvunasMasyve[3])

// console.log(MasyvasObjekte.rusis + ' yra ' + MasyvasObjekte.vietove + ' karalius ir ' + MasyvasObjekte.maistas + ' turintis ' + MasyvasObjekte.kunoDaliuSkaiciai[0] + ' kojas ir ' + MasyvasObjekte.kunoDaliuSkaiciai[2] + ' sparnų.')

// console.log(ObjektasObjekte.rusis + ' turi ' + ObjektasObjekte.kunoDaliuSkaiciaiObjektu.sparnuSkaicius + ' sparnų, bet užtat ' + ObjektasObjekte.kunoDaliuSkaiciaiObjektu.tantuSkaicius + ' aštrius dantis.')

// console.log(ObjektasMasyve[0] + ' yra ' + ObjektasMasyve[2] + ' ir turi ' + ObjektasMasyve[5, 3] + '.')

// console.log(MasyvasMasyve[0] + ' turi ' + MasyvasMasyve[5][3] + ' akis ir ' + MasyvasMasyve[5][0] + ' kojas.')
// }
//----------------------Užduotis 4 -----------------------------------
/*
4) Palyginti ir į konsolę išvesti kokias nors:
  4.1) 2.1 konteinerio reikšmes.
  4.2) 2.2 konteinerio reikšmes.
  4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.
  4.4) 2.3-2.6 konteinerių reikšmes su kitų konteinerių reikšmėmis (3kartus skirtingas reikšmes).
*/
console.groupEnd('Masyvai ir objektai');
}
//------------------Sąlygos---------------------------
/*
    if else
    switch
    ternary (salyga ? jeigu tiesa : jeigu melas) (ypač sutrumpintas if else)
*/
//------Ternary-----------
{ console.groupCollapsed('Ternary')
if (10>5){
    console.log('Tiesa');
} else {
    console.log('Melas');
}

// {
// 10 < 5 ? console.log('Tiesa') : console.log('Melas');

// let number=prompt('Įveskite skaičų:')
// if(Number>20){
//     console.log('20-infinity')
// } else if (number <=0){
//     console.log('-infinity - 0')
// } else{
//     console.log('0-20')
// }

// number > 20 ? console.log('20-infinity') :
// number <=0 ? console.log('-infinity - 0'):
//             console.log('0-20')
// }


//-----------------Užduotis 5--------------------

/*

5) Parašyti if'ą, kuris tikrintų kokia tavo lytis (tikrinimas turi vykti iš object kintamojo (object kintamasis turi turėti bent 4 kintamuosiuos savo viduje)).
  Naudoti:
    1) let/const - kurti kintamuosius (objektą/us)
    optional) prompt - vartotojas priskirtų objektui reikšmes
    2) alert/console.log - grąžintų atsakymus.
    3) if/elseIf/else - kas be ko... (arrrrrrrrrba ternary)

*/
{
// let lytis=prompt('Įveskite savo lytį:')
// console.log(lytis)

if(lytis='Vyras'){
    console.log('Nu tikrai vyras!')
} else if (lytis='Moteris'){
    console.log('Tu moteris!')
} else {
    console.log('Jei ne vyras ir ne moteris, tai kas?!')
}

lytis='Vyras' ? console.log('Žiū, vyras!'):
lytis='Moteris' ? console.log('Moterytė'):
    console.log('Nei vyras nei moteris? :s')
}
console.groupEnd('Ternary')
}


//----------------------Ciklai------------------------
/*
    for
    while

    for in
    for of
    do while

    Ciklai - kartojami veiksmai iki sąlygos patenkinimo.

*/

//--------for-----------
{ console.groupCollapsed('for')

/*
for(interatorius, salyga(su iteratoriumi), iteratoriausKitimas){
    //veiksmai
}
*/
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

for(let i=1; i<10; i++){
    console.log(i+1)
}


let masyvas=[1,2,3,4,5,6,7,8,9,10,11,12]
for(let i=0; i<masyvas.length; null){
    console.log(masyvas.shift())
}

console.log(masyvas)


    console.groupEnd('for')
}
//------------while---------------

// Naudojama, kai nera žinoma kiek kartų reikės vykdyti ciklą.

{ console.groupCollapsed('while')


let Masyvas=[1,2,3,4,5,6,7,8,9]
console.log

while(Masyvas.length){
    console.log(Masyvas.shift())
}
console.log

console.groupEnd('while')
}
//-----------------Užduotis 6-----------------
//Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.


let skaiciuMasyvas=[];

for(let i=0 ; i < 50 ; i++){
    skaiciuMasyvas.push(Math.floor(Math.random()*101))
}

console.log(skaiciuMasyvas)

//-----------------Užduotis 7-----------------
//Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.


for(let i=0 ; i < skaiciuMasyvas.length ; i=i+3){
    console.log(skaiciuMasyvas[i]);
}

//-----------------Užduotis 8-----------------
//Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.
console.log(skaiciuMasyvas)
for (i=skaiciuMasyvas.length-1 ; i > 0; i=i-2){
    console.log(skaiciuMasyvas[i])
}

//-----------------Užduotis 9-----------------
//Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
console.log(skaiciuMasyvas)
for (i=0 ; i < skaiciuMasyvas.length; i++){
    if(skaiciuMasyvas[i]>54){
        console.log(skaiciuMasyvas[i]);
    }
}

//-----------------Užduotis 10-----------------
//Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)
console.log(skaiciuMasyvas)
for(let i=0 ; i < skaiciuMasyvas.length ; i++){ //Lyginiai skaičiai
    if(skaiciuMasyvas[i] % 2 == 0){
        console.log(skaiciuMasyvas[i]);
    }
}

for(let i=0 ; i < skaiciuMasyvas.length ; i++){ //Nelyginiai skaičiai
    if(skaiciuMasyvas[i] % 2 !== 0){
        console.log(skaiciuMasyvas[i]);
    }
}


