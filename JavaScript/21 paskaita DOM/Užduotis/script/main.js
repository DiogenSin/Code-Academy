//--------------------2 užduotis----------------------------
// Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
// JS'u sekcijoje sukurkite antraštę.
// JS'u sekciją papildykite paragrafu su tekstu.
// JS'u sekciją papildykite paveikslėliu.
// JS'u sekciją stilizuokite priskirdami klases.
console.groupCollapsed('2 užduotis')

console.log(data) // pasitikrinama kaip atrodo data.js duomenys konsolėje

let pirmasPaveikslas = document.querySelector('#uzduotis2') // parenkama atitinkama vieta HTML`e

pirmasPaveikslas.innerHTML += `
    <div class='paveikslas1'>
        <h1>${data[0].title}</h1>
        <p>${data[0].paragraph}</p>
        <img src='${data[0].image}'>
    </div>
`
console.groupEnd('2 užduotis')
//--------------------3 užduotis----------------------------
// Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
// JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// JS'u sekciją stilizuokite priskirdami klases.
console.groupCollapsed('3 užduotis')

let antriPaveikslai = document.querySelector('#uzduotis3') // pasirenkama vieta HTML`e

//↓↓↓ prie aukščiau pasirinktos vietos HTML`e pridedami žemiau esantys elementai (div konteineris ir jame esantys h1 ir dar vienas div`as būsimiems paveikslams)
antriPaveikslai.innerHTML += `
  <div class="paveikslai2">
  <h1>${data[1].title}</h1>
    <div class="paveiksluKonteineris"></div>
  </div>
`;

let paveiksluKonteineris = antriPaveikslai.querySelector('.paveiksluKonteineris'); // Sukuriamas paveikslėlių konteineris, kuris vėliau naudojamas aukščiau esančiame sukurtame div`e
for(let i = 0; i < data[1].images.length; i++){
  paveiksluKonteineris.innerHTML += `<img src="${data[1].images[i]}"></img>`; 
}

console.groupEnd('3 užduotis')
//--------------------4 užduotis----------------------------
// Sutvarkykite data[2] viduje esančius duomenis.
// JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// JS'u sekciją stilizuokite priskirdami klases.
console.groupCollapsed('4 užduotis')

let tretiPaveikslai = document.querySelector('#uzduotis4') // pasirenkama vieta HTML`e

//↓↓↓ prie aukščiau pasirinktos vietos HTML`e pridedami žemiau esantys elementai (div konteineris ir jame esantys h1 ir dar vienas div`as būsimiems paveikslams)
tretiPaveikslai.innerHTML += `
  <div class="paveikslai2">
  <h1>${data[2].title}</h1>
    <div class="paveiksluKonteineris"></div>
  </div>

`;

let paveiksluKonteineris1 = tretiPaveikslai.querySelector('.paveiksluKonteineris'); // Sukuriamas paveikslėlių konteineris, kuris vėliau naudojamas aukščiau esančiame sukurtame div`e
for(let i = 0; i < data[2].images.length; i++){
  paveiksluKonteineris1.innerHTML += `
    <div class="paveikslasIrPavadinimas">
        <div class="imageContainer">
            <img src="${data[2].images[i]}">
        </div>
        <div class="paveiksloPavadinimas">
            <h2>${data[2].imagesTitles[i]}</h2>
        </div>
        <div>
            <p>${data[2].paragraphs[i]}</p>
        </div>
    </div>`;
}

console.groupEnd('4 užduotis')

//--------------------5 užduotis (Fizz Buzz)----------------------------
// Padaryti formą, kurioje įvedus duomenis (nuo, iki) ir paspaudus mygtuką "vykdyti", žemiau būtų sukurta grupė div'ų, kuriuose yra atliktas FizzBuzz metodas nuo duotojo parametro iki duotojo parametro. Viską gražiai stilizuoti.

console.group('5 Užduotis - Buzz Fizz nuo-iki')

// function pirminiuSkaiciuMasyvas(pradzia, pabaiga){ // sukuriama funkcija, kuria bus generuojamas skaičių masyvas nuo pateikto pradinio iki pateikto galutinio skaičiaus. Pradinis ir galutinis skaičiai - imtinai.
//   let skaiciuMasyvas = []; // 1 funkcijos žingsis - sukuriamas tuščias masyvas būsimiems skaičiams
//   for(let i=pradzia ; i <= pabaiga ; i++){ // 2 funkcijos žingsnis - nurodomos generuojamų skaičių ribos
//       skaiciuMasyvas.push(i) // 3 funkcijos žingsnis - gauti rezultatai išsaugomi ankščiau sukurtame skaičių masyve
//   } console.log(skaiciuMasyvas) // 4 funkcijos žingsnis - konsolėje pa(si)tikrinamas masyvas

//   // aukščiau funkcijoje buvo sukurtas skaičių masyvas, kurio ribos nurodomas iškviečiant funkciją konsolėje.
//   // toliau reikia sukurti funkciją (vis dar šioje funkcijoje), kuri iš sugeneruoto skaičių masyvo atrinktų tik pirminius

//   let nePirminiuSkaiciuMasyvas = []
//   let pirminiuSkaiciuMasyvas = [] // sukuriamas tuščias masyvas būsimiems pirminiems skaičiams

//   for ( b = 0 ; b < skaiciuMasyvas.length ; b++){ // nurodomos pirminių skaičių paieškos ribos (visas skaičių masyvas)
//     console.log('Visi skaičiai: ' + skaiciuMasyvas[b])
//     if( skaiciuMasyvas[b] == 0 ){console.log('1 nei pirminis, nei nepirminis')} // atmetamas vienetas (jis nei pirminis nei ne)
//      else if (skaiciuMasyvas[b] > 1){  // tolimesniems veiksmams atrenkami tik už 1 didesni skaičiai
//         console.log('Skaičiai didesni už 1: ' + skaiciuMasyvas[b])
//         for ( b = 2 ; b < skaiciuMasyvas.length / 2 ; b++){ // toliau tikrinami skaičiai nuo antrojo skaičiaus IKI pusę masyvo dydžio
//           console.log('Skaičiai nuo 1: ' + skaiciuMasyvas[b])
//           if(skaiciuMasyvas[b] % b == 0){
//             console.log('Skaičiai turintys dalmenį: ' + skaiciuMasyvas[b])
//           }

//        } 
//    } 
//   }

// }




// function BuzzFizzNuoIki(a, b){
//     let pirminisMasyvas1=[]
//     for( i=a ; i < b ; i++){
//     if (skaiciuMasyvas[i] % 5 === 0 && skaiciuMasyvas[i] % 3 === 0){
//         console.log('Buzz Fizz passed ' + skaiciuMasyvas[i])
//         pirminisMasyvas1.push(skaiciuMasyvas[i])
// } 
// }   return pirminisMasyvas1
// }

console.groupEnd('5 Užduotis - Buzz Fizz nuo-iki')
