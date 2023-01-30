const UserCard = ({data, banOrUnbanUser}) => {
    return (
      <div>
        <img
          src={data.avatar}
          alt="user avatar"
        />
        <span>{data.userName}</span>
        <button onClick={() => banOrUnbanUser(data.id)}>
          {data.isBanned ? 'UnBan' : 'Ban'}
        </button>
      </div>
    );
  }
   
  export default UserCard;