document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)

    let ieskomasIngredientas = event.target.elements[0].value
    console.log(ieskomasIngredientas)

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ieskomasIngredientas)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            console.log(data.meals[0])
            data.meals.forEach(meal => {
                let mealName = meal.strMeal
                let mealPhoto = meal.strMealThumb
                let mealId = meal.idMeal
                console.log(mealName)
                console.log(mealPhoto)
                console.log(mealId)

                fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId)
                    .then(resolve => resolve.json())
                    .then(info => {
                        console.log(info)
                        console.log(info.meals)
                        let ingredients = info.meals[0].strIngredient1 + ', ' + info.meals[0].strIngredient2 + ', ' + info.meals[0].strIngredient3

                        let description = info.meals[0].strInstructions

                        let video = info.meals[0].strYoutube

                        


                        console.log('Pagrindinai ingredientai: ' + ingredients)
                        console.log('Aprašymas: ' + description)
                        console.log('Video: ' + video)

                        document.querySelector('#results').innerHTML += 
                        `
                        <div class="card">
                            <div class="card1_2">
                                <img src="${mealPhoto}" alt="${mealName}">
                                <h2>${mealName}</h2>
                            </div>
                            <div class="card2_2">
                                <p>Ingredients: ${ingredients}</p>
                                <h3>Instructions</h3>
                                <p>${description}</p>
                                <iframe src="https://www.youtube.com/embed/${video.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        
                        `

                    })


            });
        })

})