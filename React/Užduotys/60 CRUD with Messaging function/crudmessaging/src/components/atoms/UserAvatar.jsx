import MainContexts from "../contexts/MainContexts"
import { useContext } from "react"

const UserAvatar = () => {
    const { loggedInUser } = useContext(MainContexts)
    return (
        <>
        <img className="userAvatar" src={loggedInUser.avatar} alt={loggedInUser.username} />
        </>
    )
}

export default UserAvatar