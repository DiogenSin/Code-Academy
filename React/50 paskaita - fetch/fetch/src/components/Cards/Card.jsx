const Card = (props) => {

    return (

        <div className='card' id={props.data.id}>
          <div className='image'>
            <img src={props.data.image} alt={props.data.title} />
            <div className='data'>
              <p>{props.data.year}</p>
              <p>{props.data.IMDb}</p>
            </div>
          </div>
          <div className='info'>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <div className='change'>
              <i className='fa fa-edit'
              onClick={() => props.openChangeCard(props.data)}
              ></i>
              <i className='fa fa-trash-o'
              onClick={() => props.deleteCard(props.data.id)}
              ></i>
            </div>
          </div>
        </div>


    )

}

export default Card