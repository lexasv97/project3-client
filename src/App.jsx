import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import HomePage from './pages/HomePage'
import UserProfile from './pages/UserProfile'
import { useContext } from 'react'
import { AuthContext } from './context/auth.context'
import BusinessProfile from './pages/BusinessProfile'
import BusinessLogin from './pages/BusinessLogin'
import BusinessSignup from './pages/BusinessSignup'
import AllCategories from './pages/AllCategories'


function App() {

  const { user } = useContext(AuthContext)

  const getUserStatus = () => {
    return localStorage.getItem('isUser')
  }

  const getBusinessStatus = () => {
    return localStorage.getItem('isBusiness')
  }
  const IsUser = () => {
    return getUserStatus() ? <Outlet /> : <Navigate to='/' />
  }

  const IsBusiness = () => {
    return getBusinessStatus() ? <Outlet /> : <Navigate to='/' />
  }
  // const LoggedIn = () => {
  //   return getToken() ? <Outlet /> : <Navigate to='/login' />
  // }

  // const NotLoggedIn = () => {
  //   return !getToken() ? <Outlet /> : <Navigate to='/' />
  // }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* <Route element={<NotLoggedIn />}> */}

        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-signup' element={<UserSignup />} />

        {/* </Route> */}

        {/* <Route path='/logout' /> */}

        <Route path='/business-login' element={<BusinessLogin />} />
        <Route path='/business-signup' element={<BusinessSignup />} />

        <Route element={<IsUser />}>

          <Route path='/user-profile' element={<UserProfile />} />

        </Route>

        <Route element={<IsBusiness />}>

          <Route path='/business-profile' element={<BusinessProfile />} />

        </Route>

        <Route path='/all-categories' element={<AllCategories />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
