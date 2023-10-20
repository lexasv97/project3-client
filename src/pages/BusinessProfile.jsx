import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

const UserProfile = () => {

    const { business } = useContext(AuthContext) // DOESN'T WORK YET

    return (
        <div>
            <h1>Profile</h1>

            {
                business &&

                <h2>Welcom, {business.name}!</h2>
            }

        </div>
    )
}

export default UserProfile