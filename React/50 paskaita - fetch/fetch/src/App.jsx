import './App.css';
import './styles/Body.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Cards/Card';
import EditModal from './components/Cards/EditModal';
import CreateModal from './components/Cards/CreateModal';
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
// 9 Tuščioje funkcijoje aprašomas trinimas:
  // 9.1 Kuriamas naujas kintamasis ir prilyginamas useState`ui
  // 9.2 Ieškomas trinamas elementas duomenų masyve
  // 9.3 iš duomenų šalinama elemento informacija
  // 9.4 useState`as pakeičiamas naujais duomenimis
  // 9.5 Trinami duomenys iš duomenų failo serveryje
// 10 Sukuriama filmu redagavimo forma modale ir įdedama į komponentą
// 11 Sukuriamas useState`as su reikšme false
// 12 Nustatoma, jog atitinkamai pagal useState formos komponentas užkraunamas arba ne
// 13 Sukuriama tuščia redagavimo funkcija ir per propsus prijungiama prie mygtuko naudojant onClick
// 14 Patikrinama ar funkcija veikia. Funkcijoje keičiamas useState į true ir stebima ar modalas rodomas
// 15 Sukurus redaguojamos korteles id useState sunkcijoje jis yra pakeičiamas į norimos redaguoti korteles id
// 16 Redaguojamos korteles useState per propsus yra perduodamas į redagavimo formą (joje id yra paslėptas, tačiau submitinus forma bus perduotas)
// 17 


function App() {

const [data, setData] = useState(null)
const [prisijunges, setPrisijunges] = useState(false)
const [redagavimas, setRedagavimas] = useState(false)
const [redaguojamas, setRedaguojamas] = useState(null)
const [pridetiNauja, setPridetiNauja] = useState(false)

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

  let trinamasSarasas = [...data] // 9.1 data koreguoti tiesiogiai negalima, todėl tai yra prilyginama kintamajam
  let indexNr = trinamasSarasas.findIndex(card => card.id == id) // 9.2 iškoma kortelė duomenyse
  trinamasSarasas.splice(indexNr, 1) // 9.3 naudojantis splice trinamas elementas iš duomenų
  setData(trinamasSarasas) // 9.4 setinamas naujas duomenų masyvas
  fetch(`http://localhost:3000/posts/${id}`, { // ši funkcija vyksta backgrounde, kad nereikėtų laukti kol suvaikščios duomenys
    method: 'DELETE'
  })
  .then (res => res.json())
}

const openChangeCard = (props) => {
  setRedagavimas(true)
  setRedaguojamas(props)
}

const submitChanges = (e) => {

  console.log(e)
  let changeInfo = [...data]
  let location = changeInfo.findIndex(card => card.id == e.id)
  changeInfo[location] = e
  console.log(location)
  console.log(changeInfo)
  setData(changeInfo)
  setRedagavimas(false)
  fetch(`http://localhost:3000/posts/${e.id}`, {
      method: "PUT",
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        id: e.id,
        title: e.title,
        year: e.year,
        IMDb: e.IMDb,
        description: e.description,
        image: e.image
      })
})
}

const openForm = () => {
  setPridetiNauja(true)
}

const closeForm = () => {
  setRedagavimas(false)
  setPridetiNauja(false)
}

const createNew = (e) => {

  let naujasSarasas = [...data]

  let id = nanoid()
  let title = e.target.elements.title.value
  let year = e.target.elements.year.value
  let imdb = e.target.elements.imdb.value
  let description = e.target.elements.description.value
  let image = e.target.elements.image.value

  let naujasFilmas = {id, title, year, imdb, description, image}
  naujasSarasas.push(naujasFilmas)
  setData(naujasSarasas)

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        id: id,
        title: title,
        year: year,
        IMDb: imdb,
        description: description,
        image: image
    })
})

setPridetiNauja(false)

}

useEffect(() => {
  fetchData()
}, [])

  return (
<>

    <Header 
    prisijungimoStatus={prisijunges}
    prisijungimas={prisijungimas}
    openForm={openForm}
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
              openChangeCard={openChangeCard}
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

    
    {
      redagavimas ?
      <EditModal 
      
      editData={redaguojamas}
      submitForm={submitChanges}
      closeForm={closeForm}
      
      />
      :
      null
    }
    {
      pridetiNauja ?
      <CreateModal
      closeForm = {closeForm}
      createNew={createNew}
      />
      :
      null
    }


</>
  
  );



}

export default App;
