import * as yup from 'yup'
import { Formik, Form, Field} from 'formik'
import { useState } from 'react'

const FormikValidation = () => {
    
    const [values, setValues] = useState({
        username: '',
        age: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('Pateikite vartotojo slapyvardį'),
        age: yup.number('')
            .required('Pateikite savo amžių')
            .moreThan(18, 'Turite būti vyresnis nei 18'),
        email: yup.string()
            .required('Užpildykite lauką')
            .email('Email adresas privalo turėti @'),
        password: yup.string()
            .required('Užpildykite lauką')
            .min(8, 'Slaptažodis turi susidėti bent iš 8 simbolių'),
        repeatPassword: yup.mixed()
            .oneOf([yup.ref('password'), null], 'Slaptažodžiai turi sutapti')
            .required('Laukas privalo būti užpildytas')

    })
    
    return (
        <>

        <Formik
        
            initialValues={{
                username: values.username,
                age: values.age,
                email: values.email,
                password: values.password,
                repeatPassword: values.repeatPassword
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values)
            }}
        >

            {({errors, touched, values, setValues}) => (
                <Form>
                    <div>
                        <label htmlFor="">Username:
                            <Field name='username' value={values.username} onChange={(e) => setValues({...values, username: e.target.value})} />
                            {
                                errors.username && touched.username ?
                                (<span>{errors.username}</span>) :
                                null
                            }
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Age:
                            <Field name='age' value={values.age} onChange={(e) => setValues({...values, age: e.target.value})} />
                            {
                                errors.age && touched.age ?
                                (<span>{errors.age}</span>) :
                                null
                            }
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Email:
                            <Field name='email' value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} />
                            {
                                errors.email && touched.email ?
                                (<span>{errors.email}</span>) :
                                null
                            }
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Password:
                            <Field name='password' value={values.password} onChange={(e) => setValues({...values, password: e.target.value})} />
                            {
                                errors.password && touched.password ?
                                (<span>{errors.password}</span>) :
                                null
                            }
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Repeat repeatPassword:
                            <Field name='repeatPassword' value={values.repeatPassword} onChange={(e) => setValues({...values, repeatPassword: e.target.value})} />
                            {
                                errors.repeatPassword && touched.repeatPassword ?
                                (<span>{errors.repeatPassword}</span>) :
                                null
                            }
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>

        </>
    )
}

export default FormikValidation

