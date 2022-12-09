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

