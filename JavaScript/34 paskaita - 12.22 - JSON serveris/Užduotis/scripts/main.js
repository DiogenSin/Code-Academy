

// duomenų gavimas iš serverio


fetch('http://localhost:3000/posts')

.then (res => res.json())
.then (data => {

    console.log(data.length)
    
        class Movie{ // klasė, kuri ima duomenis iš po klase sukurto sąrašo ir kurianti naujus elementus
            constructor(props){
                this.props = props
                return this.render()
            }

            render = () => {
                
                this.props.forEach(movie => {
                    this.cardsSection = document.querySelector('#moviesGrid')
                    this.card = document.createElement('div')
                    this.card.setAttribute('id',movie.id)
                    this.card.classList.add('card')
                    this.cardsSection.append(this.card)
    
                        this.imageField = document.createElement('div')
                        this.imageField.classList.add('imageField')
                        this.movieId = document.createElement('p')
                        this.movieId.append(document.createTextNode(`${movie.id}`))
                        this.movieId.setAttribute('class', 'movieID')
                        this.imageField.append(this.movieId)
                        this.card.append(this.imageField)
    
                            this.image = document.createElement('img')
                            this.image.setAttribute('src',`${movie.image}`)
                            this.image.setAttribute('alt',`${movie.title}`)
                            this.imageField.append(this.image)
    
                            this.imageData = document.createElement('div')
                            this.imageData.classList.add('image_data')
                            this.imageField.append(this.imageData)
    
                                this.year = document.createElement('p')
                                this.year.append(document.createTextNode(`${movie.year}`))
                                this.imageData.append(this.year)
    
                                this.imdb = document.createElement('p')
                                this.imdb.append(document.createTextNode(`${movie.IMDb}`))
                                this.imageData.append(this.imdb)
                        
                        this.textField = document.createElement('div')
                        this.textField.classList.add('textField')
                        this.card.append(this.textField)
    
                            this.movieTitle = document.createElement('h3')
                            this.movieTitle.append(document.createTextNode(`${movie.title}`))
                            this.textField.append(this.movieTitle)
    
                            this.movieDescription = document.createElement('p')
                            this.movieDescription.append(document.createTextNode(`${movie.description}`))
                            this.textField.append(this.movieDescription)
        
                    this.card.addEventListener('click', e => { // click event listeneris atidaro modala
                        document.getElementById('modaloContainer').classList.remove('hide')

                        console.log(this.card)

                    })
                    return this.cardsSection
                });
            }

        }

        
        let movies = new Movie (data) // pafetchinti duomenys sukišti į klasei skirtą masyvą
})


// modalo išjungimas

document.querySelector('#close').addEventListener('click', event => {
    document.getElementById('modaloContainer').classList.add('hide')
})