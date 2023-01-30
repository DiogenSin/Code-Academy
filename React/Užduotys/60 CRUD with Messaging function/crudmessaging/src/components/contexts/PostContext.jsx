import { useState, createContext, useEffect } from "react"
import { nanoid } from 'nanoid'

const PostContexts = createContext()

const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState()
    const getPostData = async() => {

        const fetchData = await fetch('http://localhost:3001/posts')
        .then (res => res.json())
        setPosts(fetchData)
      }

    useEffect(() => {
        getPostData()
      }, [])

    return (

        <PostContexts.Provider value={{
            posts
        }}>
            {children}
        </PostContexts.Provider>

    )

}

export default PostContexts
export {PostProvider}
