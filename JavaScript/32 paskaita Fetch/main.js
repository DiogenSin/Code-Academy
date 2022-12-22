// JSON

/*

JSON - JavaScript Object Notation.
JSON`e raktiniai žodžiai yra kabutėse.
JSON`e funkcijos būti negali.

fetch('url')
    .then(res => res.json())

*/

fetch('./data/data.JSON')
    .then(response => response.json())
    .then (data => {
        console.log(data)
        Object.keys(data).forEach(key => {
            document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`
        })
    })


const object = {
    raktu: 'reikšmė',
    tiesa: true,
    skaicius: 566,
    masyvas: ['labas', 'ate'],
    objektas: {hi: 'ha', du: 2},
    funkcija: (zodis) => {
        return `Pasakei ${zodis}`
    }
}

const objectAsJSON = JSON.stringify(object)

console.log(objectAsJSON)

// Fetch

/*

fetch('url')

fetch yra promise ir už jo galima dėti then catch ir finally

Fetch skirtas pasiimti duomenis iš nurodyto failo ar url

*/

const data = fetch('./data/data.txt')
.then(response => response.text())
.then(data => {

    console.log(data)
    let dataAsArray = data.split('\n')
    console.log(dataAsArray)
    dataAsArray = dataAsArray.map(item => item.split(' '))
    console.log(dataAsArray)
    dataAsArray.forEach(line => {
        document.querySelector('#tekstinis').innerHTML+= `<p>${line}</p>`
    })

})



// ------------------API--------------------------

// Random user

fetch('https://randomuser.me/api')
    .then (res => res.json())
    .then ( data => {
        console.log(data.results[0])
    })