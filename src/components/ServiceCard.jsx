import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ServiceCard = ({ service }) => {
  const [loading, setLoading] = useState(true)

  const averageRating = (reviews) => {
    let sum = 0
    reviews.map((review) => {
      sum += review.rating
    })
    return (
      <div>
        {Math.round((sum / reviews.length) * 100) / 100}
      </div>
    )
  }
  useEffect(() => {
    console.log("CARD ===>", service)
    setLoading(false)
  },[service])


  return (
    <>
    {!loading && <div className="flex flex-col items-center">
      <div className="flex justify-center px-2 bg-indigo-50 rounded-3xl mx-4 mt-4 px-4 border border-slate-600 w-10/12 flex items-center py-2 space-x-4 grid grid-cols-3 gap-2">
        {
          service ?
            (<>
              <div className="flex justify-center items-center">
                <img className="rounded-3xl w-3/5" src={service.image} alt="service-image" />
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
                  <div className="flex justify-center items-center pr-10">
                    <span className="flex flex-row gap-2"> <span>Average rating:</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-warning text-amber-400">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd" />
                      </svg>
                      <span>
                        {
                          averageRating(service.reviews)
                        }
                      </span>
                    </span>
                  </div>
                  : <p>No rating yet</p>
              }
            </>)
            : (<p>Loading...</p>)
        }
      </div>
    </div>}
    </>
  )
}

export default ServiceCard