import './index.css';
import straipsniai from './straipsniai'; // 2.5 importuojamas duomenų failas
import Article from './components/articles/Article';
import { useEffect, useState } from 'react';

// 1 Užduotis. Sukurti puslapį, kuriame būtų atvaizduotas headeris ir jame esantis skaičius, kuris parodo, kiek iš žemiau esančių straipsnių yra pažymėti.

// ****************** 1 Procesas **********************
// 1. Sukurti puslapio struktūrą ir stilizuoti css
// 2. Sukurti duomenų failą, iš kurio bus imami duomenys kortelių kūrimui (title, id, img url ir t.t.)
// 2.5 Importuoti sukurtus duomenis į App ir sukurti useState, kurio pradinė reikšmė bus importuoti duomenys (useState(turinys))
// 3. Paskirstyti sukurtos HTML struktūros elementus į komponentus (header`is, article kortelė ir t.t.) Pastebėjimas - id nurodymui naudoti nanoid
// 4. App dalyje 'eiti' per sukurtą duomenų failą (map) ir kurti atitinkamą skaičių article elementų.
// 5. App dalyje article elemente nurodyti funkciją, kuri bus perduota article komponentui (pvz.: handleClicked = {handleClicked})
// 6. App dalyje sukurti 5 žingsnyje elementui pridėtą funkciją ir palikti ją tuščią arbą užpildyti norimais atlikti veiksmais (po col kas nebent console.log('Test')).
// 7. Article komponente, norimoje vietoje pridėti onClick`ą ir naudojantis props`ais priskirti jam 5 žingsnyje sukurtą funkciją (pvz. onClick={props.handleClick}). Pastaba - kartais funkcija gali įsivykdyti pati, tokiais atvejais onClick = {() => handleClick()}. Norint pridėti elemento id, jį galima priskirti per props`us onClick = {() = handleClick(props.id)}
// 8. App dalyje, 6 žingsnyje sukurtą (ir turbūt paliktą vis dar tuščią) funkciją papildyti id props argumentu (const handleClick = (id) => {}).
      // 8.1 patikrinimas ar gaunama tinkama informacija naudojantis console.log(id)
// 9. useState`o reikšmės tiesiogiai keisti negalima, todėl funkcijos viduje sukuriamas naujas masyvas, kuris prilyginamas useState`ui (let changeData = [...turinys]). Pastaba: prilyginant naują masyvą tiesiog useState`ui neįdedant jo į [...turinys], vėliau veiksmai nebus atvaizduojami ekrane iš karto. Būtinai naudoti [...useStateReikšmė]
// 10. naudojantis nauju masyvu (changeData) ir per propsus perduotu id, masyve ieškomi paclickinto elemento duomenys. changeData.findIndex(element => element.id === id)
// 11. Naudojantis surastu paclickinto elemento indeksu changeData masyve pakeisti norimą informaciją (changeData[rastasIndex].theme = 'tamsus')
// 12. pakeisti useState naudojantis setTurinys(changeData)
// 12. sukurti useEffect kuris readuoja į useState`o pakitimus (useEffect(() => { }, [turinys]))
// 13. Neišsigasti, kad pakeitimai nėra atvaizduojami iš karto. 


// 2 Užduotis Header dalyje atvaizduoti tuo momentu paselectintu kortelių/straipsnių skaičių

//****************************** 2 procesas***************************
// Šios užduoties komentarai kode bus pradedami (U2), kad nesusimaišyti su ankstensės užduoties komentarais
// 1 sukurti useState su pradine verte 0 ((selected, setSelected) = useState (0))
// 2 kuriama nauja funkcija, kuri skaičiuos pažymėtas korteles (const selectedCounter = () = {})
// 3 sukurti kintamąjį ir prilyginti jį 0 (let kiek = 0)
// 4 naudojantis forEach einama per duomenų faile esančius duomenis ir ieškoma, kur atitinkamas elementas lygus tam tikrai reikšmei (šiuo atveju ieškoma, ar kortelės theme yra lygu tamsus (tamsus yra klasė css`e, suteikianti pilką spalvą))
// 5 return trečiame žingsnyje sukurtą kintamąjį (return kiek)
// 6 sukurtos funkcijos pavadinimą įdėti vietoje nulinės useState reikšmės sukurtos pirmame žingsnyje
// 7 visa funkcija perkeliama aukščiau - virš useState`o.
// 8 useState (šituo atveju selected) perduodamas į norimą komponentą (šituo atveju Appse esančioje Header dalyje) esant poreikiui naudojantis porps`ais.
// 9 funkcijoje, kuri yra atsakinga už reagavimą į click`us (handleClick) yra setinamas (setSelected) useState`as įterpiant antrame žingsnyje sukurtos paspaudimų skaičiuoklės pavadinimą (setSelected(selectedCounter))


const App = () => {

const [turinys, setTurinys] = useState(straipsniai) // 2.5 sukuriamas useState, kurio pradiniai duomenys yra prilyginami importuotiems duomenis iš duomenų failo

const selectedCounter = () => { // (U2) 2 kuriama funkcija, kuri skaičiuos pažymėtas korteles

  let kiek = 0 // (U2) 3 - sukuriamas ir nuliui prilyginamas kintamasis

    turinys.forEach(straipsnis => straipsnis.theme == 'tamsus' && kiek++) // (U2) 4 - einama per duomenų failą ir tikrinama, kuriuose masyvuose esanti theme teikšmė yra lygi tamsus, jei randama, kintamajam 'kiek' pridedamas 1
    
    return kiek // (U2) 5 grąžinama kiek kintamojo reikšmė

}

const [selected, setSelected] = useState(selectedCounter) // (U2) 1 kuriamas useState su pradine verte 0
// (U2) 6 vietoje nulinės useState reikšmės įdedama ankstesniuose žingsniuose sukurta funkcija (selectedCounter)


const handleClick = (id) => { 
  // 6 sukuriama funkcija, kuri per props`us bus perduodama Article komponentui (žr. 5 žingsnį)
  // 8 funkcijos argumentu nurodomas id
    
  
  let changeData = [...turinys] // 9 sukuriamas naujas masyvas ir prilyginamas useState`ui būtinai naudojant [...useStateReikšmė]


  let kurisPaclickintas = changeData.findIndex(element => element.id === id) // 10 ieškoma, kelintas duomenų masyvas duomenų faile priklauso paclikintam elementui,

  if(changeData[kurisPaclickintas].theme == 'tamsus'){
    changeData[kurisPaclickintas].theme = ''
  } else {
    changeData[kurisPaclickintas].theme = 'tamsus'
  }

  // changeData[kurisPaclickintas].theme = 'tamsus' // 11 radus paclickinto elemento indeksą duomenų faile, indeksas naudojamas ir pakeičiant norimus duomenis. Čia, changeData - visų duomenų masyvas. kurisPaclickintas - indeksas, parenktantis būtent paclickinto elemento duomenų rinkinį/masyvą, o theme - parenkantis konkretų elementą masyve, kuris prilyginamas 'tamsus' .
  
  setTurinys(changeData) // 12 pakeičiama useState reikšmė

  setSelected(selectedCounter) // (U2) 9 - nurodoma nauja useState reikšmė naudojantis setSelected ir jai priskiriant antrame žingsnyje sukurtos funkcijos pavadinimą

}



useEffect(() => { // 13 sukuriamas useEffect, kuris įvykdo pakeitimus ekrane vos tik užfiksuojamas useState (turinys) pokytis.

}, [turinys])


  return (
    <> 
    <header>
      <img src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png" alt="" />
      <nav>
        <i className='fa fa-plus-square' />
        <p>{selected}</p>
        <p>Dovydas</p>
        <img src="https://pbs.twimg.com/profile_images/838851762928791553/Rp1bgpHz_400x400.jpg" alt="" />
      </nav>
    </header>
    <main>
      <h1>Straipsniai</h1>
      <div id='articles'>
       
        {
          turinys.map((item, index) => // 4 einama per duomenų failą ir kuriamas atitinkamas skaičius elementų, kurių struktūra nurodyta Article komponente
            <Article 
            data={item}
            key={item.id}
            id={item.id} // 3. naudojamas id, kuris sugeneruojamas duomenų faile naudojantis nanoid
            handleClick={handleClick} // 5 Nurodoma Article komponentui per props`us perduodama funkcija
             />
          )
        }
      </div>
    </main>
  </>

    )
}

export default App;
