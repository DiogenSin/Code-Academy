console.log("Labas rytas JS`e");

//      Kintamieji

/*

string          - žodinis kintamasis ra6omas kabutėse ('', "", ``)
number          - skaičius
boolean/bool    - loginis kintamasis (true/false)

null            - tuščias (kai reikšmės iš kintamojo atimamos)
undefined       - neapibrėžtas (kai reikšmė nebuvo nurodyta)
NaN             not a number

array           - masyvas
object          - objektas

-----------------------------------------------------------------------

var/let/const   - kintamųjų ribų nurodymai. Naudojami kuriant reikšmes. var yra globalus, let leidžia pakeisti reikšmes, o const yra nuolatinė ir nekintama reikšmė.

nameOrSmth      - kintamojo vardas
value           - kintamojo reikšmė

*/

let manoVardas0 = "Rokas"; // Tekstinė vertė rašoma kabutėse
let manoVardas1 = 'Rokas';
let manoVardas2 = `Rokas`;

let manoAmzius0 = 26;
let manoAmzius1 = 26.2; // Skaičiai su kableliais pakeičiami kableliais
let manoAmzius2 = 26.2+0.2; // Skaičius gali būti ir matematinė išraiška

let vedesIrTuriVaiku = false; // false arba true
let vedesIrTuriVaiku0 = true;

//----------------------------------------------------------------------------------

let string1 = "Dovydas"
let string2 = "Antanas"
let string3 = "Mantas"
let string4 = "Juozas"
let string5 = "Karolis"

let number1 = 29
let number2 = 28.3
let number3 = 45.5
let number4 = 68
let number5 = 16.25

let boolean1 = false
let boolean2 = true

//----------------Operatoriai------------------------------------------

/*
    Aritmetiniai operatoriai

    +   Sudėtis
    -   Atimtis
    *   Daugyba
    /   Dalyba
    **  kėlimas laipsniu/šaktnies traukimas
    %   likutis/liekana


    Priskyrimo (aaignment) operatoriai
    
    =   lygybė

    Trumpinių (shortcut) operatoriai
    
    ++  didėjimas           (kažkas = kažkas +1)
    -- mažėjimas            (kažkas = kažkas -1)
    += didinimas            (kažkas = kažkas + kažkiek)
    -= mažinimas            (kažkas = kažkas - kažkiek)
    *= daugyba              (kažkas = kažkas * kažkiek)
    /= dalyba               (kažkas = kažkas / kažkiek)
    %= liekanos radimas     (kažkas = kažkas % kažkiek)
    **= laipsnio kėlimas    (kažkas = kažkas ** kažkiek)

    Palyginamieji (comparison) operatoriai

    ==      ar duomenys yra lygūs (vienodi)
    !=      ar duomenys nėra lygūs (vienodi)
    ===     ar duomenys ir jų tipas yra lygūs.
    !==     ar duomenys ir jų tipas nėra lygūs.
    >       daugiau nei
    <       mažiau nei
    >=      daugiau arba lygų negu kažkas
    <=      mažiau arba lygu negu kažkas

    Loginiai (logical) operatoriai

    !       "ne" - apverčia reikšmę (NOT)
    &&      ir                      (AND)
    ||      arba                    (OR)

    Tipo (type) operatoriai

    typeof      tikrina tipą
    instanceof  tikrina 


*/

//-------------------TASK 1------------------------------------------------

{
// Matematiniai operatoriai naudojant su boolean kintamaisiais jie virsta į 0 arba 1

// Vardas + X operatorius
console.log('string1+number1', string1+number1)
console.log('string2+boolean1', string2+boolean1)

// Amžius + X operatorius

console.log('number1+string3', number1+string3)
console.log('number4+boolean2', number4+boolean2)

// Boolean + X operatorius

console.log('boolean1+string4', boolean1+string4)
console.log('boolean1+number3', boolean1+number3)

// Vardas - X operatorius
console.log('string1-number1', string1-number1)
console.log('string2-boolean1', string2-boolean1)

// Amžius - X operatorius

console.log('number1-string3', number1-string3)
console.log('number4-boolean2', number4-boolean2)

// Boolean - X operatorius

console.log('boolean1-string4', boolean1-string4)
console.log('boolean1-number3', boolean1-number3)

// Vardas * X operatorius
console.log('string1*number1', string1*number1)
console.log('string2*boolean1', string2*boolean1)

// Amžius * X operatorius

console.log('number1*string3', number1*string3)
console.log('number4*boolean2', number4*boolean2)

// Boolean * X operatorius

console.log('boolean1*string4', boolean1*string4)
console.log('boolean1*number3', boolean1*number3)

// Vardas / X operatorius
console.log('string1/number1', string1/number1)
console.log('string2/boolean1', string2/boolean1)

// Amžius / X operatorius

console.log('number1/string3', number1/string3)
console.log('number4/boolean2', number4/boolean2)

// Boolean / X operatorius

console.log('boolean1/string4', boolean1/string4)
console.log('boolean1/number3', boolean1/number3)

// Vardas ** X operatorius
console.log('string1**number1', string1**number1)
console.log('string2**boolean1', string2**boolean1)

// Amžius ** X operatorius

console.log('number1**string3', number1**string3)
console.log('number4**boolean2', number4**boolean2)

// Boolean ** X operatorius

console.log('boolean1**string4', boolean1**string4)
console.log('boolean1**number3', boolean1**number3)

// Vardas % X operatorius
console.log('string1%number1', string1%number1)
console.log('string2%boolean1', string2%boolean1)

// Amžius % X operatorius

console.log('number1%string3', number1%string3)
console.log('number4%boolean2', number4%boolean2)

// Boolean % X operatorius

console.log('boolean1%string4', boolean1%string4)
console.log('boolean1%number3', boolean1%number3)

// Vardas ++ X operatorius
// console.log('string1++number1', string1++number1)
// console.log('string2++boolean1', string2++boolean1)

// Amžius ++ X operatorius

// console.log('number1++string3', number1++string3)
// console.log('number4++boolean2', number4++boolean2)

// Boolean ++ X operatorius

// console.log('boolean1++string4', boolean1++string4)
// console.log('boolean1++number3', boolean1++number3)

// Vardas -- X operatorius
// console.log('string1--number1', string1--number1)
console.log('string2---boolean1', string2---boolean1)

// Amžius -- X operatorius

// console.log('number1--string3', number1--string3)
// console.log('number4--boolean2', number4--boolean2)

// Boolean -- X operatorius

// console.log('boolean1--string4', boolean1--string4)
// console.log('boolean1--number3', boolean1--number3)
}

//-------------------TASK 2------------------------------------------------
//Panaudoti aritmeninius trumpinius su skaičių kintamaisiais

console.log('didėjimas ++', ++number1)
console.log('mažėjimas --', --number1)
console.log('didinimas +=', number1+=number2)
console.log('mažinimas -=', number1-=number3)
console.log('daugyba *=', number1*=number4)
console.log('dalyba /=', number1/=number5)
console.log('liekana %=', number1%=number1)
console.log('laipsnio kėlimas **=', number1**=number2)

//--------------------TASK3----------------------------------------------
//Panaudoti palyginamuosius operatorius su skaičių kintamaisiais
{
console.log('ar duomenys lygūs? ==', number1==number2)
console.log('ar duomenys ir jų tipas lygus? ===', number1===number1)
console.log('ar daugiau? >', number1>number4)
console.log('ar mažiau? <', number1<number5)
console.log('ar mažiau arba lygu? <=', number1<=number1)
console.log('ar daugiau arba lygu? >=', number1>=number2)
}

//------------------Sąlygos------------------------------------
/*
if          pradinė sąlyga

else if     papildoma sąlyga, kuri tikrinama jeigu aukščiau esanti(-čios) sąlyga(-os) grąžino false

else        galutinė sąlyga, kuri vykdoma, jei aukščiau esančios sąlygos yra false.



*/

let amzius=150
if(amzius >=18){
    console.log ('Esi pilnametis.');
    if(amzius > 90 && amzius < 130){
        console.log('Esi pensininkas'); //Sąlygos viduje galima pridėti ir daugiau sąlygų.
    } else if (amzius < 90){
        console.log('Esi darbingo amžiaus pilietis');
    } else {
        console.log('Kaip tu dar gyvas?');
    }
}
else if(amzius <=7) {
    console.log ('Esi iki mokyklino amžiaus');
}
else{
    console.log('Esi mokyklinukas')
}

//-----------------------TASK 5---------------------------------------
{
let vairuotojoTeises=true
let turiAutomobili=true
let yraBlaivas=true

if(vairuotojoTeises===true){
    console.log('Vairuotojo teises turi');
    if(turiAutomobili===true && yraBlaivas===true){
        console.log('Esi blaivas ir gali vairuoti.');
    }   else if(yraBlaivas===false){
        console.log('Nesi blaivas, nėra ko vairuoti')
    }   else{
        console.log('Neturi automobilio, kurį galėtum vairuoti.');
    }
}
else {
    console.log('Vairuotojo teisių neturi');
}
}

//----------------AND ir OR--------------------------------------------
{
if(5=='5' && typeof('5') == typeof(5)){ // && (AND) reikalauja, kad abi sąlygos būtų true
    console.log('Lygu');
} else {
    console.log('Nelygu');
}

if(true || false){ // || (OR) reikalauja, kad bent viena sąlyga būtų true
    console.log('Lygu');
} else {
    console.log('Nelygu');
}
}

//---------------------------Truthy ir Falsy (sąlygų trumpiniai)------------------

/*

    truthy      true    | not 0 number  | 'string'          | [] | {} | () => {}
    falsy       false   | 0             | '' (empty string) 

*/

{
{
if(000){
    console.log('Truthy');
} else {
    console.log('falsy');
}
}

let kintamasisKazkoks = '';

if(kintamasisKazkoks){
    console.log('Įrašė');
} else {
    console.log('Neįrašė');
}
}

/*-------------------------------- Switch----------------------*/

let megstamiausiaSaplva = 'mėlyna'

switch(megstamiausiaSaplva){
    case 'geltona':
    case 'raudona':
        console.log('Tu mėgsti ryškią spalvą.');
        break;
    case 'mėlyna':
    case 'ruda':
        console.log('Tu mėgsti tamsias spalvas');
        break;
}

// let miestas= prompt('Iš kurio miesto esate?');
// switch(miestas){
//     case 'Kaunas':
//         console.log ('Kaunas Lietuvos širdis, jei Vilniečiai neužpyks.')
//         break;
//     case 'Vilnius':
//         console.log('Vilnius yra Lietuvos sostinė, shshhh Kauniečiai su savo laikinąja.')
//         break;
//     case 'Klaipėda':
//         console.log('Vienintelis Lietuvos miestas su normaliu uostu.')
//         break;
//     default:
//         window.alert('Nėra tokio miesto!')
// }

//--------------------Užduotys--------------------
//--------------------8--------------------------
// Puslapis turi pasisveikinti, paklausti iš kokio miesto ir pateikti kažkokią žinutę apie miestą
// Naudoti let/const, prompt, alert/console.log, switch



{
window.alert('Sveikas!')
let uzduotiesMiestas= prompt('Iš kokio miesto esi?!')
switch(uzduotiesMiestas){
    case 'Kaunas':
        window.alert('Kaunas yra nuostabus miestas!')
        break;
    case 'Vilnius':
        window.alert('Kodėl Vilnių vadina Portugalija?')
        break;
    case 'Tauragė':
        window.alert('Tauragė - plaktukų miestas')
        break;
    default:
        window.alert('Tokio miesto net nėra!')
}
}




//--------------------9--------------------------
// Sukurti switch`ą, kuris tikrintų koks dabar mėnuo ir pateiktų metų laiką
// Naudoti let/const, prompt, alert/console.log, switch



const date = new Date();
const year = date.getFullYear();
const month= date.getMonth()+1;
console.log(month);
let sezonas;
switch (month){
    case 01:
        console.log('Žiema');
        break;
    case 02:
        console.log('Žiema');
        break;
    case 12:
        console.log('Žiema')
        break;
    case 03:
        console.log('Pavasaris');
        break;
    case 04:
        console.log('Pavasaris');
        break;
    case 05:
        console.log('Pavasaris');
        break;
    case 06:
        console.log('Vasara');
        break;
    case 07:
        console.log('Vasara');
        break;
    case 08:
        console.log('Vasara');
        break;
    case 09:
        console.log('Ruduo');
        break;
    case 10:
        console.log('Ruduo');
        sezonas='Ruduo'
        break;
    case 11:
        console.log('Ruduo');
        sezonas='Ruduo'
        break;
}


console.log (year)
console.log(month)
window.alert('Sveikas! Džiaukis ' + year + ' metais! Nebedaug liko :(');
window.alert('Be to, dabar yra ' + month + ' mėnuo, o tai reiškia, kad dabar yra ' + sezonas + '!')



//-------------------10-------------------------
// Padaryti taip, kad puslapis pasisveikintų naudodamas tinkamą vardo galūnę
// Naudoti let/const, prompt, alert/console.log, switch, endsWith + slice + concat ir koreguoti vardą