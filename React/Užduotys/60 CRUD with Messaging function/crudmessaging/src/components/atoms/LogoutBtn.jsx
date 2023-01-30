import { useContext } from "react"
import MainContexts from "../contexts/MainContexts"

const LogoutBtn = () => {

    const {logout} = useContext(MainContexts)

    return (

        <button id="logout" onClick={() => logout()}>Atsijungti</button>

    )
    
}

export default LogoutBtn