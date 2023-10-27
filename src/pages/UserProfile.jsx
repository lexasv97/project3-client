import { AuthContext } from "../context/auth.context"
import { useContext } from "react"
import PopUpMessage from "../components/PopUpMessage"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

const UserProfile = ({ allReviews }) => {

    const { user, logOut } = useContext(AuthContext)

    const [userReviews, setUserReviews] = useState([])

    useEffect(() => {
        if (allReviews.length && user) {
            //console.log("All reviews =====>", allReviews)
            // console.log("User =====>", user)
            let searchedReviews = allReviews.filter((review) => review.user._id === user._id)
            //console.log("Searched reviews====>", searchedReviews)
            setUserReviews(searchedReviews)
        }
    }, [allReviews, user])

    return (
        <div className="">
            {
                user &&
                <div>
                    <span className="text-3xl font-bold py-3 flex justify-center">User profile</span>
                    <h3 className="text-xl flex justify-center pb-2 border-b border-slate-800">Welcome to your business page, {user.name}!</h3>

                    <div className="flex border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 px-10">
                        <div className="flex justify-center">
                            <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
                                <Link to='/all-categories' className="hover:text-black transition cursor-pointer">Check services</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
                                <Link to='/users/update-profile' className="hover:text-black transition cursor-pointer">Update profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row px-2 py-2">
                        <div className="flex items-center justify-center py-2">
                            <img className="w-1/5 md:w-2/5 pb-2 rounded-3xl" src={user.profileImage} alt="profileImage" />
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
                                    <p>+{user.phone}</p>
                                </div>
                            }
                        </div>
                    </div>

                    {userReviews.length ?
                        <div className="border-t border-slate-800">

                            <div>
                                <h1 className="text-3xl font-bold py-2 flex justify-center"> Your reviews</h1>
                            </div>
                            {
                                userReviews.map((review) => {
                                    return (<ReviewCard key={review._id} review={review} />)
                                })
                            }
                        </div>
                        : <p>No added services yet</p>
                    }
                    <div className="flex justify-center border-t border-slate-800">
                        <div className="flex justify-center w-full md:w-1/2">
                            <PopUpMessage task={logOut} title='Logout' />
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserProfile