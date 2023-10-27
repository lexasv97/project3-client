import { AuthContext } from "../context/auth.context"
import { useContext } from "react"
import PopUpMessage from "../components/PopUpMessage"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

const BusinessProfile = ({ allServices, setSearchReady }) => {

    const { user, logOut } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        if (allServices.length && user) {
            // console.log("All services =====>", allServices)
            //  console.log("User =====>", user)
            let searchedServices = allServices.filter((service) => service.user._id === user._id)
            // console.log("Searched sevrices====>", searchedServices)
            setServices(searchedServices)
            setSearchReady(true)
        }
    }, [allServices, user])

    return (
        user &&
        <div className="">
            <div className="flex flex-col">
                <span className="text-3xl font-bold py-3 flex justify-center">Business profile</span>
                <h3 className="text-xl flex justify-center pb-2 border-b border-slate-800">Welcome to your business page, {user.name}!</h3>

                <div className="flex border-b border-slate-800 grid grid-cols-1 md:grid-cols-2 px-10">
                    <div className="flex justify-center">
                        <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/add-service' className="hover:text-black transition cursor-pointer">Add a service</Link>
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
                        <img className="w-1/5 md:w-2/5  pb-2 rounded-3xl" src={user.profileImage} alt="profileImage" />
                    </div>
                    <div className="flex flex-col justify-center pr-10 w-3/4">
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

                {services.length ?
                    <div className="border-t border-slate-800">

                        <div>
                            <h1 className="text-3xl font-bold py-2 flex justify-center"> Your services</h1>
                        </div>
                        {
                            services.map((service) => {
                                return (
                                    <div key={service._id}>
                                        <ServiceCard service={service} />
                                    </div>
                                )
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
        </div>
    )
}

export default BusinessProfile