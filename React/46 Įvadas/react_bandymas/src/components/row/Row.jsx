import RowItems from "./RowItems"

const Row = (props) => {

    return (
        
        <>
        
        <div id="flex_row">

        {

            props.cards.map((card, index) => {

                return (

                    <RowItems 
                        key = {index.toString()}
                        card={card}
                    />

                )

            })


        }

        </div>
        
        
        
        </>


    )

}

export default Row