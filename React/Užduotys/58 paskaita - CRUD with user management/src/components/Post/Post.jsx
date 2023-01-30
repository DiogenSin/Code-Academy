import UserContext from "../../contexts/UserContext";
import PostContext from "../../contexts/PostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Post = ({data}) => {

  const { users, loggedInUser } = useContext(UserContext);
  const { deletePost } = useContext(PostContext);

  const postOwner = users.find(user => user.id === data.userId);

  return (
    <div className="post">
      <div className="imgTitle">
      <img
        src={postOwner.avatar}
        alt="user avatar"
        style={{width:'30px', height:'auto'}}
      />
      <span>{postOwner.userName}</span>
      </div>


      {
        loggedInUser && loggedInUser.id === postOwner.id &&
        <>
        <div className="managePost">
          <button id="delete" onClick={() => deletePost(data.id)}>Delete</button>
          <button id="edit"><Link to={`/editPost/${data.id}`}>Edit</Link></button>
        </div>

        </>
      }
      <hr />
      <h1>{data.heading}</h1>
      <p>{data.content}</p>
    </div>
  );
}
 
export default Post;