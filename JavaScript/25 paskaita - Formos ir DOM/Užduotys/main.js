
//------------------------1 Filmų kortelės----------------------------

document.querySelector('#form').addEventListener('submit', event => {
    event.preventDefault()
    console.dir(event)

    const [photo, title, description, date, location] = 
    [
        event.target.elements.photo.value,
        event.target.elements.title.value,
        event.target.elements.description.value,
        event.target.elements.date.value,
        event.target.elements.location.value
    ]

    console.log(photo, title, description, date, location)

    document.querySelector('#cards').innerHTML += `
    <section id="card">
        <div id="cardImageData">
            <img src="${photo}" alt="Pateiktas paveikslas">
            <div id="dataLocation">
                <p>${date}</p>
                <p>${location}</p>
            </div>
        </div>
        <div id="cardText">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    </section> 
    `
})


//------------------------2 Lentelės generatorius----------------------------

document.querySelector('#tableGenerator').addEventListener('submit', event2 => {
    event2.preventDefault()
    console.dir(event2)
    const [eilutes, stulpeliai] = 
    [
        event2.target.elements.rowNumber.valueAsNumber,
        event2.target.elements.columnNumber.valueAsNumber
    ]
    console.log(eilutes + ' eilutės ir ' + stulpeliai + ' stulpeliai.')

document.querySelector('#uzduotis2').innerHTML += '<table id="table"><h1>Sugeneruota lentelė</h1><tbody></tbody></table>'

let table = document.querySelector('#table')

for ( let i = 0 ; i < eilutes ; i++){
    row = document.createElement('tr')
    table.append(row)
   for( j = 0 ; j < stulpeliai ; j++){
    row.insertCell() 
   }
}
})

//-------------3 Filmų duomenų bazė------------------


let movieCards = document.querySelector('#uzduotis3')

movieCards.addEventListener('submit', event3 => {

    event3.preventDefault()

    console.dir(event3)

    let pasirinktasTipas = event3.target.elements.filtras.value
    console.log(pasirinktasTipas)

    for ( i = 0 ; i < data.movies.length ; i++)
{

    let filtracijaPagalPasirinkima = data.movies[i].tipas.some(tipas => tipas == pasirinktasTipas)

    console.log(filtracijaPagalPasirinkima)

    if (filtracijaPagalPasirinkima == true){
    movieCards.innerHTML += 
    `
<section class="movieCard">
    <div class="image">
        <img src="${data.movies[i].paveiksliukas}" alt="Pateiktas paveikslas">
        <div class="dataLocation">
            <p>${data.movies[i].leidimoMetai}</p>
            <p>${data.movies[i].IMDB} IMDB</p>
        </div>
    </div>
    <div class="text">
        <h2>${data.movies[i].pavadinimas}</h2>
        <p>${data.movies[i].aprasymas}</p>
        <p>
        <b>Tipas:</b> ${data.movies[i].tipas}<br>
        <b>Trukmė:</b> ${data.movies[i].trukme} min.<br>
        <b>Režisierius:</b> ${data.movies[i].rezisierius}<br>
        <b>Aktoriai:</b> ${data.movies[i].aktoriai}
        </p>
    </div>
</section>

`
}
};
})

//-------------4 Filmų filtras------------------

















