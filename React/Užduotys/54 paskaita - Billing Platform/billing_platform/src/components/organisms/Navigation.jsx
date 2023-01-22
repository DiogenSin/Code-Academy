import { NavLink } from "react-router-dom"

const Navigation = () => {

    return (
    <header>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/edit'>Edit</NavLink></li>
                <li><NavLink to='/add'>Add</NavLink></li>
            </ul>
        </nav>
    </header>
    )

}

export default Navigation