import { Link } from "react-router-dom"

const Cards = ({data}) => {
console.log(data)
return (

    <>
        <h1>Cards</h1>
        <ul>
            {
                data.map(card => {
                    return <li><Link 
                        to={`/cards/card/${data.id}`}
                        key={data.id}
                        
                        >Card {card.id}</Link></li>
                })
            }
            
            {/* <li><Link to='/cards/card/2'>Card 2</Link></li>
            <li><Link to='/cards/card/3'>Card 3</Link></li> */}
        </ul>
    </>


)

}

export default Cards