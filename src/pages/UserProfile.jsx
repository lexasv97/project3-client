import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Profile</h1>

            {
                user &&

                <h2>Welcom, {user.name}!</h2>
            }

        </div>
    )
}

export default UserProfile