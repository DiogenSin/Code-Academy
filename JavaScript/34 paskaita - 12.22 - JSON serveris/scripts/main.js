let get = () => {
    fetch('http://localhost:3000/posts')
        .then (res => res.json())
        .then (data => {
            console.log(data)
        })
}


let post = (data) => {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
})
}

let post1 = () => {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            title: 'Naujas title',
            author: 'Naujas author'
        })
})
}


// fetch URL gale nurodomas id, kuris norimas ištrinti
let remove = () => {
    fetch('http://localhost:3000/posts/2', {
        method: 'DELETE'
    })
}


// fetch URL gale nurodomas id, kuris norimas pakeisti
let update = () => {
    fetch("http://localhost:3000/posts/2", {
        method: "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            title: 'Pakeistas title',
            author: 'Kitoks Author'
        })
})
}

let update1 = (id, data) => {
    fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
})
}


let get1 = (id) => {
    // if(typeof(id) !== 'number'){
    //     id = ""}

    fetch(`http://localhost:3000/posts/${id?id:''}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
        })
}