const Article = (props) => { // 3 pagal poreikį sukuriamas article komponentas
    const check = () => {
        console.log('check passed')
    }
    return (
        
        <>
                <article
                onClick={() => props.handleClick(props.id)} // 7. Pridedamas onClick event`as jam nurodant pradėti 5 žingsnyje pridėtą funkciją argumentuose nurodant elemento id.
                className={props.data.theme}>
                    <img src={props.data.img} alt={props.data.title} />
                    <h2>{props.data.title}</h2>
                    <p>{props.data.p1}</p>
                    <p>{props.data.p2}</p>
                    <p>{props.data.p3}</p>
                </article>

        </>
    )

}

export default Article