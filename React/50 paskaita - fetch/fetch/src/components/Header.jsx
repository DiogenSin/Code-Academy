const Header = (props) => {

  // Užduotis - sukurti prisijungimą
  // 1 App dalyje sukuriamas prisijungimo useState su false reikšme
  // 2 useState propsais peduodamas į Header, kur pagal šią reikšmę bus rodomas arba nerodomas user avataras ir prisijungimo laukai
  // 3 App dalyje kuriama funkcija, leidzianti prisijungti tik ivedus tinkamus prisijungimo duomenis (Dovydas, Slaptazodis123). Funkcija perduodama per propsus ir priskiriama formai onSubmit.
  // 4 Nustatoma, jog pagrindinis puslapio turinys ir user avataras bei vardas rodomi tik prisijungus.

return (

    <header>
      <div id='logoTitle'>
        <img id='logo' src="https://seeklogo.com/images/D/design-sample-logo-3FBBE20907-seeklogo.com.png" alt="logo" />
        <h1>Filmų duomenų bazė</h1>
      </div>
      <div id='signIn'>
        {
          props.prisijungimoStatus ?
          <>
          <i className="fa fa-plus-square-o" onClick={props.openForm}/>
          <h3>Dovydas</h3>
          <img src="https://pbs.twimg.com/media/FhC3LvHXkAEMEUZ.png" alt="avataras" />
          </>
          :
          <form action="" onSubmit={props.prisijungimas}>
            <input type="text"
            id="name"
            name="name"
            placeholder='Slapyvardis' />
            <input type="password" 
            id="password"
            name="password"
            placeholder='Slaptažodis' />
            <button type='submit'>Prisijungti</button>
        </form>

        }

      </div>
    </header>


)


}

export default Header