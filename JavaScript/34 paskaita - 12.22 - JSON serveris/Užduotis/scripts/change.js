// filmo pakeitimo forma

document.querySelector('#changeForm').addEventListener('submit', event => {
    event.preventDefault()
    console.log('Keičiami duomenys: ')

    let targetId = event.target.elements.changeId.value
    let editTitle = event.target.elements.title.value
    let editYear = event.target.elements.year.value
    let editIMDb = event.target.elements.imdb.value
    let editDescription = event.target.elements.description.value
    let editImage = event.target.elements.imageURL.value

    console.log(
        'Pavadinimas: ' + editTitle, 'Metai: ' + editYear, 'IMDb: ' + editIMDb,'Aprašymas: ' + editDescription,'Paveikslėlis: ' + editImage, 'Keičiamo filmo ID: ' + targetId
    )


        fetch(`http://localhost:3000/posts/${targetId}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                title: editTitle,
                year: editYear,
                IMDb: editIMDb,
                description: editDescription,
                image: editImage
            })
    })
    
})