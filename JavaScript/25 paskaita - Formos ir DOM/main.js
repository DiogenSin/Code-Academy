document
.querySelector('#formosKonteineris > form')
.addEventListener('submit', e => {
    e.preventDefault()
    console.dir(e)
    const [photo, title, description, date, location] = [
        e.target.elements.photo.value,
        e.target.elements.title.value,
        e.target.elements.description.value,
        e.target.elements.date.value,
        e.target.elements.location.value,
    ]
    console.log(photo, title, description, date, location)


    document.querySelector('#generatedCards').innerHTML +=`
        <div class="card">
            <div id="cardPhoto">
                <img src="${photo}" alt="katė">
                <p>${date && `<p>${date}</p>`}</p>
                <p>${location && `<p>${location}</p>`}</p>
            </div>
            <div id="cardText">
                <h1>${title && `<p>${title}</p>`}</h1>
                <p>${description && `<p>${description}</p>`}</p>
            </div>
        </div>
        `
})