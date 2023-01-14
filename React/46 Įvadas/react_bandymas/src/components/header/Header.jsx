import HeaderList from "./HeaderList"

const Header = (props) => {

    return (
        <>
        <header>
          <a href="#index.html"><img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/image9.png" alt="" /></a>
          <nav>
            <ul>         
                { props.menu.map((menuItem, index) => {
                    return(
                        <HeaderList
                            key={index.toString()}
                            menu={menuItem}
                        />
                    )
                }) }
            </ul>
          </nav>
        </header>
        </>
    )
}

export default Header