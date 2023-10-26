import { get, put } from "../services/authService"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import LocationForm from "../components/LocationForm";

const UpdateService = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate()

    const { serviceId } = useParams()

    useEffect(() => {
        get(`/services/${serviceId}`)
            .then((response) => {
                const thisService = response.data
                setName(thisService.name)
                setDescription(thisService.description)
                setImage(thisService.image)
                setCategory(thisService.category)
                setLocation(thisService.location)
            })
            .catch((error) => console.log(error));
    }, [serviceId])

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = { name, description, image, category, location }

        put(`/services/${serviceId}`, body)
            .then((response) => {
                //console.log("New Service =====>", response.data)
                setName("")
                setDescription("")
                setImage("")
                setCategory("")
                setLocation("")
                navigate(-1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{ height: '70vh' }} className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center w-10/12 md:w-3/4 bg-indigo-200 border border-slate-600 rounded-3xl">
                <h1 className="text-3xl font-bold py-2 flex justify-center">Update service</h1>

                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-4/5 md:w-3/5">
                    <div className="flex items-center justify-center my-2 w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center my-2 w-full">
                        <select
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value={"Construction"}>Construction</option>
                            <option value={"Delivery"}>Delivery</option>
                            <option value={"Cleaning"}>Cleaning</option>
                            <option value={"IT-services"}>IT services</option>
                            <option value={"Photo-video"}>Photo/video</option>
                            <option value={"Moving"}>Moving</option>
                            <option value={"Events"}>Events</option>
                            <option value={"Design"}>Design</option>
                            <option value={"Beauty"}>Beauty</option>
                            <option value={"Law-services"}>Law services</option>
                            <option value={"Appliance-Repair"}>Appliance Repair</option>
                            <option value={"Design"}>Design</option>
                            <option value={"Catering"}>Catering</option>
                            <option value={"Auto-services"}>Auto services</option>
                            <option value={"Personal-assistance"}>Personal assistance</option>
                            <option value={"Child-care"}>Child care</option>
                            <option value={"Junk-removal"}>Junk removal</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center my-2 w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="image"
                            type="text"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center my-2 w-full">
                        <textarea
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="description"
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="6"
                        />
                    </div>
                    <LocationForm />
                    <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 mt-2 mb-4 border border-slate-600 rounded-3xl">
                        <button className="hover:text-black transition cursor-pointer" type='submit'>Update service</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateService