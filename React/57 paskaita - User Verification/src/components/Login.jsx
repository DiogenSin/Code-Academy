import { useContext } from "react"
import { useState } from "react"
import UserContext from "../contexts/UserContext"

const Login = () => {

    const [formInputs, setFormInputs] = useState({
        username: '',
        password: ''
    })


    const [failedLogIn, setFailedLogIn] = useState(false)

    const { users, setLoggedInUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formInputs)

        const loggedInUser = users.find(user => user.username === formInputs.username && user.password === formInputs.password)
        
        if(loggedInUser){
            setLoggedInUser(loggedInUser)
        } else {
            console.log('Wrong login info')
        }

    }


    return (

        <>

        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Username:
                    <input type="text" name="username"
                    value={formInputs.username}
                    onChange={(e) => setFormInputs({...formInputs, username:e.target.value})}
                    />
                </label>
                <label htmlFor="">Password:
                    <input type="text" name="password"
                    value={formInputs.password}
                    onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
                    />
                </label>
                <input type="submit" value='Login' />
            </form>
        </div>


        </>
    )
}

export default Login