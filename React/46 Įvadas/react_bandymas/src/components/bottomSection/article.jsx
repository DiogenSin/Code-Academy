const Article = (props) => {

    return (

        <>
        <div id={props.articles.id}>
        <h1>{props.articles.title}</h1>
        <p>{props.articles.text}</p>
        </div>
        
        </>

    )

}

export default Article