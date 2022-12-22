// duomenų gavimas iš serverio
fetch('http://localhost:3000/posts')

.then (res => res.json())
.then (data => {

    console.log(data)

    data.forEach(movie => {
        console.log(movie)
        document.querySelector('#moviesGrid').innerHTML +=
        `
        <div id="${movie.id}" class="card">
            <div class="imageField">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="image_data">
                    <p>${movie.year}</p>
                    <p>${movie.IMDb}</p>
                </div>
            </div>
            <div class="textField">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <p class="movieNumber">#${movie.id}</p>
            </div>
        </div>
        
        `
    });

})


