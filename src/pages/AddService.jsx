import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { post } from "../services/authService";

const AddService = ({ getAllServices, updateServices }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = { name, description, image, category, location }

        post('/services/new', body)
            .then((response) => {
                console.log("New Service =====>", response.data)
                updateServices(response.data)
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
            <div className="flex flex-col items-center justify-center w-3/4 bg-indigo-200 border border-slate-600 rounded-3xl">
                <h1 className="text-3xl font-bold py-2 flex justify-center">Add new service</h1>

                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-3/5">
                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <select
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                            <option hidden default value="" disabled="disabled">Select a category</option>
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
                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="image"
                            type="text"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="location"
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <textarea
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="description"
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="6"
                            required
                        />
                    </div>
                    <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 mt-2 mb-4 border border-slate-600 rounded-3xl">
                        <button className="hover:text-black transition cursor-pointer" type='submit'>Create a service</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddService