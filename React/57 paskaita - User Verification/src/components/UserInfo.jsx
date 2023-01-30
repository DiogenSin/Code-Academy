import { useContext } from "react"
import UserContext from "../contexts/UserContext"

const UserInfo = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)


    return (
        <>
        
        <img src={loggedInUser.avatar} alt="" />
        <span>{loggedInUser.username}</span>
        <button onClick={() => { setLoggedInUser(null)}}>Logout</button>
        </>
    )
}

export default UserInfo