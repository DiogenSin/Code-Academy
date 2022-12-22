document.querySelector('#filterContainer').addEventListener('submit', event => {
    event.preventDefault()
    
    let chosenIngredient = event.target.elements.ingredientas.value
    
    console.log('Pasirinktas ingredientas: ' + chosenIngredient)

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + chosenIngredient)
        .then (res => res.json())
        .then (data => {

                    console.log(data)
                    data.meals.forEach(meal => {
                        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + meal.idMeal)
                        .then (res => res.json())
                        .then(info => {
                            console.log(info.meals)
                            document.querySelector('body').innerHTML += 
                            `
                            <section class="recipesContainer">
                            <div class="recipeCard">
                                <img src="${meal.strMealThumb}" alt="">
                                <h2>${meal.strMeal}</h2>
                            </div>
                            <div class="recipeInfo">
                            <p class="ingredients">${info.meals[0].strIngredient1}, ${info.meals[0].strIngredient2}, ${info.meals[0].strIngredient3}, ${info.meals[0].strIngredient4}</p>
                            <div class="recipe">
                                <h3>Recipe</h3>
                                <p>${info.meals[0].strInstructions}</p>
                            </div>
                            <iframe src="${info.meals[0].strYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        `
                            
                        })


                        })
                        
                    })

            });
        