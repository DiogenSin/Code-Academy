const ArticleCard = (props) => {

    return (

        <>
        
        <div className="card">

            <img src={props.cards.img} alt={props.cards.title} />
            <h3>{props.cards.title}</h3>
        </div>
        
        </>

    )


}

export default ArticleCard