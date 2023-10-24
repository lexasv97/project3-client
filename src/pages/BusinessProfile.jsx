import { AuthContext } from "../context/auth.context"
import { useContext } from "react"
import PopUpMessage from "../components/PopUpMessage"
import { useState, useEffect } from "react"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

const BusinessProfile = ({ allServices }) => {

    const { user, logOut } = useContext(AuthContext)

    const [services, setServices] = useState([])

    useEffect(() => {
        if (allServices.length && user) {
            console.log("All services =====>", allServices)
            console.log("User =====>", user)
            let searchedServices = allServices.filter((service) => service.user._id === user._id)
            console.log("Searched sevrices====>", searchedServices)
            setServices(searchedServices)
        }
    }, [allServices, user])

    return (
        <div className="">
            <span className="text-3xl font-bold my-3 flex justify-center">Business profile</span>

            {
                user &&
                <div>
                    <h3 className="text-xl font-normal flex justify-center">Welcome to your business page, {user.name}!</h3>

                    <div className="flex flex-row justify-evenly">
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/add-service' className="hover:text-black transition cursor-pointer">Add a service</Link>
                        </div>
                        <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                            <Link to='/users/update-profile' className="hover:text-black transition cursor-pointer">Update profile</Link>
                        </div>
                    </div>
                    <div className="">
                        <img className="rounded-3xl" src={user.profileImage} alt="profileImage" />
                    </div>

                    {services.length ?
                        <div>

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

                    <div className="flex justify-center">
                        <PopUpMessage task={logOut} title='Logout' />
                    </div>
                </div>
            }

        </div>
    )
}

export default BusinessProfile