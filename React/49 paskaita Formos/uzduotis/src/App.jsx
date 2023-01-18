import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Task from './components/Task';

// Užduotis - sukurti ToDo app, kuris sugeneruotu užduotis iš JSON failo ir kuriame būtų galima ištrinti, pridėti ar pažymėti užduotį kaip atliktą.

//*********** Procesas ***************
// 1 Sukurti ToDo app HTML struktūrą ir stilizuoti
// 2 Pagal poreikį išskirstyti struktūros dalis į atskirus komponentus (Task.jsx, Submit.jsx ir pan.)
// 3 Sukurti .json duomenų failą (šiuo atveju toDo_DB.json)
// 4 App dalyje fetchinti duomenis iš sukurto duomenų failo
    // 4.1 Sukurti use state, kurio pradinė reikšmė null
    // 4.2 Sukurti funkciją, kuri fetchindama duomenis naudotų async
    // 4.3 Naudojant setData pakeisti pradinę useState reikšmę į fetchintus duomenis
// 5 Sukuriamas useEffect, kuriame nurodomas 4.2 dalyje sukurtos fetchinimo funkcijos vykdymas, o stebimas elementas būtinai parenkamas tuščias masyvas []. Parenkant tuščią masyvą useEffect vykdysis tik vieną kartą ir tokiu būdų nesukurs amžino loop`o. useEffect(() => { fetchData() }, [])
// 6 App return dalyje reinama per visus fetchint`us duomenis (po useState pakeitimo jie dabar tapo data. žr. 4.3) ir kuriamas atitinkamas kiekis task komponentų. Pastebėjimas: kurti naudojant ternary sąlygą, kuri vietoje tuščio lango, kol užkraus duomenis iš serverio, rodytų kažkokį krovimo vaizdą.



function App() {

// Fetchinami duomenys
 const  [data, setData] = useState(null) // 4.1

 const fetchData = async() => { // 4.2
  
  const fetchinamDuomenis = await fetch('http://localhost:3000/tasks') 
    .then(res => res.json())
    setData(fetchinamDuomenis) // 4.3
 }
useEffect(() => {
  fetchData()
}, [])

// skaiciuoja neatliktus task`us
const neatliktuSkaiciuokle = () => {
  
  let nealtiktiTaskai = 0

  data.map(task => 
    
    task.status === 'neatlikta' ? nealtiktiTaskai++ : console.log('')
  )

  return nealtiktiTaskai
}

// Keičiamas užduoties statusas iš neatlikta į atlikta

const changeStatus = (id) => {
  let changedStatus = [...data]
  let changedDataIndex = changedStatus.findIndex(element => element.id === id)

  changedStatus[changedDataIndex].status = 'atlikta'

  setData(changedStatus)
}

// Pridedamas naujas task`as (nesiunčiant duomenų į serverį)

const newTask = (e) => {
  e.preventDefault()
  let addNewTask = [...data]
  let taskName = e.target.elements.newTask.value
  let taskStatus = 'neatlikta'
  let taskid = nanoid()
  let taskInObject = {title: taskName, id: taskid, status: taskStatus}
  addNewTask.push(taskInObject)

  setData(addNewTask)
}

// pašalinamas taskas (bet ne iš serverio)

const removeTask = (id) => {
  let removeTaskList = [...data]
  let kelintas = removeTaskList.findIndex(element => element.id == id)
  removeTaskList[kelintas].status = 'deleted'
  setData(removeTaskList)
}



  return (
    <>
    <section id='toDoApp'>
      <div id='appHeader'>
      <h1>Your ToDo App {neatliktuSkaiciuokle()}</h1>
      </div>
      <div id='appBody'>
      {
        data? // 6 naudojant ternary sąlygą tikrinama ar duomenys iš serverio jau užkrauti. Jei ne - užkraunamas krovimo paveikslėlis.
        data.map(item => 
          
          item.status === 'deleted' ? null
          :
          <Task 
          key={item.id}
          task={item}
          status={item.status}
          id={nanoid()}
          changeStatus={changeStatus}
          removeTask={removeTask}
          />
        ): <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
      }

      <form action="" id='taskSubmitForm' onSubmit={newTask}>
        <input type="text" placeholder='Enter item' name="newTask" id="newTask" />
        <button type='submit'>Submit</button>
      </form>
      </div>
      
    </section>
    
    
    </>
  );
}

export default App;
