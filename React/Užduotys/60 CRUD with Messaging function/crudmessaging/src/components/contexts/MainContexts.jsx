import { useNavigate } from "react-router-dom"
import { useState, createContext, useEffect } from "react"
import { nanoid } from 'nanoid'

const MainContexts = createContext()

const MainProvider = ({children}) => {
    
    const [loginStatus, setLoginStatus] = useState(false)
    const [userList, setUserList] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const navigate = useNavigate()

    const getUserData = async() => {

        const fetchData = await fetch('http://localhost:3001/users')
        .then (res => res.json())
        setUserList(fetchData)
      }

    const login = (e) => {

        const userExists = userList.find(user => user.username === e.username && user.password === e.password)
        if(userExists){
            if(userExists.banned){
                console.log('Vartotojas užblokuotas')
            } else {
                setLoginStatus(true)
                setLoggedInUser(userExists)
            }
        } else { console.log('Neteisingas slapyvardis arba slaptažodis') }
    }

    const logout = () => {
        setLoginStatus(false)
        setLoggedInUser('')
    }

    const registration = (e) => {

        setLoginStatus(true)
        console.log(e)
        setLoginStatus(...userList, e)
        navigate('/')

        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: nanoid(),
                username: e.username,
                password: e.password,
                avatar: e.avatar
            })
        })


    }

    useEffect(() => {
        getUserData()
      }, [])

    return (

        <MainContexts.Provider value={{
            loginStatus,
            login,
            logout,
            registration,
            loggedInUser,
            userList

        }}>
            {children}
        </MainContexts.Provider>

    )

}

export default MainContexts
export {MainProvider}
