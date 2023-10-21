import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/UserProfile'
import BusinessProfile from './pages/BusinessProfile'
import { useContext } from 'react'
import { AuthContext } from './context/auth.context'
import AllCategories from './pages/AllCategories'


function App() {

  const { user, isLoggedIn } = useContext(AuthContext)

  // const getBusinessStatus = () => {
  //   return localStorage.getItem('isBusiness')
  // }
  const IsUser = () => {
    return user.isBusiness ? <Navigate to='/' /> : <Outlet />
  }

  // const IsBusiness = () => {
  //   return !user.isBusiness ? <Outlet /> : <Navigate to='/' />
  // }
  // const getToken = () => {
  //   return localStorage.getItem('authToken')
  // }
  const LoggedIn = () => {
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route element={<NotLoggedIn />}>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

        </Route>

        <Route element={<LoggedIn />}>

          <Route path='/logout' />

        </Route>

        {/* <Route element={<IsUser />}> */}

          <Route path='/user-profile' element={<ProfilePage />} />

        {/* </Route>

        <Route element={<IsBusiness />}> */}

          <Route path='/business-profile' element={<BusinessProfile />} />

        {/* </Route> */}

        <Route path='/all-categories' element={<AllCategories />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
