const UserCard = ({data}) => {

    return (

        <>
        <div className="userCard">
            <div className="upper">
                <img src={data.avatar} alt={data.username} />
            </div>
            <div className="lower">
                <h3>{data.username}</h3>
                <p>Role: {data.role}</p>
                <p>ID: {data.id}</p>
                <div className="ban">
                    <i className="fa fa-ban"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserCard

// onClick={() => deletePost(data.id)}