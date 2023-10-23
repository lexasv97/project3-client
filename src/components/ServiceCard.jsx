import { Link } from "react-router-dom"
import { get } from "../services/authService"
import { useState, useEffect } from "react"
import { MdReviews } from "react-icons/md"

const ServiceCard = ({ service }) => {

  const [allReviews, setAllReviews] = useState([])
  const [searchedReviews, setSearchedReviews] = useState([])

  const getAllReviews = () => {
    get('/reviews')
      .then((response) => {
        console.log("Reviews ==>", response.data)
        setAllReviews(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllReviews()
  }, [])

  return (
    <div className="flex justify-center grid grid-cols-3 gap 2 px-2 bg-indigo-50">

      <div>
      <img src={service.image} alt="service-image" />
      </div>

      <div className="flex flex-col justify-start">
        
        <h3 className="text-xl font-normal">{service.name}</h3>
        <p>{service.location}</p>
        <Link to={`/services/${service._id}`}>
          <span className="font-bold border-b-2 border-black hover:text-white hover:border-white transition cursor-pointer">Details</span>
        </Link>
      </div>

      <div>
        {service.reviews}
      </div>

    </div>
  )
}

export default ServiceCard