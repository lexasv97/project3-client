import { useState, useEffect } from "react"
import { Typography, Avatar, Rating } from "@material-tailwind/react";

// const Review = ({ review, allReviews }) => {

//   const [searchedReview, setSearchedReview] = useState([])

//   useEffect(() => {
//     if (allReviews) {
//       console.log("All services =====>", allReviews)
//       let thisReviews = allReviews.find((foundReview) => foundReview._id === review._id)
//       setSearchedReview(thisReviews)
//     }
//   }, [allReviews])

//   return (
//     <div>
//       <div>
//         <img src={searchedReview.user.profileImage} alt="user-image" />
//       </div>
//       <div>
//         <h3>{searchedReview.user.name}</h3>
//         <p>{searchedReview.rating}</p>
//         <p>{searchedReview.comment}</p>
//       </div>
//     </div>
//   )
// }

// export default Review
 
const Review = ({review}) => {

    const [searchedReview, setSearchedReview] = useState([])

  useEffect(() => {
    if (allReviews) {
      console.log("All services =====>", allReviews)
      let thisReviews = allReviews.find((foundReview) => foundReview._id === review._id)
      setSearchedReview(thisReviews)
    }
  }, [allReviews])

  return (
    <div className="px-8 text-center">
      <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
        &quot;{searchedReview.comment}&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4">
        Tania Andrew
      </Typography>
      <Rating unratedColor="white" ratedColor="amber" value={searchedReview.rating} readonly />
    </div>
  );
}

export default Review