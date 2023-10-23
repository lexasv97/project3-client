import { useState, useEffect } from "react"

const Review = ({ review, allReviews }) => {

  const [searchedReview, setSearchedReview] = useState([])

  useEffect(() => {
    if (allReviews) {
      console.log("All services =====>", allReviews)
      let thisReviews = allReviews.find((foundReview) => foundReview._id === review._id)
      setSearchedReview(thisReviews)
    }
  }, [allReviews])

  return (
    <div>
      <div>
        <img src={searchedReview.user.profileImage} alt="user-image" />
      </div>
      <div>
        <h3>{searchedReview.user.name}</h3>
        <p>{searchedReview.rating}</p>
        <p>{searchedReview.comment}</p>
      </div>
    </div>
  )
}

export default Review