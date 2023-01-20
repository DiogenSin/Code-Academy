import { useContext } from "react"
import ToDosContext from "../ToDosContext"
import ToDos from "./ToDos"

const ToDo = (data, index) => {

    const {changeTaskState, deleteTask} = useContext(ToDosContext)


    return (
        <>
        
        <h1>ToDo</h1>
        <hr />
        <div>
            <h1>{index} Task: {data.task}</h1>
            <p>Task is {data.completed ? 'completed.' : 'task needs to be done.'}</p>
            <button onClick={() => changeTaskState(data.id)}>

                {
                    data.completed? 'Incomplete' : 'Complete'
                }


            </button>
            <button onClick={() => {deleteTask(data.id)}}>
                Delete
            </button>
        </div>
        </>
    )
}

export default ToDo