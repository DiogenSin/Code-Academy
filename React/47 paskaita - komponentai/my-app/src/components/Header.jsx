const Header = (props) => {
    console.log(props.elements[0].title)
    return (

        <>
        <header>
            <div>
                <h1>{props.elements[0].title}</h1>
                <p>{props.elements[0].p1}</p>
                <p>{props.elements[0].p2}</p>
                <p>{props.elements[0].btnTxt}</p>
            </div>
        </header>
        </>
    )

}

export default Header