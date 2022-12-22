document.querySelector('#deleteForm').addEventListener('submit', event => {
    event.preventDefault()
    let delId = event.target.elements.delId.value

    console.log('Norimo ištrinti filmo numeris (id): ', delId)

    fetch(`http://localhost:3000/posts/${delId}`, {
        method: 'DELETE'
    })
})