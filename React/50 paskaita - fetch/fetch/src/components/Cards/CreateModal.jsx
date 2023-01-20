const CreateModal = (props) => {


    const kurtiNauja = (e) => {
        e.preventDefault()
        props.createNew(e)
    }

    return (

    <form action="" id="createForm" className="form" onSubmit={kurtiNauja}>
        <i className="fa fa-close close" onClick={props.closeForm} />
        <h2>Pridėti naują filmą</h2>

        <label htmlFor="title">Pavadinimas:</label>
        <input type="text" id="title" name="title" placeholder="Rocky Balboa - The Eye of the Tiger" required/>
            
        <div className="year_imdb">
            <div>
                <label htmlFor="year">Metai:</label>
                <input type="number" id="year" name="year" placeholder="2007" required/>
            </div>

            <div>
                <label htmlFor="imdb">IMDb:</label>
                <input type="text" id="imdb" name="imdb" placeholder="7.5" required/>
            </div>

        </div>

        <label htmlFor="description">Aprašymas:</label>
        <input type="text" id="description" name="description" placeholder="Naujas filmo aprašymas" required/>

        <label htmlFor="image">Baneris:</label>
        <input type="url" id="image" name="image" placeholder="https://www.EyeOfTheTiger.com/picture.png" required/>

        <button 
        type="submit"
        >Pakeisti</button>
    </form>

    )


}

export default CreateModal