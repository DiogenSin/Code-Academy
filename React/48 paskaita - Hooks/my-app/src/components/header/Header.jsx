const Header = (props) => { // 3 pagal poreikį sukuriamas header komponentas

    const createAnArticle = () => {
       
        console.log(props)
        
    }    

    return (
        <>
        <header>
            <img src={props.data[0].logo} alt='Logo' />
            <nav>
                <button 
                className={props.data[0].addArticle}
                onClick={createAnArticle}
                />
                <p>{props.data[0].count}</p>
                <p>{props.data[0].name}</p>
                <img src={props.data[0].avatar} alt={props.data[0].name} />
            </nav>
        </header>
        </>
    )


}

export default Header