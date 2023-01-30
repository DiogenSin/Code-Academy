import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigation('/');
  }

  return (
    <div id="userInfo">
      <div >
        <Link to="/">HOME</Link>
      </div>
      <div id="userDetails">
        {
          (loggedInUser.level === 'admin') && <Link to="/users">Manage Users</Link>
        }
        <Link to="/newPost">Create</Link>
        {/* <button onClick={() => logOutUser()}>LogOut</button> */}
        <Link id="userData" to="/user">
          <span>{loggedInUser.userName}</span>
          <button onClick={() => logOutUser()}>LogOut</button>
          <img
            src={loggedInUser.avatar}
            alt="user avatar"
          />
        </Link>
      </div>
    </div>
  );
}
 
export default UserInfo;