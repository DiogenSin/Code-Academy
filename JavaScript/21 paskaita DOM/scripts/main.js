// Simple DOM manipulation

// Variantas 1-------------------------------------

let variantas1 = document.querySelector('#variantas1')

let div = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')

let pavadinimas = document.createTextNode('Variantas 1')
h1.append(pavadinimas)

data = document.createTextNode('Paragrafas su daug teksto...')
p.append(data)

div.append(h1)
div.append(p)
variantas1.append(div)

// Variantas 2---------------------------------------

variantas1.innerHTML +=`
    <div>
        <h1>Variantas 2</h1>
        <p>${data}</p>
    </div>
`

// Variantas 3--------------------------------------

let variantas2 = document.querySelector('#variantas2')

let antraste = 'Super duper JS'
let paragrafas = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt nam doloribus enim sunt odio tempora odit iste, et inventore reiciendis perspiciatis illum error, culpa quidem ipsum at laudantium perferendis?'

let antraste2 = 'Super duper JS'
let paragrafas2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt nam doloribus enim sunt odio tempora odit iste, et inventore reiciendis perspiciatis illum error, culpa quidem ipsum at laudantium perferendis?'

for (let i = 0 ; i < 5 ; i++){
    variantas2.innerHTML += `
    <div>
        <h1>${antraste}</h1>
        <p>${paragrafas}</p>
    </div>
    `;
}

// Variantas 4 ----------------------------------------------

let variantas3 = document.querySelector('#variantas3')

let antrastes = ['A1', 'A2','A3','A4','A5','A6','A7','A8',];

let paragrafai = [
    "1 Lorem ipsum dolor sit amet.",
    "2 Lorem ipsum dolor sit amet.",
    "3 Lorem ipsum dolor sit amet.",
    "4 Lorem ipsum dolor sit amet.",
    "5 Lorem ipsum dolor sit amet.",
    "6 Lorem ipsum dolor sit amet.",
    "7 Lorem ipsum dolor sit amet.",
    "8 Lorem ipsum dolor sit amet."
]

for (let i = 0 ; i < 8 ; i++){
    variantas3.innerHTML += `
    <div>
        <h1>${antrastes[i]}</h1>
        <p>${paragrafai[i]}</p>
    </div>
    `;
}


// Variantas 4------------------------------------------

let variantas4 = document.querySelector('#variantas4')

let data4 = [
    {   antraste: 'A1',
        paragrafas: 'Tekstas1'},
        {antraste: 'A2',
        paragrafas: 'Tekstas2'},
        {antraste: 'A3',
        paragrafas: 'Tekstas3'},
        {antraste: 'A4',
        paragrafas: 'Tekstas4'},
        {antraste: 'A5',
        paragrafas: 'Tekstas5',
    }
]

for (let i = 0 ; i < data4.length ; i++){
    variantas4.innerHTML += `
    <div>
        <h1>${data4[i].antraste}</h1>
        <p>${data4[i].paragrafas}</p>
    </div>
    `;
}

// Užduotis - sukurti mygtuką, kuris suskleistų aukščiau sukurtus variantus (kiekvieną atskirai) ir atsirastų mygtukas rodyti, kuris gražintų informaciją į pradinę būseną------------------------------------------------

// 1 Sukuriamas mygtukas

// let mygtuko_laukas = document.querySelector('#mygtuko_laukas')

// let slepimo_mygtukas = document.createElement('button')
// slepimo_mygtukas.setAttribute('id', 'slepti')
// let slepimo_mygtuko_tekstas = document.createTextNode ('Slėpti')
// slepimo_mygtukas.append(slepimo_mygtuko_tekstas)

// let rodymo_mygtukas = document.createElement('button')
// rodymo_mygtukas.setAttribute('id', 'rodyti')
// let rodymo_mygtuko_tekstas = document.createTextNode('Rodyti')
// rodymo_mygtukas.append(rodymo_mygtuko_tekstas)

// mygtuko_laukas.append(slepimo_mygtukas)
// mygtuko_laukas.append(rodymo_mygtukas)

// 

let turinys = document.querySelector('main')

let skyriai = [variantas1, variantas2, variantas3, variantas4]
console.log(skyriai.length)

for (let i = 0 ; i < skyriai.length ; i++){ // Kodėl nepavyksta?
    skyriai[i].innerHTML += `
    <button id='slepti'>Slepti</button>
    <button id='rodyti'>Rodyti</button>
    `;
}

//

let slepti_mygtukas = document.querySelector('#slepti')
    slepti_mygtukas.addEventListener('click', function(){
    slepti_mygtukas.classList.add('nerodyti')
})

let rodyti_mygtukas = document.querySelector('#rodyti')
    rodyti_mygtukas.addEventListener('click', function(){
    rodyti_mygtukas.classList.add('nerodyti')
})
