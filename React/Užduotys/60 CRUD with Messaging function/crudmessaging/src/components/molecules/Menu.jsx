import {Routes, Route, NavLink} from 'react-router-dom'
import Chat from '../pages/Chat'
import Favourites from '../pages/Favourites'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const Menu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Pagrindinis</NavLink></li>
                    <li><NavLink to="/favourites">Mėgiamiausi</NavLink></li>
                    <li><NavLink to="/chat">Pokalbiai</NavLink></li>
                    <li><NavLink to="/profile">Profilis</NavLink></li>
                </ul>
            </nav>        
        </>

    )
}

export default Menu