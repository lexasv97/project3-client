import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ allServices }) => {

  const [service, setService] = useState("")

  const { serviceId } = useParams()

  useEffect(() => {
    allServices.find((service) => service._id === serviceId)
      .then((response) => {
        setService(response.datas)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [serviceId, allServices])

  return (
    <div>
      <h1>Service Details</h1>
      {
        service &&
        <div>
          <h3>{service.name}</h3>
          <img src={service.image} alt="service-image" />
          <p>{service.category}</p>
          <p>{service.location}</p>
          <p>{service.description}</p>
        </div>
      }
    </div>
  )
}

export default ServiceDetails