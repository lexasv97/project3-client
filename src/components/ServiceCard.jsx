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

  const averageRating = (reviews) => {

    let sum = 0
    reviews.map((review) => {
      sum += review.rating
    })
    return (
      <div>
        {sum / reviews.length}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center border-t border-slate-800">
      <div data-aos="fade-right" className="flex justify-center px-2 bg-indigo-50 rounded-3xl mx-4 mt-4 px-4 border border-slate-600 w-10/12 flex items-center py-2 space-x-4 grid grid-cols-3 gap-2">

        <div className="flex justify-center items-center">
          <img src={service.image} alt="service-image" />
        </div>

        <div className="flex flex-col justify-start">

          <h3 className="text-xl font-normal">{service.name}</h3>
          <p>{service.location}</p>
          <Link to={`/services/${service._id}`}>
            <span className="font-bold border-b-2 border-black hover:text-white hover:border-white transition cursor-pointer">Details</span>
          </Link>
        </div>

        {
          service.reviews.length ?
            <div className="flex justify-center items-center">
              <span>Average rating:</span>
              {
                averageRating(service.reviews)
              }
            </div>
            : <p>No rating yet</p>
        }
      </div>
    </div>
  )
}

export default ServiceCard