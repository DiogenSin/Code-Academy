import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MainContexts from "../contexts/MainContexts"

const Registration = () => {

    const navigate = useNavigate()
    const { registration } = useContext(MainContexts)

    const [values, setValues] = useState({
        username: '',
        password: '',
        passwordRep: '',
        avatar: ''
    })

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
        password: Yup.string()
            .min(5, 'Slaptažodį turi sudaryti mažiausiai 8 simboliai')
            .required('Šis laukas privalo būti užpildytas'),
        passwordRep: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Slaptažodžiai turi sutapti')
            .required('Šis laukas privalo būti užpildytas'),
        avatar: Yup.string()
            .required('Šis laukas privalo būti užpildytas')
    })
 
    return(

        <>
        <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={values => registration(values)}
        >
            {({ errors, touched, values, setValues}) => (
                <Form action="" id='registrationForm'>
                    <h1>Registracija</h1>

                    <label htmlFor="username">
                        Slapyvardis
                        <Field 
                            type="text" 
                            name="username" 
                            placeholder='Slapyvardis'
                            value={values.username}
                            onChange={(e)=> setValues({...values, username:e.target.value})}
                            />
                            {
                                errors.username && touched.username ?
                                <span>{errors.username}</span> : null
                            }
                    </label>

                    <label htmlFor="password">
                        Slaptažodis
                        <Field 
                            type="password" 
                            name="password" 
                            placeholder="Slaptažodis" 
                            value={values.password}
                            onChange={(e)=> setValues({...values, password:e.target.value})}
                            />
                            {
                                errors.password && touched.password ? 
                                <span>{errors.password}</span> : null
                            }
                    </label>

                    <label htmlFor="passwordRep">
                        Pakartoti slapažodį
                        <Field 
                            type="password" 
                            name="passwordRep" 
                            placeholder="Pakartoti slaptažodį" 
                            value={values.passwordRep}
                            onChange={(e)=> setValues({...values, passwordRep:e.target.value})}
                            />
                            {
                                    errors.passwordRep && touched.passwordRep ? 
                                    <span>{errors.passwordRep}</span> : null
                            }
                    </label>

                    <label htmlFor="avatar">
                        Avataras
                        <Field 
                            type="url" 
                            name="avataroURL" 
                            placeholder="Nuoroda į avatarą" 
                            value={values.avatar}
                            onChange={(e)=> setValues({...values, avatar:e.target.value})}
                            />
                            {
                                    errors.avatar && touched.avatar ? 
                                    <span>{errors.avatar}</span> : null
                            }
                    </label>
                    <div id='regButtons'>
                    <button type='submit' id='regBtn1'>Pateikti</button>
                    <button id='regBtn2' onClick={() => navigate('/')}>Nutraukti</button>
                    </div>

                </Form>
            )}
        </Formik>

        </>
    )
}

export default Registration