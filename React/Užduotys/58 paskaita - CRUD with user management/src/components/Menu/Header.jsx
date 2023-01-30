import UserInfo from '../User/UserInfo';
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <>
    <header>

    {
        loggedInUser ? 
        <UserInfo /> :
        <div className="loginRegister">
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/register'>Register</Link>
        </div>
      }
    </header>

      <Outlet />



    </>
  );
}
 
export default Header;