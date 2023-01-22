import { Route, Routes } from "react-router-dom";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Navigation from "./components/organisms/Navigation";
import './styles/app.css';

// Užduotis - sukurti billing app`sa
/* Procesas

*********** HTML, komponentai ir Route **************

1. Sukuriama HTML struktūra
2. HTML struktūros dalys išskaidomos į komponentus (Navigation ir tris puslapius (Home, Edit ir Add))
3. Terminale instaliuojami route`ai
4. Index.js App komponentas apgaubiamas BrowserRouter komponentu
5. Navigation komponente sukuriamas header`is su Link`ais į kitus komponentus
6. App dalyje įdedamas Navigation komponentas
7. App dalyje sukuriami Routes ir atskiri Route kikvienam puslapio komponentui (Home, Edit, Add)

*********** Paruošiamas Context naudojimas **************

8. Sukuriamas Context file`as (BillingContext.jsx)
9. Sukurtame Context faile importuojama createContext iš react.
10. Kuriama constanta su tokiu pačiu kaip failas pavadinimu (BillingContext) >>> const BillingContext = createContext()
11. Sukuriama provider funkcija >>> BillingProvider = ({children}) => {} (būtinai iš didžiosios, nes vėliau bus naudojamas kaip komponentas)
12. Provider funckijos return`e nurodoma
      <BillingContext.Provider value={čia rašomos norimos kitiems komponentams perduoti funkcijos ir pan. (žr. 14 žingsnį)}> 
        {children}
      </BillingContext.Provider>
13. Nurodomas BillingContext (export default) ir {billingProvider} (export)
14. Dvyliktame žingsnyje sukurto <BillingContext.Provider> dalyje nurodomas value, kuriame bus parašomos tos funkcijos ar duomenys, kurie bus naudojami kituose komponentuose.
15. Index.js App komponentas apgaubiamas <BillingProvider> komponentu.
16. Importuoti BillingContext į tuos komponentus, kuriuose bus naudojama jame esanti informacija (funkcijos, data ir pan.). Tuo pačiu galima importuoti ir useContext (vistiek bus naudojama kartu).

*********** Duomenų atvaizdavimas Home komponente **************

17. BillingContext dalyje fetchinami duomenys iš pateiktos duomenų bazės (https://believed-shore-vanadium.glitch.me)
  17.1 Sukuriamas useState su pradine verte null
  17.2 Sukuriamas fetch, kuriuo gaunami duomenys iš duomenų bazės
  17.3 setData pabalba duomenys perduodami useState`ui
  17.4 už fetchinimo funkcijos ribū sukuriamas useEffect`as, kurio šalutinis efektas yra fetchinimo funkcija.
18. Sukuriamas Bill komponentas, kuriame importuojami fetchinti duomenys.
19. Tame pačiame komponente map`inami duoemnys, kurių kiekvienam sukuriamos lentelės eilutės.
20. Home puslapyje sukuriama lentelė, kurios tbody įdedamas ankščiau sukurtas Bill komponentas.

*********** Naujos sąskaitos pridėjimas **************

21.  BillingContext faile sukuriama funkcija, kuri vėliau bus priskirta formai onSubmit.
22. Funkcija iš BillContext perduodama Add komponentui.
23. Funkcija priskiriama formai onSubmit ir tikrinama ar veikia (console.log('testas') ar pan.)
24. BillingContext faile, sukurtoje naujoje funkcijoje, iš formos gauti duomenys pridedami prie data useState`o, o vėliau POST metodu ir į Json`ą duomenų banke.

*********** Naujos sąskaitos pridėjimas **************

*/

function App() {


  return (
<>
    <Navigation />

    <main>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/add" element={<Add/>}/>

      </Routes>
    </main>

</>
  );
}

export default App;
