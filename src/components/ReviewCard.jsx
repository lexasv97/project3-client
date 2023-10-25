import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import PopUpMessage from "./PopUpMessage";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ReviewCard = ({ review }) => {

    const { user } = useContext(AuthContext)

    console.log("Review line 11 =====>", review)
    console.log("USER line 12 =====>", user)

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    const isReviewOwner = () => {
        return user && user._id === review.user._id
    }

    const handleDeleteReview = () => {
        axiosDelete(`/reviews/${review._id}`)
            .then((response) => {
                navigate('/all-categories')
                window.location.reload()
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="flex flex-col items-center">
            <div data-aos="fade-right" className="bg-indigo-50 rounded-3xl mx-4 mt-4 px-4 border border-slate-600 w-3/4">
                <div className="flex items-center py-2 space-x-4 pl-10">
                    <div className="w-2/12 flex justify-center">
                        <img className="w-12 h-12 rounded-full" src={review.user.profileImage} alt="image-profile" />
                    </div>
                    <div className="flex flex-col juastify-center pl-10 w-4/6">
                        <div className="space-y-1 font-medium">
                            <p>{review.user.name}</p>
                        </div>
                        <div>
                            <span>Rating: {review.rating}</span>
                        </div>
                        <div className="">
                            <p className="mb-2 text-gray-500">Comment: {review.comment}</p>
                        </div>
                    </div>
                    {
                        isReviewOwner() &&
                        <div className="flex justify-center w-1/2">
                            <PopUpMessage task={handleDeleteReview} title='Delete' />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ReviewCard