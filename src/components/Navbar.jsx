import { Link, NavLink } from "react-router-dom"
import hamburgerIcon from '../assets/Hamburger_icon.png'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
//import './navbar.css'

const Navbar = () => {

  const { isLoggedIn, user } = useContext(AuthContext);

  const navigate = useNavigate()

  // const getToken = () => {
  //   return localStorage.getItem('authToken')
  // }

  // const getBusinessStatus = () => {
  //   return localStorage.getItem('isBusiness')
  // }

  // const businessStatus = getBusinessStatus();



  const logout = () => {
    localStorage.clear()
    // setIsLoggedin(false);
    navigate('/')
  };

  return (
    <nav>

      <NavLink to='/side-menu'>
        <img src={hamburgerIcon} alt='hamburger' />
      </NavLink>

      <Link to='/'>Home</Link>

      {
        !isLoggedIn && <Link to='/login'>Login</Link>
      }


      {user && <div>
        {
          !user.isBusiness && <Link to='/user-profile'>Profile</Link>
        }

        {
          user.isBusiness && <Link to='/business-profile'>Profile</Link>
        }
      </div>}


      {
        isLoggedIn && <button onClick={logout}>logout</button>
      }

      <hr />
    </nav>
  )
}

export default Navbar