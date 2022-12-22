fetch('https://robust-safe-crafter.glitch.me/')
    .then (res => res.json())
    .then (data => {
             
        console.log(data)
        
        data.forEach(skelbimas => {

            document.querySelector('#results').innerHTML += 
            `
            
            <div class="card">
                <img src="${skelbimas.image}" alt="${skelbimas.city}">
                <div>
                <h3>${skelbimas.city}</h3>
                <h3>${skelbimas.price} Eur</h3>
                </div>
                <p>${skelbimas.description}</p>
            </div>
            
            `
        });

        document.querySelector('#filter').addEventListener('submit', e =>{
            e.preventDefault()
            console.log(e)

            let ieskomasMiestas = e.target.elements.filtras.value

            console.log(ieskomasMiestas)
        })
    })