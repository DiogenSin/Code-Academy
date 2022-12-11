
//------------------------Filmų kortelės----------------------------

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


//------------------------Lentelės generatorius----------------------------

document.querySelector('#tableGenerator').addEventListener('submit', event2 => {
    event2.preventDefault()
    console.dir(event2)
    const [eilutes, stulpeliai] = 
    [
        event2.target.elements.rowNumber.valueAsNumber,
        event2.target.elements.columnNumber.valueAsNumber
    ]
    console.log(eilutes + ' eilutės ir ' + stulpeliai + ' stulpeliai.')

document.querySelector('#uzduotis2').innerHTML += '<table id="table"><h1>Sugeneruota lentelė</h1></table>'


})
