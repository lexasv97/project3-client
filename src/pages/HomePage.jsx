import { Link } from "react-router-dom"
import MainPicture from '../assets/main-picture.png'
import SearchName from "../components/SearchName"
import { get } from "../services/authService"
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"
import HotOffer from '../assets/hot-offer.png'

const HomePage = ({ allServices }) => {

  const [allReviews, setAllReviews] = useState([])

  const getAllReviews = () => {
    get('/reviews')
      .then((response) => {
        console.log("Reviews ==>", response.data)
        setAllReviews(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllReviews()
  }, [])

  // prevent dublicates
  function noDublicates(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }

  return (
    <div className="pb-4">
      <div className="bg-indigo-50 flex-col items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold py-2">Let us free you from worries</h1>

        </div>
        <div className="flex items-center justify-center py-2">
          <h3 className="text-xl">We will help you to find reliable doers around</h3>

        </div>
        <div className="flex items-center justify-center">
          <img src={MainPicture} alt="main-picture" />
        </div>

      </div>

      <div className="bg-gradient-to-t from-white to-indigo-50">

        <div className="flex flex-col items-center justify-center">

          <ul className="w-full text-xl border-b border-slate-800">

            <SearchName allServices={allServices} />

          </ul>

          <div className="bg-amber-500 flex justify-center w-1/4 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
            <Link to='/all-categories'>
              <span className="hover:text-black transition cursor-pointer">All categories</span>
            </Link>
          </div>

        </div>

        <div className="flex-col items-center border-b border-t border-slate-800 ">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold">How it works?</h2>
          </div>
          <div className="px-4">
            <p>Fusce erat ante, consectetur quis dapibus id, aliquam a est. Sed ultricies magna sed nisi condimentum, id dapibus magna interdum. Donec varius consequat nisi, a feugiat orci ullamcorper in. Maecenas congue pellentesque tempor. Ut tellus elit, mattis quis odio at, pharetra consequat mauris. Phasellus ac risus sit amet ligula scelerisque dictum. Aenean nec enim a enim hendrerit blandit ut eu orci. Vivamus id malesuada eros. Aliquam erat volutpat.</p>
          </div>
          <div className="flex justify-center">
            <img src={HotOffer} alt="hot-offer" />
          </div>
        </div>
      </div>
      <div>

        {allReviews &&
          <div>
            {
              allReviews.map((review) => {
                return ( <ReviewCard key={review._id} review={review} />)
              })
            }
          </div>
        }

      </div>
    </div>
  )
}

export default HomePage