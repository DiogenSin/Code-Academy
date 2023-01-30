import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
import { useState } from 'react'

const FormValidationFormik = () => {

    const [values, setValues] = useState({
        email:'',
        password:'',
        passwordRepeat:''
    })

    const validationSchema = yup.object().shape({

        email: Yup.string()
            .required('This field must be filled')
            .email('This input must be a valid email'),
        password: Yup.string()
            .required('This field must be filled')
            .min(8, 'Password must be at least 8 symbils length'),
        passwordRepeat: Yup.mixed()
            .required('This field must be filled')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    return (
        <>
        
        <Formik
        
        initialValues={{
            email: values.email,
            password: values.password,
            passwordRepeat: values.passwordRepeat
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
            console.log(values)
        }}
        >
            {({errors, touched, values, setValues}) => (
                <Form action="">

                <label htmlFor="">
                    Email:
                    <Field name='password' onChange={(e) => setValues({...values, email: e.target.value})}/>
                        {
                            errors.email && touched.email ? (
                                <span>{errors.email}</span>
                            ) : null
                        }
                </label>

                </Form>
            )}


        </Formik>
        
        </>
    )
}

export default FormValidationFormik