

document.querySelector('#taskGenerator').addEventListener('submit', event => {
    event.preventDefault() // išjungiame puslapio perkrovimą
    let task = event.target.elements.taskInput.value
    let taskId = tasks2.length+1
    tasks2.push({task: task, id: taskId})
    console.log(taskId)
    localStorage.setItem(taskId, task)

    let taskContainer = document.createElement('div') // sukuriamas tasko laukas
            taskContainer.setAttribute('id', taskId) // taskui priskiriamas id
            taskContainer.setAttribute('class', 'task') // taskui priskiriama klasė

                let checkBoxContainer = document.createElement('div')// sukuriamas checkboxa ir label talpinantis konteineris
                taskContainer.append(checkBoxContainer)

                    let checkbox = document.createElement('input') // sukuriamas checkbox su atributais
                    checkbox.setAttribute('type', 'checkbox')
                    checkbox.setAttribute('name', 'task' + taskId)
                    checkbox.setAttribute('id', 'task' + taskId)
                    checkBoxContainer.append(checkbox) // checkbox pridedamas prie konteinerio
                    let label = document.createElement('label') // sukuriamas checkbox label
                    label.setAttribute('for', 'task' + taskId) // pridedamas for atributas
                    let taskTitle = document.createElement('h2') // sukuriamas label h2
                    taskTitle.append(task) // h2 priskiriamas uŽduoties tekstas
                    label.append(taskTitle) // h2 priskiriamas label
                    checkBoxContainer.append(label) // label priskiriamas checkbox konteineriui

            // taskContainer.append(task.task) // težinau kodėl parašiau šitą
                let editDeleteContainer = document.createElement('div') // sukuriamas elementas, kuriame bus delete ir edit ikonos
                taskContainer.append(editDeleteContainer) // edit/delete prijungiamas prie task konteinerio

                    let editButton = document.createElement('button') // sukuriamas edit button
                    editButton.setAttribute('id', 'editButton')
                    editButton.setAttribute('type', 'button')
                    editButton.setAttribute('class', 'fa fa-edit editButton')

                    let deleteButton = document.createElement('button') // sukuriamas edit button
                    deleteButton.setAttribute('id', 'deleteButton')
                    deleteButton.setAttribute('type', 'button')
                    deleteButton.setAttribute('class', 'fa fa-trash deleteButton') // sukuriamas delete button

                    editDeleteContainer.append(editButton, deleteButton) // button pridedami prie task konteinerio

            let listOfTasks = document.querySelector('#tasks')
            listOfTasks.append(taskContainer)
})


class Tasks{
    constructor(props){
        this.props = props
        return this.render ()
    }
    render = () => {
        this.props.forEach(task => {
            this.taskContainer = document.createElement('div') // sukuriamas tasko laukas
            this.taskContainer.setAttribute('id', task.id) // taskui priskiriamas id
            this.taskContainer.setAttribute('class', 'task') // taskui priskiriama klasė

                this.checkBoxContainer = document.createElement('div')// sukuriamas checkboxa ir label talpinantis konteineris
                this.taskContainer.append(this.checkBoxContainer)

                    this.checkbox = document.createElement('input') // sukuriamas checkbox su atributais
                    this.checkbox.setAttribute('type', 'checkbox')
                    this.checkbox.setAttribute('name', 'task' + task.id)
                    this.checkbox.setAttribute('id', 'task' + task.id)
                    this.checkBoxContainer.append(this.checkbox) // checkbox pridedamas prie konteinerio
                    this.label = document.createElement('label') // sukuriamas checkbox label
                    this.label.setAttribute('for', 'task' + task.id) // pridedamas for atributas
                    this.taskTitle = document.createElement('h2') // sukuriamas label h2
                    this.taskTitle.append(task.task) // h2 priskiriamas uŽduoties tekstas
                    this.label.append(this.taskTitle) // h2 priskiriamas label
                    this.checkBoxContainer.append(this.label) // label priskiriamas checkbox konteineriui

            // this.taskContainer.append(task.task) // težinau kodėl parašiau šitą
                this.editDeleteContainer = document.createElement('div') // sukuriamas elementas, kuriame bus delete ir edit ikonos
                this.taskContainer.append(this.editDeleteContainer) // edit/delete prijungiamas prie task konteinerio

                    this.editButton = document.createElement('button') // sukuriamas edit button
                    this.editButton.setAttribute('id', 'editButton')
                    this.editButton.setAttribute('type', 'button')
                    this.editButton.setAttribute('class', 'fa fa-edit editButton')

                    this.deleteButton = document.createElement('button') // sukuriamas edit button
                    this.deleteButton.setAttribute('id', 'deleteButton')
                    this.deleteButton.setAttribute('type', 'button')
                    this.deleteButton.setAttribute('class', 'fa fa-trash deleteButton') // sukuriamas delete button

                    this.editDeleteContainer.append(this.editButton, this.deleteButton) // button pridedami prie task konteinerio

            let listOfTasks = document.querySelector('#tasks')
            listOfTasks.append(this.taskContainer)
        });
        };
}

let tasks2 = [

]

if(localStorage.length > 0){
    console.log(Object.entries(localStorage))
    Object.entries(localStorage).forEach(item  =>{
        tasks2.push({task: item[1], id: item[0]})
    })
}




let tasks = new Tasks (tasks2)


document.querySelector('#tasks').addEventListener('click', e => {
    e.preventDefault()
    
    if(e.target.nodeName == 'INPUT'){
        console.log('Check')
    }


    if(e.target.id == 'deleteButton'){
        delete tasks2[e.path[2].id-1]
        const element = document.getElementById(e.path[2].id)
        localStorage.removeItem(e.path[2].id)
        element.remove()
    } else {}

})