import PopUpMessage from "../components/PopUpMessage"
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const UserProfile = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>User profile</h1>

            {
                user &&
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <img className="rounded-full" src={user.profileImage} alt="profileImage" />

                    <PopUpMessage task={logOut} title='Logout' />
                </div>

                
                
            }

        </div>
    )
}

export default UserProfile