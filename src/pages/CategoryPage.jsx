import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const CategoryPage = ({ allServices }) => {

    const [services, setServices] = useState([])

    const { thisCategory } = useParams()

    useEffect(() => {
        if (allServices) {
            console.log("All services =====>", allServices)
            let searchedServices = allServices.filter((service) => service.category.toLowerCase() === thisCategory.toLowerCase())
            console.log("Searched services ====>", searchedServices)
            setServices(searchedServices)
        }
    }, [thisCategory, allServices])

    // const deleteService = (id) => {
    //     let deleted = allServices.filter((service) => service._id !== id)
    //     setServices(deleted)
    // }

    return (
        <div className="pb-4">
            {
                services.length ?

                    <div>
                        <h1 className="text-3xl font-bold py-2 flex justify-center bg-indigo-50 border-b border-slate-800">{thisCategory[0].toUpperCase() + thisCategory.slice(1)}</h1>
                        <div className="flex items-center justify-center py-2">
                            <h3 className="text-xl">Results</h3>

                        </div>
                        {
                            services.map((service) => {
                                return (
                                    <ServiceCard key={service._id} service={service} />
                                )
                            })
                        }
                    </div>
                    : <p>No services</p>
            }
        </div>
    )
}

export default CategoryPage