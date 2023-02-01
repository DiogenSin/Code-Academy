import MainContexts from "../contexts/MainContexts"
import { useContext } from "react"
import UserCard from "../organisms/UserCard"

const Users = () => {

    const { userList } = useContext(MainContexts)

    const nonAdminUsers = userList.filter(user => user.role !== 'admin')

    return (
        <>  
            <h1>Users</h1>
            <section id="users">

                {
                    nonAdminUsers.map(user =>
                        <UserCard 
                        key={user.id}
                        data={user}
                        />
                    )
                }
            </section>

        </>
    )
}

export default Users