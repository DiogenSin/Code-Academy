import { useEffect } from "react"
import { useState } from "react"
import CustomInput from "./CustomInput"

const FormValidationCustom = () => {

const [values, setValues] = useState({
    email: '',
    password: ''
})

const inputs = [
    {
        id: 1,
        name: 'email',
        type: 'email',
        label: 'Email',
        error: 'Email must include @ symbol',
        required: true
    },
    {
        id: 1,
        name: 'password',
        type: 'password',
        label: 'Password',
        error: 'Password must be at least 8 symbols in length.',
        required: true
    }
]

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
}

const handleInputChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
}

    return (
        <>
        <form action="" onSubmit={handleSubmit}>

            {
                inputs.map(input => {
                    <CustomInput
                    
                    key={input.id}
                    value={values[input.name]}
                    handleInputChange={handleInputChange}
                    input={input}
                    
                    />
                })
            }

            <input type="submit" value="Login" />
        </form>
        

        </>
    )
}

export default FormValidationCustom