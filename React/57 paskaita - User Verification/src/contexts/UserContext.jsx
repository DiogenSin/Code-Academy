import { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [users, setUsers] = useState([
        {
            id: 0,
            level: 'admin',
            username: 'Petras Didysis',
            password: 'meRuleEmA',
            avatar: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png'
        }, {
            id: 1,
            level: 'user',
            username: 'Petriukas',
            password: 'meAfeDeEmA',
            avatar: 'https://i.pravatar.cc/150?img=1'
        }, {
            id: 2,
            level: 'user',
            username: 'Jonukas',
            password: 'meqwWRFEmA',
            avatar: 'https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
        },
    ])
    const [loggedInUser, setLoggedInUser] = useState() 

    return (
        <UserContext.Provider
            value={{
                users,
                loggedInUser
            }}>
                {children}
            </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext
