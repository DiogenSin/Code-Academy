import Post from "../organisms/Post"
import { useContext } from "react"
import PostContexts from "../contexts/PostContext" 
import NewPost from "../organisms/NewPost"
import NewPostForm from "../organisms/NewPostForm"
import EditPostForm from "../organisms/EditPostForm"

const Home = () => {

    const { posts } = useContext(PostContexts)

    return (

        <>
        <h1>Straipsniai</h1>
        <section id="posts">
            
        {
            posts ?
            <>
            {posts.map(post => 
                    <Post 
                    key={post.id}
                    data={post}
                    />

            )}
            <NewPost />  
            </>
            :
            <div id="loadingGif">
                <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif" alt="" />
                <h2>Kraunama</h2>
            </div>

        }       
        </section>
        <NewPostForm />
        <EditPostForm />
        </>
    )
}

export default Home