// import Aos from "aos";
// import { useEffect } from "react";

// const ReviewCard = ({review, user}) => {

//     useEffect(()=> {
//         Aos.init({duration: 1000});
//     }, [])

//     return (
//         <div className="p-20 flex flex-col items-center justify-center">
//             <div data-aos="fade-right" className="">
//             <div className="flex flex-row">
//                 <img src={user.profileImage} alt="image-profile" />
//                 <h3>{user.name}</h3>
//                 <h3>Rating: {review.rating}</h3>
//             </div>
//             <div className="">
//                 <p>Comment: {review.comment}</p>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default ReviewCard

import Aos from "aos";
import { useEffect } from "react";

const ReviewCard = ({ review }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className="flex flex-col items-center">
            <div data-aos="fade-right" className="bg-indigo-50 rounded-3xl mx-4 mt-4 px-4 border border-slate-600 w-3/4">
                <div className="flex items-center py-2 space-x-4 pl-10">
                    <div className="w-2/12 flex justify-center">
                        <img class="w-12 h-12 rounded-full" src={review.user.profileImage} alt="image-profile" />
                    </div>
                    <div className="flex flex-col juastify-center pl-10">
                        <div className="space-y-1 font-medium">
                            <p>{review.user.name}</p>
                        </div>
                        <div>
                            <span>Rating: {review.rating}</span>
                        </div>
                        <div className="">
                            <p class="mb-2 text-gray-500">Comment: {review.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard