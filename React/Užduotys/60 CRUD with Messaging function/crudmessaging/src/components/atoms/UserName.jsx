import MainContexts from "../contexts/MainContexts"
import { useContext } from "react"

const UserName = () => {
    const { loggedInUser } = useContext(MainContexts)

    return (
        <>
        <p id="username">{loggedInUser.username}</p>
        </>
    )
}

export default UserName