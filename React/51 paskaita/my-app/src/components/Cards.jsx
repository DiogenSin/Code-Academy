import { Link } from "react-router-dom"

const Cards = ({data}) => {
console.log(data)
return (

    <>
        <h1>Cards</h1>
        <ul>
            {
                data.map(card => {
                    return 
                    <li>
                        <Link 
                        to={`/cards/card/${data.id}`}
                        key={data.id}
                        > Card {card.id}
                        </Link>
                    </li>
                })
            }
        </ul>
    </>


)

}

export default Cards