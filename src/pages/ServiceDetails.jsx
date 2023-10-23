import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddReview from "../components/AddReview";
import { get } from "../services/authService";
import { useContext } from "react";
import PopUpMessage from "../components/PopUpMessage";
import { AuthContext } from "../context/auth.context";

const ServiceDetails = ({ allServices }) => {

  const { user } = useContext(AuthContext);

  const [service, setService] = useState("")

  const { serviceId } = useParams()

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

  return (
    <div style={{ height: '70vh' }} className="bg-indigo-50">
      <h1 className="text-3xl font-bold py-2 flex justify-center">Service Details</h1>
      {
        service &&
        <div className="border-t border-slate-800 flex flex-col">

          {
            (user._id === service.user._id) &&
          <div className="flex flex-row justify-evenly">
            <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
              <span className="hover:text-black transition cursor-pointer">Update service</span>
            </div>
            <div className="bg-amber-500 flex justify-center w-1/4 text-white py-2 my-2 border border-slate-600 rounded-3xl">
              <span className="hover:text-black transition cursor-pointer">Delete service</span>
            </div>
          </div>
          }

          
          <div className="flex justify-center px-2 py-2">
            <div className="w-2/5">
              <img className="w-full" src={service.image} alt="service-image" />
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

          {/* {
            (service.user._id === user._id) &&

            <div className="text-3xl font-bold py-2 flex justify-center">
              <p>Delete service</p>
              <PopUpMessage title='DELETE POPUP' />
            </div>
          } */}


          <div className="border-t border-slate-800">
            {
              service.reviews.length ?

                service.reviews.map((review) => {
                  <div>
                    <h3>Rating: {review.rating}</h3>
                    <p>Comment: {review.comment}</p>
                    <p>by: {review.user.name}</p>
                  </div>
                })

                : <p className="py-2 flex justify-center">No reviews yet</p>
            }
          </div>

        </div>
      }
    </div>
  )
}

export default ServiceDetails