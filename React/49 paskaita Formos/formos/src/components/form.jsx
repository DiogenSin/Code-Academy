import { useState } from "react"

const Form = () => {

    // const [vardas, setVardas] = useState('')
    // const [pavarde, setPavarde] = useState('')

    const [formosLaukai, setFormosLaukai] = useState({
        vardas: '',
        pavarde: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)

        switch(e.target.name){

            case 'vardas':
                setFormosLaukai({
                    ...formosLaukai,
                    vardas: e.target.value
                })
                break
            case 'pavarde':
                setFormosLaukai({
                    ...formosLaukai,
                    pavarde: e.target.value
                })
                break
                default: console.log('Kažlą įkėlėme')
        }

    }


    const daro = (e) => {
        e.preventDefault()
        console.log(formosLaukai.vardas)
    }

 return (

    <>
    
    <form onSubmit={daro}>
        <label>
            Name:
            <input 
                type="text" 
                name='vardas' 
                value={formosLaukai.vardas} 
                onChange={handleInputChange} />
        </label><br />
        <label>
            Surname:
            <input 
                type="text" 
                name='pavarde' 
                value={formosLaukai.pavarde} 
                onChange={handleInputChange} />
        </label><br />
        <input type="submit" value='Submit' />
    </form>
    
    </>


 )


}

export default Form