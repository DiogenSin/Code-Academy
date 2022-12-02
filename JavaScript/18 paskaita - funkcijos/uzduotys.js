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
        return(nr1 ** (1/nr2))
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

function nuoPirmoIkiPaskutinio1(masyvas1){
    for(let element of array){
        console.log(element)
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

console.groupEnd('Naudojantis Slice`u')


//--------------------------------------------------------------------------------

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


//----------------------8 užduotis------------------------------
// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

console.groupCollapsed('8 Užduotis')

function vardoPavardesIlgis(vardas,pavarde) {
    let vardoIlgis = (vardas.length)
    let pavardesIlgis = (pavarde.length)
    console.log('Vardo '+ vardas + ' ilgis yra ' + vardoIlgis + ' raidės.')
    console.log('Vardo '+ pavarde + ' ilgis yra ' + pavardesIlgis + ' raidės.')
    let ilgis = ((vardas+pavarde).length);
    return console.log('Bendras ilgis: ' + ilgis)
    }


console.groupEnd('8 Užduotis')

//----------------------9 užduotis------------------------------
// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.
console.groupCollapsed('9 Užduotis')

let abecele = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function abecelesRaide(a){
    return(abecele[a])
}

console.groupEnd('9 Užduotis')
//----------------------10 užduotis------------------------------
// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

console.groupCollapsed('10 Užduotis')

function matematika(a , b, veiksmas){
    console.log('Atliktas veiksmas: ' + veiksmas)
    switch(veiksmas){
        case 'sudejimas':
            return a+b
        case 'atemimas':
            return a-b
        case 'dauginimas':
            return a*b
        case 'dalinimas':
            return a/b
    }
}

console.groupEnd('10 Užduotis')


//----------------------11 užduotis------------------------------
// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

console.groupCollapsed('11 Užduotis')

function randomKvadratu(){
    let randomSkaiciusKvadratu = ((Math.round(Math.random()*10))**2)
    return console.log('Random skaičius kvadratu: ' + randomSkaiciusKvadratu)
}

console.groupEnd('11 Užduotis')


//----------------------Extra 12 užduotis------------------------------
// Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. 
//(a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])

console.groupCollapsed('Extra 12 Užduotis')

let pirminisMasyvas=[1, 2, 3, 4, 5, 6, 7]
let antrinisMasyvas=['a', 'b', 'c']

do{
    pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.pop())
    console.log(pirminisMasyvas);
} while (antrinisMasyvas.length > 0);

console.groupEnd('Extra 12 Užduotis')


//-----------------Extra 12,5 Buzz Fizz Užduotis-----------------
/*
Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100.
  Fizz - jeigu skaičius yra 3 kartotinis/daliklis/dalijasi iš 3 be liekanos.
  Buzz - jeigu skaičius yra 5 kartotinis/daliklis/dalijasi iš 5 be liekanos.
  FizzBuzz - jeigu skaičius yra 3 ir 5 kartotinis/daliklis/dalijasi iš 3 ir 5 be liekanos.
  skaičius - kitais atvejais.
*/
console.groupCollapsed('Extra 12,5 Užduotis - Buzz Fizz')


let BuzzFizzMasyvas=[];
for(let i=0 ; i < 50 ; i++){
    BuzzFizzMasyvas.push(Math.floor(Math.random()*101))
}
console.log(BuzzFizzMasyvas)



console.groupCollapsed('Buzz testas')
for( i=0 ; i < BuzzFizzMasyvas.length ; i++){
    if (BuzzFizzMasyvas[i] % 3 === 0){
        console.log('3 kartotinis ' + BuzzFizzMasyvas[i])
}
}
console.groupEnd('Buzz testas')


console.groupCollapsed('Fizz testas')
for( i=0 ; i < BuzzFizzMasyvas.length ; i++){
    if (BuzzFizzMasyvas[i] % 5 === 0){
        console.log('5 kartotinis ' + BuzzFizzMasyvas[i])
}
}
console.groupEnd('Fizz testas')

console.groupCollapsed('Buzz Fizz testas')

for( i=0 ; i < BuzzFizzMasyvas.length ; i++){
    if (BuzzFizzMasyvas[i] % 5 === 0 && BuzzFizzMasyvas[i] % 3 === 0){
        console.log('Buzz Fizz passed ' + BuzzFizzMasyvas[i])
}
}

console.groupEnd('Buzz Fizz testas')

console.groupEnd('Extra 12,5 Užduotis')


//-----------------Extra 13 Buzz Fizz nuo iki Užduotis-----------------
/*
Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
*/

console.groupCollapsed('Extra 13 Užduotis - Buzz Fizz nuo iki')

let DidelisRandomMasyvas=[];
for(let i=0 ; i < 300 ; i++){
    DidelisRandomMasyvas.push(Math.floor(Math.random()*101))
}
console.log(DidelisRandomMasyvas)

function BuzzFizzNuoIki(a, b){
    let pirminisMasyvas1=[]
    for( i=a ; i < b ; i++){
    if (DidelisRandomMasyvas[i] % 5 === 0 && DidelisRandomMasyvas[i] % 3 === 0){
        console.log('Buzz Fizz passed ' + DidelisRandomMasyvas[i])
        pirminisMasyvas1.push(DidelisRandomMasyvas[i])
} 
}   return pirminisMasyvas1
}

console.groupEnd('Extra 13 Užduotis')


//-----------------Extra 14 Pirminis Skaičius Užduotis-----------------
/*
Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 0 iki 100.
  Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
  pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101)
*/
console.group('Extra 14 Užduotis - Pirminis skaičius')



// 'number' will hold a random number in
// the range [0, 99]
const number = Math.floor(Math.random() * 100);

// Declare 'flag' and initialize it to false.
let flag = false;

// Since we know that 1 is neither prime nor composite.
if (number == 1) {
   console.log(" 1 is neither prime nor composite");
}

// This is the condition we are concerned about
// i.e. any positive number greater than 1.
else if (number > 1) {
   // Iterate from 2 to number/2.
   for (let i = 2; i < number / 2; i++) {
      // Check if 'i' divides 'number' without
      // leaving the remainder
      if (number % i == 0) {
         // If yes then set a flag to true
         // and exit from the loop.
         flag = true;
         break;
      }
   }

   // If the flag is found true it means a divisor was found
   // during the iteration.
   if (flag == true) console.log(`${number} is not a prime number`);
   // Otherwise no divisor was found.
   else console.log(`${number} is a prime number`);
}

// If the number is less than 1 (either 0 or negative)
// then we can say it is not a prime number.
else {
   console.log(`${number} is not a prime number`);
}





console.groupEnd('Extra 14 Užduotis - Pirminis skaičius')