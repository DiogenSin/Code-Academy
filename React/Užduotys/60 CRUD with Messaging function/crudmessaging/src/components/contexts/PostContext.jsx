import { useState, createContext, useEffect } from "react"

const PostContexts = createContext()

const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState()
    const [addNewPost, setAddNewPost] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [editData, setEditData] = useState('')


    const getPostData = async() => {

        const fetchData = await fetch('http://localhost:3001/posts')
        .then (res => res.json())
        setPosts(fetchData)
    }

    const handleOpenPostForm = () => {
        setAddNewPost(!addNewPost)
    }

    const addNewPostData = (newPost) => {


        setPosts([...posts, newPost])

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: newPost.id,
                title: newPost.title,
                text: newPost.text,
                image: newPost.image
            })
        })

    }

    const deletePost = (id) => {

        let deleteFrom = [...posts]
        let indexNr = deleteFrom.findIndex(post => post.id == id)
        deleteFrom.splice(indexNr, 1)
        setPosts(deleteFrom)
        
        fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE'
      })
      .then (res => res.json())
    }

    const openEditForm = (id) => {
        setOpenEdit(!openEdit)
        setEditData(id)
    }

    const closeEditForm = () => {
        setOpenEdit(!openEdit)
    }

    const updatePost = (e) => {

        let dataToEdit = {
            title: e.title,
            text: e.text,
            image: e.image,
            id: editData
        }
        
        setPosts(posts.map(post => post.id === editData ? {...post, ...dataToEdit} : post))

        fetch(`http://localhost:3001/posts/${editData}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
              id: editData,
              title: e.title,
              text: e.text,
              image: e.image
            })
      })
    }

    useEffect(() => {
        getPostData()
      }, [])

    return (

        <PostContexts.Provider value={{
            posts,
            handleOpenPostForm,
            addNewPost,
            addNewPostData,
            deletePost,
            openEditForm,
            updatePost,
            editData,
            openEdit,
            closeEditForm
        }}>
            {children}
        </PostContexts.Provider>

    )

}

export default PostContexts
export {PostProvider}
