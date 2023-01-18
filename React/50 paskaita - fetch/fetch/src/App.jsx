import './App.css';
import './styles/Body.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Cards/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

// 1 sukuriama html struktura
// 2 stilizuojama
// 3 kuriami komponentai
// 4 kuriamas prisijungimo funkcionalumas (žr. Header komponentą.)
// 5 Sukuriama funkcija, fetchinanti kortelių duomenis
// 6 Prie <Card /> kuriama funkcija, einanti per duomenų masyvą ir kurianti atitinkamą skaičių kortelių.
// 7 Per propsus į kortelės komponentą perduodami fetchinti duomenis, kur jie yra priskiriami atitinkamai vietai kortelėje.
// 8 Kuriama tuščia kortelių trinimo funkcija ir siejama su kortelėje esančia trinimo ikona


function App() {

const [data, setData] = useState(null)
const [prisijunges, setPrisijunges] = useState(false)

const prisijungimas = (e) => {

  e.preventDefault()
  let loginName = e.target.elements.name.value
  let loginPass = e.target.elements.password.value

  if(loginName === 'Dovydas' && loginPass === 'Password123'){
    console.log('Prisijungimas sėkmingas')
    setPrisijunges(true)
  } else { console.log('Neteisingi prisijungimo duomenys. Bandykite dar kartą.') }
}

const fetchData = async() => {

  const dataReceive = await fetch('http://localhost:3000/posts')
  .then (res => res.json())
  setData(dataReceive)

}

const deleteCard = (id) => {

  let trinamasSarasas = [...data] // data koreguoti tiesiogiai negalima, todėl tai yra prilyginama kintamajam
  let indexNr = trinamasSarasas.findIndex(card => card.id == id) // iškoma kortelė duomenyse
  trinamasSarasas.splice(indexNr, 1) // naudojantis splice trinamas elementas iš duomenų
  setData(trinamasSarasas) // setinamas naujas duomenų masyvas
  fetch(`http://localhost:3000/posts/${id}`, { // ši funkcija vyksta backgrounde, kad nereikėtų laukti kol suvaikščios duomenys
    method: 'DELETE'
  })
  .then (res => res.json())
}

useEffect(() => {
  fetchData()
}, [])

  return (
<>

    <Header 
    
    prisijungimoStatus={prisijunges}
    prisijungimas={prisijungimas}
    />
    {

      prisijunges ?
        <main>
          <h1>Filmai</h1>
          <p>Žemiau pateiktoje filmų nuomenų bazėje galite išsirinkti jums patinkantį filmą</p>
          <section id='cards'>

          {
            data?
            data.map(item =>
              <Card 
              data={item}
              key={nanoid()}
              deleteCard={deleteCard}
              />
              )
              :
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif" alt="" />
          }


          </section>
        </main>
      :
      <main>
        <h1>Prisijunkite</h1>
        <p>Norėdami naudotis duomenų baze privalote prisijungti</p>
      </main>

    }

    
    
    <Footer />

</>
  
  );



}

export default App;
