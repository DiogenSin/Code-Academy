import { useNavigate } from "react-router-dom"

const RegistrationBtn = () => {

    const navigate = useNavigate()

    return (

        <>
        <button id="regBtn" onClick={() => navigate('/registration')}>Registracija</button>
        </>
    )
}

export default RegistrationBtn