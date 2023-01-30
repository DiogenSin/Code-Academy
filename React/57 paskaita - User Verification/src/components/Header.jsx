import Login from "./Login"
import UserInfo from "./UserInfo"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

const Header = () => {

    const { loggedInUser } = useContext(UserContext)

    return(
        <>
        {
            loggedInUser ?
            <UserInfo />
            :
            <Login />
        }

        </>
    )
}
export default Header