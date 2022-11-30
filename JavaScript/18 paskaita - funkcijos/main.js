/*

    do while    - bent vieną kartą būtų paleistas ciklas
    for of      - suka cikl1 per objektą
    for in      - suka ciklą per masyvą

    array iteration methods

*/

//-------------Do while-------------

{ console.groupCollapsed('Do while')
    let i=1;
    //while(i>10){
    //   console.log('veiksmai);
    // i++; 
    // }
   do{
    console.log('veiksmai');
    i++;
}   while(i>10);

    console.groupEnd('Do while')
}


//----------For in-------------------
{  console.groupCollapsed('For in')
    var objektas={a:1, b:2, c:3, d:4, e:5};
    for (let raktas in objektas){
        console.log(raktas, objektas[raktas]);
    }
    console.groupEnd('For in')
}

//----------------For of-------------------

{ console.groupCollapsed('For of')

    let masyvas=[1,5,2,4,5,false,true,false,false,'Hello',5,6,7];
    // for(let i=0; i<masyvas.length; i++){
    //     console.log(masyvas[i])
    // }

    for(let kasNori of masyvas){
        typeof(kasNori) == "number" ? console.log(kasNori) : null;
        //if(typeof(kasNori) === 'number){
        //    console.log(kasNori)
        //}
    }



    console.groupEnd('For of')
}

//----------for each-------------
{ console.groupCollapsed('For each')
let masyvas=[1,5,2,4,5,false,true,false,false,'Hello',14,6,7];
masyvas.forEach(element => typeof(element) === 'number' ? console.log(element) : null);

    console.groupEnd('For each')
}

//--------------------------------Funkcijos-------------------------------------------

{
console.groupCollapsed('Funckijos')
/*
    Funkcija                - veiksmų seka, kai į ją yra kreipiamasi.
    Parametrai/argumentai   - duomenys perduodami funkcijai jos iškvietimo metu, su kuriais funkcijos viduje bus         atliekami kažkokie veiksmai.
    Return                  - funkcija gali kažką grąžinti. Funkcijos veiksmai vyksta iki tol, kol pasiekiamas return`as.

*/


function hello(vardas){
    console.log('Hello ' + vardas)
}

// setTimeout(hello, 5000)

function sudetis(nr1, nr2){ // sudeda nurodytus skaitinius elementus
    if(typeof(nr1) === "number" && typeof(nr2) === "number"){
        let atsakymas=nr1+nr2
        return atsakymas + ' Atsakymas'
    } else {
        return '404'
    }
    console.log('not happening')
}


function kiekStringuMasyve(array){ //suskaičiuoja kiek yra žodinių elementų masyve
    kiek=0
    for(let i=0; i<array.length ; i++){
        if(typeof(array[i]) === 'string'){
            kiek++;
        }
    }
    return kiek
}


console.groupEnd('Funkcijos')

}

//-----------------------------Masyvų metodai--------------------------
console.groupCollapsed('Masyvų metodai')
/*

    pop()       - išima iš masyvo galo, modifikuoja
    shift()     - išima iš masyvo pradžios, modifikuoja
    push()      - prideda prie masyvo galo, modifikuoja
    unshift()   - prideda prie masyvo pradžios, modifikuoja

    reverse()   - apsuka masyvą, modifikuoja
    slice(#1,#2)- paima masyvo elementus nuo pirmojo (#1) iki antrojo (#2) nurodyto skaičiaus. Nemodifikuoja
    splice(#1, #2, #3, ...) - nuo #1 trina #2 kiekį lementų ir #1 vietoje įterpia #3, #4, #5, ... elementus. Modifikuoja
    arr1.concat(arr2, arr3, arr4, ...) - prie nurodyto masyvo (#1) prijungia kitus pasyvus (#2, #3, ...). Nemodifikuoja
    sort()      - išrikiuoja masyvą abecelės tvarka. Skaičių rikiavimo problema sprendžiama su array.sort(function(a, b){return a-b}). Žodžių rikiavimo problema sprendžiama su array.sort(function(a, b){return a.localeCompare(b)}). 

*/
console.group('Slice')
let masyvas2=[1,2,3,4,5,6,7,8,9]
let gabaliukas = masyvas2.slice(1, 8)
console.groupEnd('Slice')

console.group('Splice')
let masyvas3=[1,2,3,4,5,6,7,8,9];
let isdarkytas = masyvas3.splice(3, 1);
console.groupEnd('Splice')

console.group('Concat')
let sujungtas = masyvas2.concat(['ūabas', 'aš', 'ęsu', 'naujas', 'įasyvas'], [false, 0, 'Undefined', 'Null'], 150265, 45841)
console.groupEnd('Concat')

console.group('Sort')
// sujungtas.sort(function(a,b){return a-b})
let zodziuMasyvas=['ūabas', 'aš', 'ęsu', 'naujas', 'įasyvas']

zodziuMasyvas.sort(function(a,b){return a.localeCompare(b)})
console.groupEnd('Sort')

console.groupEnd('Masyvų metodai')