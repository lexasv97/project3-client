import Review from "../components/Review"
import { Link } from "react-router-dom"
import MainPicture from '../assets/main-picture.png'
import { useState, useEffect } from "react"
import { get } from "../services/authService"
import SearchCategory from "../components/SearchCategory"

const HomePage = ({ allServices }) => {

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
    <div>
      <div className="bg-indigo-50 flex-col items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold py-2">Let us free you from worries</h1>

        </div>
        <div className="flex items-center justify-center py-2">
          <h3 className="text-xl font-normal">We will help you to find reliable doers around</h3>

        </div>
        <div className="flex items-center justify-center">
          <img src={MainPicture} alt="main-picture" />
        </div>

        <SearchCategory allServices={allServices} />

      </div>

      <div className="bg-gradient-to-t from-white to-indigo-50">

        <div className="flex flex-col items-center justify-center">

          <ul className="w-full text-xl">


            <Link to="">
              <li className="flex justify-center py-4 border-b border-t border-slate-800 hover:bg-indigo-200">Construction</li>
            </Link>



            <Link to="">
              <li className="flex justify-center py-4 border-b border-slate-800 hover:bg-indigo-200">Delivery</li>
            </Link>
            <Link to="">
              <li className="flex justify-center py-4 border-b border-slate-800 hover:bg-indigo-200">Cleaning</li>
            </Link>
            <Link to="">
              <li className="flex justify-center py-4 border-b border-slate-800 hover:bg-indigo-200">Photo/video</li>
            </Link>
            <Link to="">
              <li className="flex justify-center py-4 border-b border-slate-800 hover:bg-indigo-200">IT services</li>
            </Link>
          </ul>

          <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
            <Link to='/all-categories'>
              <span className="hover:text-black transition cursor-pointer">All categories</span>
            </Link>
          </div>

        </div>

        <div className="flex-col items-center border border-slate-800 ">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold">How it works?</h2>
          </div>

          <p>Fusce erat ante, consectetur quis dapibus id, aliquam a est. Sed ultricies magna sed nisi condimentum, id dapibus magna interdum. Donec varius consequat nisi, a feugiat orci ullamcorper in. Maecenas congue pellentesque tempor. Ut tellus elit, mattis quis odio at, pharetra consequat mauris. Phasellus ac risus sit amet ligula scelerisque dictum. Aenean nec enim a enim hendrerit blandit ut eu orci. Vivamus id malesuada eros. Aliquam erat volutpat.</p>
        </div>
      </div>
      <div>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default HomePage