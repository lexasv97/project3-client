
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>User profile</h1>

            {
                user &&
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <img src={user.profileImage} alt="profileImage" />
                </div>
                
            }

        </div>
    )
}

export default UserProfile