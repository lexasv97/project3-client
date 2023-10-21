import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const BusinessProfile = () => {
    
    const { user, logOut } = useContext(AuthContext)

    return (
        <div>
            <h1>Business profile</h1>

            {
                user &&
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <img src={user.profileImage} alt="profileImage" />
                    <button onClick={logOut}>logout</button>
                </div>
            }

        </div>
    )
}

export default BusinessProfile