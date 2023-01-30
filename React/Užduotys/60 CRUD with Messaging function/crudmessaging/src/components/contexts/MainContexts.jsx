import { useNavigate } from "react-router-dom"
import { useState, createContext, useEffect } from "react"
import { nanoid } from 'nanoid'

const MainContexts = createContext()

const MainProvider = ({children}) => {
    
    const [loginStatus, setLoginStatus] = useState(false)
    const [userList, setUserList] = useState(null)
    const navigate = useNavigate()

    const getUserData = async() => {

        const fetchData = await fetch('http://localhost:3001/users')
        .then (res => res.json())
        setUserList(fetchData)
      }

    const login = (e) => {
        e.preventDefault()
        let givenUsername = e.target.elements.username.value
        let givenPassword = e.target.elements.password.value

        let userPlace = userList.findIndex(user => user.username === givenUsername)
        
        userList[userPlace].password === givenPassword ? setLoginStatus(true) : console.log('False password or username.')

    }

    const logout = () => {
        setLoginStatus(false)
        console.log('atsijunges')
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
            registration
        }}>
            {children}
        </MainContexts.Provider>

    )

}

export default MainContexts
export {MainProvider}
