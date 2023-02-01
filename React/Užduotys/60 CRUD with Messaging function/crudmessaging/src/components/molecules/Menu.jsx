import { NavLink } from 'react-router-dom'
import MainContexts from '../contexts/MainContexts'
import { useContext } from 'react'

const Menu = () => {

    const { loggedInUser } = useContext(MainContexts)

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Pagrindinis</NavLink></li>
                    <li><NavLink to="/favourites">Mėgiamiausi</NavLink></li>
                    <li><NavLink to="/chat">Pokalbiai</NavLink></li>
                    <li><NavLink to="/profile">Profilis</NavLink></li>
                    
                    {loggedInUser.role === 'admin' ? <li><NavLink to="/users">Vartotojai</NavLink></li> : null}
                </ul>
            </nav>        
        </>

    )
}

export default Menu