import ToDo from "./ToDo"
import { useContext } from 'react'
import ToDosContext from '../ToDosContext'

const ToDos = () => {


    const { toDos } = useContext(ToDosContext)

    return (
        <>
        
        <h1>ToDos</h1>
        <hr />
        {
            toDos.map((todo, index) =>
                
                <ToDo
                index={index}
                data={todo}
                key={todo.id}
                />
                
                )
        }
        </>
    )
}

export default ToDos