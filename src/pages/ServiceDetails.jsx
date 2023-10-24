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
      })
      .catch((err) => console.log(err));
  }

  const isOwner = () => {
    console.log("Is owner =====>", user._id, service.user, service)
    return user._id === service.user

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

  return (
    <div className="">
      {
        service &&
        <div className="flex flex-col">
          <div className="bg-indigo-50">
            <h1 className="text-3xl font-bold py-2 flex justify-center border-b border-slate-800 ">Service Details</h1>

            {
              isOwner() &&
              <div className="flex flex-row justify-evenly">
                <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                  <Link to={`/services/update/${serviceId}`} className="hover:text-black transition cursor-pointer">Update service</Link>
                </div>
                <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
                  <button onClick={handleDelete} className="hover:text-black transition cursor-pointer">Delete service</button>
                </div>
              </div>
            }


            <div className="flex justify-center px-2 py-2">
              <div className="w-2/5">
                <img className="w-full" src={service.image} alt="service-image" />

                <MapContainer />
                <p>{service.location}</p>
              </div>
              <div className="w-2/5">
                <h3>{service.name}</h3>
                <p>{service.category}</p>
                <p>{service.description}</p>

                {/* {
                !user.isBusiness && */}

                <div className="border-t border-slate-800">
                  <AddReview refreshService={getService} serviceId={serviceId} />
                </div>
                {/* } */}

              </div>
            </div>
          </div>

          <div className="border-t border-slate-800">
            {
              service.reviews.length ?

                <div>
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