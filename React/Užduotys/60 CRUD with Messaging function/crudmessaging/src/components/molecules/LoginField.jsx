import * as Yup from 'yup'
import { Formik, Form, Field } from "formik"
import { useState } from "react"
import RegistrationBtn from "../atoms/RegistrationBtn"
import MainContexts from '../contexts/MainContexts'
import { useContext } from 'react'



const LoginField = () => {

    const { login } = useContext(MainContexts)

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
        password: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
    })


    return (
        <>
        <Formik
            initialValues={loginData}
            validationSchema={validationSchema}
            onSubmit={login}
        >

        {({ errors, touched, values, setValues}) => ( // būtinai naudoti Values ir setValues

            <Form action="" id="loginForm" >
            <label htmlFor="">
                <Field 
                    type="text" 
                    name="username" 
                    id="usernameInput" 
                    placeholder="Slapyvardis"
                    value={values.username}
                    onChange={(e) => setValues({...values, username: e.target.value})}
                />
                {
                    errors.username && touched.username ?
                    <span>{errors.username}</span> : null
                }
            </label>
            <label htmlFor="">
                <Field 
                    type="text" 
                    name="password" 
                    id="passwordInput" 
                    placeholder="Slaptažodis"
                    value={values.password}
                    onChange={(e) => setValues({...values, password: e.target.value})}
                />
                {
                    errors.password && touched.password ?
                    <span>{errors.password}</span> : null
                }
            </label>
            <button type="submit" id="loginBtn">Prisijungti</button>
            </Form>


        )}
        </Formik>
        <RegistrationBtn />
        </>
    )
}

export default LoginField