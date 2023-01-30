import Post from "../organisms/Post"
import { useContext } from "react"
import PostContexts from "../contexts/PostContext" 

const Home = () => {

    const { posts } = useContext(PostContexts)

    console.log(posts)

    return (

        <>
        <h1>Straipsniai</h1>
        <section id="posts">
            
        {

            posts.map(post => 
                <Post 
                key={post.id}
                data={post}
                />
            )

        }        
        </section>

        </>
    )
}

export default Home