import PostContexts from "../contexts/PostContext"
import { useContext } from "react"

const NewPost = () => {

    const { handleOpenPostForm } = useContext(PostContexts)

    return (

        <>
        <div className="postCard newPost" onClick={handleOpenPostForm}>
            <i className="fa fa-plus"></i>
        </div>
        </>
    )
}

export default NewPost