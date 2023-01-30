import RegistrationBtn from "../atoms/RegistrationBtn"
import { useContext } from "react"
import MainContexts from "../contexts/MainContexts"

const LoginField = () => {

    const {login} = useContext(MainContexts)

    return (
        <>
        <form action="" id="loginForm" onSubmit={login} >
            <label htmlFor="">
                <input type="text" name="username" id="usernameInput" placeholder="Slapyvardis"/>
            </label>
            <label htmlFor="">
                <input type="text" name="password" id="passwordInput" placeholder="Slaptažodis"/>
            </label>
            <button type="submit" id="loginBtn">Prisijungti</button>
        </form>
        <RegistrationBtn />
        </>
    )
}

export default LoginField