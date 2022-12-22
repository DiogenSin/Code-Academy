// CRUD

/*

    C - create  - POST metodas
    R - read    - GET metodas
    U - update  - 
    D - delete  - DELETE metodas

*/

/* Syntax

fetch(link, {options
    
    method: POST, // PUT
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(data)
    
})

*/

let getiname = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => console.log(data))
}


let postinam = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'POST',
        headers: {
            'Content-teype' : 'application/json'
        },
        body: JSON.stringify(NewData)
    })
    .then (res => res.json())
    .then (data => console.log(data))
}

let triname = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {

        method: 'DELETE',
    })
    .then (res => res.json())
    .then (data => console.log(data))
}

let updateSuPUT = () => {
    let newData = {
        body : 'Mano batai buvo du, vienas dingo nerandu.',
        title: 'Batukas',
        userId: 5
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1', { // PUT ištrine seną ir įklijuoja naują informaciją
        method : 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then (res => res.json())
    .then(data => console.log(data))
}

let updateSuPATCH = () => {}





