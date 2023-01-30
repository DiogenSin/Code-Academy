import LogoutBtn from "../atoms/LogoutBtn"
import UserAvatar from "../atoms/UserAvatar"
import UserName from "../atoms/UserName"

const UserInfoLine = () => {

    return (
        <>
        <div id="userInfo">
            <div>
                <UserName />
                <LogoutBtn />
            </div>
        <UserAvatar />
        </div>

        </>

    )
}

export default UserInfoLine