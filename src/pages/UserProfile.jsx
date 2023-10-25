import { AuthContext } from "../context/auth.context"
import { useContext } from "react"
import PopUpMessage from "../components/PopUpMessage"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

const UserProfile = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="bg-gradient-to-t from-white to-indigo-50">
            {
                user &&
                <div>
                    <span className="text-3xl font-bold py-3 flex justify-center">User profile</span>
                    <h3 className="text-xl flex justify-center pb-2 border-b border-slate-800">Welcome to your business page, {user.name}!</h3>

                    <div className="flex flex-row justify-evenly border-b border-slate-800 py-2">
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/all-categories' className="hover:text-black transition cursor-pointer">Check services</Link>
                        </div>
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/users/update-profile' className="hover:text-black transition cursor-pointer">Update profile</Link>
                        </div>
                    </div>
                    <div className="flex px-2 py-2 grid grid-cols-2">
                        <div className="flex items-center justify-center py-2">
                            <img className="w-2/5 pb-2 rounded-3xl" src={user.profileImage} alt="profileImage" />
                        </div>
                        <div className="flex flex-col justify-center pr-20">
                            <div className="border-b border-slate-600 mb-2">
                                <h3 className="text-xl">Your name</h3>
                                <p>{user.name}</p>
                            </div>
                            <div className="border-b border-slate-600 mb-2">
                                <h3 className="text-xl">Your email</h3>
                                <p>{user.email}</p>
                            </div>
                            {
                                user.phone &&
                                <div className="border-b border-slate-600 mb-2">
                                    <h3 className="text-xl">Phone number</h3>
                                    <p>{user.phone}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <PopUpMessage task={logOut} title='Logout' />
                    </div>
                </div>
            }

        </div>
    )
}

export default UserProfile