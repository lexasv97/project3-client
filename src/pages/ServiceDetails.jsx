import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AddReview from "../components/AddReview";
import { get, axiosDelete } from "../services/authService";
import { useContext } from "react";
import PopUpMessage from "../components/PopUpMessage";
import { AuthContext } from "../context/auth.context";
import MapContainer from "../components/MapContainer";
import ReviewCard from "../components/ReviewCard";

const ServiceDetails = ({ allServices }) => {

  const { user } = useContext(AuthContext);

  const [service, setService] = useState(null)

  const { serviceId } = useParams()

  const navigate = useNavigate()

  const getService = (id) => {

    get(`/services/${id}`)
      .then((response) => {
        console.log("Found project ==>", response.data)
        console.log("serviceId from params =====>", serviceId)
        setService(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {

    getService(serviceId)

  }, [])

  const handleDelete = () => {

    axiosDelete(`/services/${serviceId}`)
      .then((response) => {
        navigate('/all-categories')
        window.location.reload()
      })
      .catch((err) => console.log(err));
  }

  const isOwner = () => {
    // console.log("Is owner =====>", user._id, service.user, service)
    return user && user._id === service.user

  }

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

  const isUser = () => {
    return user && !user.isBusiness
  }

  return (
    <div className="">
      {
        service &&
        <div className="flex flex-col">
          <div className="bg-indigo-50">
            <h1 className="text-3xl font-bold py-2 flex justify-center border-b border-slate-800 ">Service Details</h1>

            {
              isOwner() &&
              <div className="flex flex-row justify-evenly border border-slate-800 grid grid-cols-2 px-10">
                <div className="flex justify-center">
                  <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
                    <Link to={`/services/update/${serviceId}`} className="hover:text-black transition cursor-pointer">Update service</Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <PopUpMessage task={handleDelete} title='Delete service' />
                </div>
              </div>
            }

            <div className="flex px-2 py-2">
              <div className="flex flex-col items-center">
                <img className="w-4/5 pb-2 rounded-3xl" src={service.image} alt="service-image" />

                <p>{service.location}</p>
              </div>
              <div className="">
                <h3 className="text-xl">{service.name}</h3>
                <Link to={`/services/category/${service.category.toLowerCase()}`}>
                  <span className="border-b text-gray-500 border-grey-500 hover:text-indigo-500 hover:border-indigo-500 transition cursor-pointer">{service.category}</span>
                </Link>
                <p>{service.description}</p>

                {
                  isUser() &&

                  <div className="border-t border-slate-800">
                    <AddReview refreshService={getService} serviceId={serviceId} />
                  </div>
                }

              </div>
            </div>
          </div>
          <div className="flex justify-center py-4 bg-gradient-to-t from-white to-indigo-50 border-t border-slate-800">
            <MapContainer />
          </div>
          <div className="border-t border-slate-800">
            {
              service.reviews.length ?

                <div className="pb-4">
                  <div className="flex items-center justify-center py-2 border-b border-slate-800">
                    <div className="flex flew-row justify-evenly w-1/2">
                      <div>
                        <h3 className="text-xl">Reviews</h3>
                      </div>

                      <div className="flex flex-row gap-2"><span>Average rating:</span>
                        <span>
                          {
                            averageRating(service.reviews)
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  {service.reviews.map((review) => {
                    return (
                      <div>
                        <ReviewCard key={review._id} review={review} />
                      </div>
                    )
                  })}
                </div>

                : <p className="py-2 flex justify-center">No reviews yet</p>
            }
          </div>

        </div>
      }
    </div>
  )
}

export default ServiceDetails