import Logo from "../atoms/Logo";
import LoginField from "../molecules/LoginField";
import Menu from "../molecules/Menu";
import UserInfoLine from "../molecules/UserInfoLine";
import { useContext } from "react";
import MainContexts from "../contexts/MainContexts";

const Header = () => {

    const {loginStatus} = useContext(MainContexts)

    return (
        <>
        <header>
        {
            loginStatus ?
            <>
                <Logo />
                <Menu />      
                <UserInfoLine />
            </>
            :
            <>
                <Logo /> 
                <LoginField />
            </>
        }
        </header>
        </>
        
    )
}

export default Header