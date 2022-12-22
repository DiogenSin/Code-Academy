//            Async Functions

/*

1) async ir await
2) try, catch ir finally
3) Promise (resolve, reject)
4) then catch finally



*/

// Async function

// Rašant kodą sinchroniškai kartais prireikia palaukti atsakymų iš prieš tai buvusių funkcijų (jei reikia sulaukti kažkokios užklausos ar panašiai)

// Tam, kad sulauktume atsakymo reikia uždelsti kodą. Tam naudojamas setTimeout()

// Persistengiant su setTimeout ar kitais callback`ais. Sukuriame vadinamąjį callback hell. Ko pasekoje nukenčia kodo skaitomumas.

// Tam, kad kodą būtų galima rašyti asinchroniškai, naudojamas asinchroninis programavimas, funkcijas paverčiant asinchroniškomis naudojant async.

// Norėdami nurodyti, kad reikia uždelsti / palaukti - naudojamas prierašas await. Await yra naudojamas tik tai asinchroninių funkcijų viduje.

/*

async function name(){}
let fname = async () => {}

*/

/*

let fname = async () => {
    await someOtherFunction()
    await someMethod()
}

*/

//*********************Try, catch finally***********************

function resolveAfter25Seconds (x) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(x)
        }, 2000)
    });
}

// try catch finally
// try nenaudojamas vienas. Jį visuomet lydį arba catch arba finally arba abu kartu.
// Jeigu try bloke įvyksta error, tuomet vykdomas catch blokas. Galiausiai vykdomas finnaly blokas.
// Catch ir finally yra naudojanmi kontroliuoti error`us, o try vykdo funkciją.
// jei bloke vyksta error`as, pateikiama catch reikįmė, o jei ir joje, tuomet vykdomas finally kodas.
// net ir esant try, catch if finally error`ui, toliau einantis kodas bus vykdomas

async function f1(number) {
    try{
        const x = await resolveAfter25Seconds(number*5);
        console.log(x);
    } catch {
        console.log('Neteisinga funkcija')
    } finally {
        console.log('Baigėsi kodas')
    }
}



//*********************Promise**************************

/*

syntax

Promise ((resolve, reject)) => {
    if (good) {
        resolve('answer')
    } else {// bad reject ('error')
    }
}

*/

const delay = (time) => {
    return new Promise ((resolve, reject) => {
        if(typeof(time) !== 'number'){
            reject (new Error('delay parameter has to be a number'))
//            reject (() => 'delay parameter has to be a number') - tas pats kas viršuje
        } else {
            setTimeout(resolve, time)
        }
    })
}

let promisas = async () => {
    console.log('-----')
    await delay(5000)
    console.log('after some time')
}


console.log(promisas())
