

document.querySelector('main').addEventListener('submit', event => {
    event.preventDefault()

    let ieskomasIngredientas = event.target.elements.ingredientoInput.value

    fetch ('https://www.themealdb.com/api/json/v1/1/list.php?i=list') // duomenų bazė
    .then (res => res.json())

    .then ( data => {
        console.log(data.meals[0])
        
        Object.keys(data.meals).forEach(meal => {
            console.log(data.meals[meal].strIngredient)
            if(data.meals[meal].strIngredient == ieskomasIngredientas){
                console.log(data.meals[meal])
            }
        })

    })
}
)
