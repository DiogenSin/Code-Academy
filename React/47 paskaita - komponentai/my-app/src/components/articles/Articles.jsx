import ArticleCard from "./Article";

const Articles = (props) => {

   return (

    <>
    
    <section id="articles">
    {
        props.cards.map((card, index) => {
            return (
                <ArticleCard
                key = {index.toString()}
                cards = {card}
                />
            )


        })
    }

    </section>
    
    
    
    </>


   )


}

export default Articles