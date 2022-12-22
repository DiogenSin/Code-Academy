fetch('./movies.json')
    .then(res => res.json())
    .then ( data => {

        Object.keys(data).forEach(filmas => { // kuriam pavadinimus

            document.querySelector('#movies').innerHTML += `
            <div class="movieCard">
                <h1>${data[filmas].pavadinimas}</h1>
                    <div class="img">
                    <img src="${data[filmas].paveikslas}" alt="movie poster">
                    </div>
                    <div class="info">
                    <p>${data[filmas].trukme}</p>
                    ${
                        data[filmas].aktoriai
                            .map(aktorius => `<li>${aktorius}</li>`)
                            .toString()
                            .replaceAll(',', '')
                    }
                    </div>`
            })


        }

    )

fetch('https://randomuser.me/api')
    .then (res => res.json())
    .then ( data => {
        console.log(data.results[0])
        console.log(data.results[0].gender)

        document.querySelector('#userGenerator').innerHTML += `
        
        <div id='user'>
            <img src='${data.results[0].picture.thumbnail}'>
            <hr>
            <h3>${data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last}</h3>
            <p>${data.results[0].dob.age}</p>
            <div class="location_email">
                <div class="location">
                    <ul>
                        <p>Address:</p>
                        <li>${data.results[0].location.street.name + data.results[0].location.street.number}</li>
                        <li>${data.results[0].location.postcode + ', ' + data.results[0].location.city}</li>
                        <li>${data.results[0].location.country}</li>
                    </ul>
                </div>
                <div class="email">
                    <a href="emailto: ${data.results[0].email}">${data.results[0].email}</a>
                </div>
            </div>
            <button value="newUser" id="userButton">Generate user</button>
        </div>
        `
    })

    


//     data[filmas].aktoriai.forEach(aktorius =>{
//         console.log(aktorius)
//         document.querySelector('.info').innerHTML += `<p>${aktorius}</p>`
// })