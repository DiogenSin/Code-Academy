import {createContext, useState} from 'react'

const ToDosContext = createContext()

const ToDosProvider = ({ children }) => {

    const [toDos, setToDos] = useState([
        {
          id:1,
          task: 'pakvepuoti',
          completed: false
        },
        {
          id:4,
          task: 'išsnešti šiukšles',
          completed: false
        },
        {
          id:3,
          task: 'pavalgyti',
          completed: true
        },
        {
          id:2,
          task: 'padaryti',
          completed: false
        }
      ])
      
    const addNewTask = (newTask) => {
    setToDos([...toDos, newTask])
    }

    const changeTaskState = (id) => {
    // let data = [...toDos]
    // let which = data.findIndex(item => item.id.toString() === id.toString())
    // data[which].completed = !data[which].completed
    // setToDos(data)

    setToDos(toDos.map(item => item.id.toString() === id.toString() ? {...item, completed: !item.completed} : item))
    }

    const deleteTask = (id) => {
    setToDos(toDos.filter(item => item.id.toString() !== id.toString()))
    }

    return(

        <>
        
        <ToDosContext.Provider value={{
            toDos,
            addNewTask,
            changeTaskState,
            deleteTask
        }}>
            {children}
        </ToDosContext.Provider>
        
        </>

    )

}

export {ToDosProvider}
export default ToDosContext