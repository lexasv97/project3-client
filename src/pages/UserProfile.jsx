import { AuthContext } from "../context/auth.context"
import { useContext } from "react"
import PopUpMessage from "../components/PopUpMessage"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

const UserProfile = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="">
            <span className="text-3xl font-bold my-3 flex justify-center">User profile</span>

            {
                user &&
                <div>
                    <h3 className="text-xl font-normal flex justify-center">Welcome to your user page, {user.name}!</h3>

                    <div className="flex flex-row justify-evenly">
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/all-services' className="hover:text-black transition cursor-pointer">Check services</Link>
                        </div>
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/users/update-profile' className="hover:text-black transition cursor-pointer">Update profile</Link>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-3xl" src={user.profileImage} alt="profileImage" />
                    </div>
                    <div>
                        <PopUpMessage task={logOut} title='Logout' />
                    </div>
                </div>



            }

        </div>
    )
}

export default UserProfile