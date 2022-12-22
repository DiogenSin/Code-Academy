// filmo pridėjimo forma

document.querySelector('#addForm').addEventListener('submit', event => {
    event.preventDefault()
    console.log('Pridedami filmo duomenys: ')
    console.log(event)

    let newTitle = event.target.elements.title.value
    let newYear = event.target.elements.year.value
    let newIMDb = event.target.elements.imdb.value
    let newDescription = event.target.elements.description.value
    let newImage = event.target.elements.imageURL.value

    console.log(
        'Pavadinimas: ' + newTitle, 'Metai: ' + newYear, 'IMDb: ' + newIMDb,'Aprašymas: ' + newDescription,'Paveikslėlis: ' + newImage
    )

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            title: newTitle,
            year: newYear,
            IMDb: newIMDb,
            description: newDescription,
            image: newImage
        })
    })
})