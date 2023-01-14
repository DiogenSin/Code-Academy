import Article from "./article"

const BottomSection = (props) => {

    return (

        <>

        <section id="grid">
            {

                props.articles.map((article, index) => {
                    return(
                        <>
                           <Article
                            key = {index.toString()}
                            articles = {article} />
                        
                        </>             
                    )
                })



            }
        <div id="navigation">
            <h2>Navigation</h2>
            <ul>
              <li><a href="#index.html">Home</a></li>
              <li><a href="#index.html">Product</a></li>
              <li><a href="#index.html">Company</a></li>
              <li><a href="#index.html">Contact</a></li>
            </ul>
        </div>
        </section>        
               
        </>

    )

}

export default BottomSection