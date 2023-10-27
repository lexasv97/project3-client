import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/UserProfile'
import BusinessProfile from './pages/BusinessProfile'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from './context/auth.context'
import AllCategories from './pages/AllCategories'
import { RotatingLines } from 'react-loader-spinner'
import AddService from './pages/AddService'
import ServiceDetails from './pages/ServiceDetails'
import { get } from './services/authService'
import CategoryPage from './pages/CategoryPage'
import UpdateService from './pages/UpdateService'
import UpdateProfile from './pages/UpdateProfile'

function App() {

  const [allServices, setAllServices] = useState([])

  const [allReviews, setAllReviews] = useState([])

  const [searchReady, setSearchReady] = useState(true)

  const getAllReviews = () => {
    get('/reviews')
      .then((response) => {
       // console.log("Reviews ==>", response.data)
        setAllReviews(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllReviews()
  }, [])

  const getAllServices = () => {
    get('/services')
      .then((response) => {
       // console.log("Services ==>", response.data)
        setAllServices(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllServices()
  }, [])

  const updateServices = (newService) => {

    let newArray = [...allServices, newService]
    setAllServices(newArray)
  }

  const { user, isLoggedIn } = useContext(AuthContext)

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  // const getBusinessStatus = () => {
  //   return localStorage.getItem('isBusiness')
  // }
  const IsUser = () => {
    return user && user.isBusiness ? <Navigate to='/' /> : <Outlet />
  }

  const IsBusiness = () => {
    return user && !user.isBusiness ? <Navigate to='/' /> : <Outlet />
  }
  // const getToken = () => {
  //   return localStorage.getItem('authToken')
  // }
  const LoggedIn = () => {
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />
  }

  const IsSearchReady = () => {
    return searchReady ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <>
      {
        // loading ?
        //   <div className="bg-indigo-50 h-screen flex flex-col justify-center items-center">
        //     <RotatingLines
        //       height={100}
        //       width={100}
        //       radius={5}
        //       color="#f59e0b"
        //       visible={true}
        //     />
        //   </div>
        //   :
        <div className='flex flex-col min-h-screen'>
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage allServices={allServices} allReviews={allReviews} setSearchReady={setSearchReady} />} />

            <Route element={<NotLoggedIn />}>

              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />

            </Route>

            <Route element={<LoggedIn />}>

              <Route path='/logout' />

            </Route>

            <Route element={<IsUser />}>

              <Route path='/user-profile' element={<ProfilePage allReviews={allReviews} />} />

            </Route>

            <Route element={<IsBusiness />}>

              <Route path='/business-profile' element={<BusinessProfile allServices={allServices} setSearchReady={setSearchReady} />} />

            </Route>

            <Route path='/all-categories' element={<AllCategories allServices={allServices} />} />

            <Route path='/add-service' element={<AddService allServices={getAllServices} updateServices={updateServices} />} />

            <Route path='/services/category/:thisCategory' element={<CategoryPage allServices={allServices} setSearchReady={setSearchReady} />} />

            <Route element={<IsSearchReady />}>
              <Route path='/services/:serviceId' element={<ServiceDetails />} />
            </Route>

            <Route path='/services/update/:serviceId' element={<UpdateService />} />

            <Route path='/users/update-profile' element={<UpdateProfile />} />

          </Routes>

          <Footer />
        </div>
      }
    </>
  )
}

export default App
