import { useState } from "react"

const EditModal = (props) => {

    const [formData, setFormData] = useState({

        id: props.editData.id,
        title: props.editData.title,
        year: props.editData.year,
        IMDb: props.editData.IMDb,
        description: props.editData.description,
        image: props.editData.image

    })

    const handleInputChange = (e) => {
        switch(e.target.name){
            case 'title':
            setFormData({
                ...formData,
                title: e.target.value
            });
            break;

            case 'year':
            setFormData({
                ...formData,
                year: e.target.value
            });
            break;

            case 'imdb':
            setFormData({
                ...formData,
                IMDb: e.target.value
            });
            break;

            case 'description':
            setFormData({
                ...formData,
                description: e.target.value
            });
            break;
    
            case 'image':
            setFormData({
                ...formData,
                image: e.target.value
            });
            break;
    
          default:
            console.log('Pakeista');
        }
      }

    const update = (e) => {

    e.preventDefault();

   props.submitForm({
        id: props.editData.id,
        title: formData.title,
        year: formData.year,
        IMDb: formData.IMDb,
        description: formData.description,
        image: formData.image,
    });
    }


    return (

    <form action="" id="changeForm" className="form" onSubmit={update}>
        <i className="fa fa-close close" onClick={props.closeForm} />
        <h2>Pakeisti esamą filmą</h2>

        <input type="text" id="changeId" name="changeId" placeholder={props.editId} readOnly value={props.editData.id} hidden/>

        <label htmlFor="title">Pavadinimas:</label>
        <input type="text" id="title" name="title" placeholder="Rocky Balboa - The Eye of the Tiger" 
        onChange={handleInputChange}
        value={formData.title} />
            
        <div className="year_imdb">
            <div>
                <label htmlFor="year">Metai:</label>
                <input type="number" id="year" name="year" placeholder="2007"
                onChange={handleInputChange}
                value={formData.year} />
            </div>

            <div>
                <label htmlFor="imdb">IMDb:</label>
                <input type="text" id="imdb" name="imdb" placeholder={formData.IMDb} 
                onChange={handleInputChange}
                value={formData.IMDb} />
            </div>

        </div>

        <label htmlFor="description">Aprašymas:</label>
        <input type="text" id="description" name="description" placeholder="Naujas filmo aprašymas" 
        onChange={handleInputChange}
        value={formData.description} />

        <label htmlFor="image">Baneris:</label>
        <input type="url" id="image" name="image" placeholder="https://www.EyeOfTheTiger.com/picture.png" 
        onChange={handleInputChange}
        value={formData.image} />

        <button type="submit"
        >Pakeisti</button>
    </form>

    )


}

export default EditModal