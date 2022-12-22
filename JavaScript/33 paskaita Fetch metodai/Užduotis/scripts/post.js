document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    let miestas = event.target.elements.miestas.value
    let kaina = event.target.elements.kaina.value
    let aprasymas = event.target.elements.aprasymas.value
    let paveikslelis = event.target.elements.imageURL.value

    console.log(miestas, kaina, aprasymas, paveikslelis)

    let naujasBustas = {
        city : miestas,
        description: aprasymas,
        image: paveikslelis,
        price: kaina
    }

    console.log(naujasBustas)

    fetch('https://robust-safe-crafter.glitch.me/', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(naujasBustas)
    })
    .then (res => res.json())
    .then(data => console.log(data))

})