const RowItems = (props) => {

    return (

        <>
        <div className="flex_card">
            <h2>{props.card.title}</h2>
            <p>{props.card.text}</p>
        </div>
        </>

    )


}

export default RowItems