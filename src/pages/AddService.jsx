import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { post } from "../services/authService";

const AddService = ({ getAllServices, updateServices }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
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
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Add new service</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
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
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type='submit'>Create a service</button>
            </form>

        </div>
    )
}

export default AddService