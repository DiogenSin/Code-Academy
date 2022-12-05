//--------------------2 užduotis----------------------------
// Naudodamiesi data[0] duomeninis atlikite šiuos veiksmus:
// JS'u sekcijoje sukurkite antraštę.
// JS'u sekciją papildykite paragrafu su tekstu.
// JS'u sekciją papildykite paveikslėliu.
// JS'u sekciją stilizuokite priskirdami klases.


console.log(data) // pasitikrinama kaip atrodo data.js duomenys konsolėje

let pirmasPaveikslas = document.querySelector('#uzduotis2') // parenkama atitinkama vieta HTML`e

pirmasPaveikslas.innerHTML += `
    <div class='paveikslas1'>
        <h1>${data[0].title}</h1>
        <p>${data[0].paragraph}</p>
        <img src='${data[0].image}'>
    </div>
`

//--------------------3 užduotis----------------------------
// Naudodamiesi data[1] duomenimis atlikite šiuos veiksmus:
// JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// JS'u sekciją stilizuokite priskirdami klases.

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


//--------------------4 užduotis----------------------------
// Sutvarkykite data[2] viduje esančius duomenis.
// JS'u sekcijoje sukurkite antraštę su paveiksliukais.
// JS'u sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
// JS'u sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
// JS'u sekciją stilizuokite priskirdami klases.

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

// let paveiksluPavadinimai = tretiPaveikslai.querySelector('.paveiksloPavadinimas')
// for (let j = 0 ; j < data[2].imagesTitles.length ; j++){
//     paveiksluPavadinimai.innerHTML +=`<h2>${data[2].imagesTitles[j]}</h2>`
// }