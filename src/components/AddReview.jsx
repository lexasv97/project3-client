import { useState } from "react"
import { post } from "../services/authService";

const AddReview = ({ refreshService, serviceId }) => {

    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { comment, rating, serviceId };

        post(`/reviews/new/${serviceId}`, requestBody)
            .then((response) => {
                setComment("")
                setRating(0)
                refreshService(serviceId)
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <h1 className="text-xl py-2 flex justify-center">Leave a review</h1>

            <form className="flex grid grid-cols-2 gap-2 px-2 py-2" onSubmit={handleSubmit}>

                <div className="flex flex-col items-center">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        className="border border-slate-600 px-2 rounded flex w-10/12"
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        cols="25" rows="3"
                    />
                </div>
                <div className="flex grid gap-2">
                    <div className="flex justify-center items-center">
                        <label htmlFor="rating">Rating:</label>
                        <select
                            className="border border-slate-600 rounded"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className="bg-amber-500 flex justify-center w-full text-white py-2 my-2 border border-slate-600 rounded-3xl">
                        <button type="submit">
                            <span className="hover:text-black transition cursor-pointer">Add review</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddReview