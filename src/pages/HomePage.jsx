import { Link } from "react-router-dom"
import MainPicture from '../assets/main-picture.png'
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"
import HotOffer from '../assets/hot-offer.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete' //
import SearchList from "../components/SearchList"

const HomePage = ({ allServices, allReviews, setSearchReady }) => {

  const [search, setSearch] = useState({})

  //

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log("string", string, "results", results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log("item hovered", result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log("item selected", item)
    setSearch(item)
    setSearchReady(true)
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }} className="border-b text-gray-500 border-grey-500">{item.category}</span>
      </>
    )
  }

  let mapped = allServices.map((service) => {
    let object = {
      id: service._id,
      name: service.name,
      category: service.category
    }
    return object
  })

  //
  //console.log("mapped =====>", mapped)

  // useEffect(() => {
  //   //console.log("search selected", search)
  // }, [search])

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setSearchReady(false)
  }, [])

  return (
    <div className="pb-4">
      <div className="bg-indigo-50 flex-col items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold py-2">Let us free you from worries</h1>

        </div>
        <div className="flex items-center justify-center py-2">
          <h3 className="text-xl">We will help you to find reliable doers around</h3>

        </div>
        <div className="flex items-center justify-center pb-2">
          <img src={MainPicture} alt="main-picture" />
        </div>

      </div>

      <div className="bg-gradient-to-t from-white to-indigo-50">

        <div className="flex flex-col ">

          <div className="w-full flex justify-center text-xl border-b border-slate-800">

            <form className="w-3/4 pb-2">
              <div className="z-5 ">
                <ReactSearchAutocomplete
                  className=""
                  placeholder="Search for..."
                  items={mapped}
                  fuseOptions={{ keys: ["name", "category"] }}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                />
              </div>
              <div className="flex justify-center">
                <div className="bg-amber-500 flex justify-center w-1/2 md:w-1/4 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
                  <Link to={`/services/${search.id}`} className="hover:text-black transition cursor-pointer">Search</Link>
                </div>
              </div>
            </form>
          </div>

          <div className="">
            <SearchList filteredServices={allServices} />
          </div>
          <div className="flex justify-center">
            <div className="bg-amber-500 flex justify-center w-1/4 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
              <Link to='/all-categories'>
                <span className="hover:text-black transition cursor-pointer">All categories</span>
              </Link>
            </div>

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

        {allReviews.slice(0, 5).length ?
          <div>
            {
              allReviews.sort((a, b) => 0.5 - Math.random()).slice(0, 5).map((review) => {
                return (<ReviewCard key={review._id} review={review} />)
              })
            }
          </div>
          :
          <div></div>
        }

      </div>
    </div>
  )
}

export default HomePage