import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import PostContexts from '../contexts/PostContext'
import { useContext } from 'react'
import { nanoid } from 'nanoid'

const NewPostForm = () => {

    const { addNewPost, handleOpenPostForm, addNewPostData } = useContext(PostContexts)

    const [values, setValues] = useState({
        title: '',
        text: '',
        image: ''
    })

    const handleNewPost = (e) => {
        
        let newPost = {
            title: e.title,
            text: e.text,
            image: e.image,
            id: nanoid()
        }
        addNewPostData(newPost)
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
        text: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
        image: Yup.string()
            .required('Šis laukas privalo būti užpildytas'),
    })
 
    return(

        <>
        <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={handleNewPost}
        >
            {({ errors, touched, values, setValues}) => (
                <div className={addNewPost ? "formBackground" : "hide"}>
                    <Form action="" id='newPostForm'>
                    <h1>Naujas straipsnis</h1>

                    <label htmlFor="title">
                        Pavadinimas
                        <Field 
                            type="text" 
                            name="title" 
                            placeholder='Pavadinimas'
                            value={values.title}
                            onChange={(e)=> setValues({...values, title:e.target.value})}
                            />
                            {
                                errors.title && touched.title ?
                                <span>{errors.title}</span> : null
                            }
                    </label>

                    <label htmlFor="text">
                        Tekstas
                        <Field 
                            type="text" 
                            name="text" 
                            placeholder="Tekstas" 
                            value={values.text}
                            onChange={(e)=> setValues({...values, text:e.target.value})}
                            />
                            {
                                errors.text && touched.text ? 
                                <span>{errors.text}</span> : null
                            }
                    </label>

                    <label htmlFor="image">
                        Paveikslo nuoroda
                        <Field 
                            type="url" 
                            name="image" 
                            placeholder="Paveiksliuko nuoroda" 
                            value={values.image}
                            onChange={(e)=> setValues({...values, image:e.target.value})}
                            />
                            {
                                    errors.image && touched.image ? 
                                    <span>{errors.image}</span> : null
                            }
                    </label>
                    <div id='regButtons'>
                    <button type='submit' id='regBtn1' onClick={handleOpenPostForm}>Pateikti</button>
                    <button type='button' id='regBtn2' onClick={handleOpenPostForm}>Nutraukti</button>
                    </div>
                </Form>
                </div>
            )}
        </Formik>

        </>
    )
}

export default NewPostForm