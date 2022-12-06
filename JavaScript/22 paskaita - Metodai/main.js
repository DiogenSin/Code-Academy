//------------------------Metodai-------------------------------

//-------------------Math / Number-----------------------
/*

Kreipimasis į number metodus prasideda žodžiu "Math" arba number už jo dedant tašką, o už jo - metodo pavadinimą ir skliaustelius su galimais parametrais.

Pavyzdžiui: Math.random()           - be parametro (grąžintų random skaičių)
            45,9841234.toFixed(3)   - su parametru (grąžintų skaičių su trimis skaitmenimis po kablelio)

Math - atlieka paskaičiavimus, pateikia duomenis, pakeitimus. (daugiau variacijos)
number - atlieka pakeitimus, konvertavimus.

*/
console.groupCollapsed('number / Math')

let number = 50.143451
console.log(number.toFixed(4)) // apvalina iki keturių skaičių po kablelio
console.log(Math.floor(number)) // apvalina skaičių į mažesnę pusę
console.log(Math.random()*number) // generuoja random skaičius
console.log(number.toString()) // paverčia į string`ą
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Math.pow(5, 2))
console.log(Math.sqrt(25)) // šaknis
console.log((Math.random()*number).toFixed(2))
console.log(Number(number.toFixed(4)*1))

console.groupEnd('number / Math')


//-------------------String-----------------------
/*
String metodai yra funkcijos, kurios atlieka veiksmus susijusius su duotomis žodinėmis reikšmėmis. Kai kurie metodai reikalauja parametrų, kai kurie - ne.
*/

console.groupCollapsed('String')

let zodis = 'Labas! Mano vardas Dovydas. Aš mėgstu: bėgioti. būriuoti. skaityti. žaisti šachmatais. Mano tel. nr.: +37068901399                                 g'
console.log("Split(''): " + zodis.split('')) // sukarpo žodžius į gabaliukus pagal nurodytą "skirtuką"
console.log("[0]: " + zodis[0]) // parenka nurodytą informaciją(raidę) string`e
console.log("charAt: " + zodis.charAt(0)) // parenka kažkelinta reikšmė string`e
console.log("length: " + zodis.length) // parenka string`o ilgį
console.log("charAt(zodis.length-1): " + zodis.charAt(zodis.length-1)) // parenka kažkelintą (-1) žodį nuo galo
console.log("trim(): " + zodis.trim())
console.log("includes('s'): " + zodis.includes('x')) // patikrina ar string`e yra nurodyta reikšmė
console.log(zodis.replaceAll(/[0-9]/g, 'x')) // pakeičia vieną infromaciją į kitą. naudojantis regex galima pasirinkti pakeistinos infromacijos lauką (nuo 0 iki 9)
console.log('Concat: ' + zodis.concat(' ir ', ' labas ', zodis)) // prie vieno masyvo prijungia kitą įterpus norimą reikšmę
console.log('toUppercase: ' + zodis.toUpperCase) // pirmosios žodžių raidės iš didžiosios

console.groupEnd('String')

//-------------------Regex-----------------------
/*
  Regular expression (reguliariosios išraiškos) - yra nurodytos simbolių sekos, kurias turi atitikti vartotojo vedama informacija.
  \d - digit (skaičius nuo 0 iki 9)
  [0-9] - digit (skaičius nuo 0 iki 9)
  [a-z] - char (raidės nuo a iki z)
  [A-Z] - char (raidės nuo A iki Z)
  {sk} - kiek sykių kartoti prieš tai nurodytą info
  \s - whiteSpace (tarpas)
  ^ - sekos pradžia
  $ - sekos pabaiga
  .....
*/

console.group('Regex')

//  (+370) 644 44444
let phoneRegex = new RegExp('^\(\+[0-9]{3}\)\s[0-9]{3}\s[0-9]{5}$');
                         // '^\(\+\d{3}\)\s\d{3}\s\d{5}$'
        // telefono numeris (+666) 666 66666

console.groupEnd('Regex')

