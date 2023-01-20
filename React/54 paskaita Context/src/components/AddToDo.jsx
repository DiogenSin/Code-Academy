import { useState, useContext } from "react"
import ToDosContext from "../ToDosContext"

const AddToDo = () => {
    
    const { addNewTask } = useContext(ToDosContext)

    const [newTaskName, setNewTaskName] = useState('')

    const HandlernewTask = (e) => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            task: newTaskName,
            completed: false
        }

        addNewTask(newTask)
    }
    
    return (
        <>
        
        <h1>Add ToDo</h1>
        <form action="" onSubmit={HandlernewTask}>
            <label htmlFor="">
                <input type="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
            </label>
            <label htmlFor="">
                <input type="submit" value='Submit' />
            </label>

        </form>
        </>
    )
}

export default AddToDo