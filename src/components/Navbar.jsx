import { Link, NavLink } from "react-router-dom"
import hamburgerIcon from '../assets/Hamburger_icon.png'

const Navbar = () => {

  const getUserStatus = () => {
    return localStorage.getItem('isUser')
  }

  const getBusinessStatus = () => {
    return localStorage.getItem('isBusiness')
  }

  return (
    <nav>

      <NavLink to='/side-menu'>
        <img src={hamburgerIcon} alt='hamburger' />
      </NavLink>
      
      <Link to='/'>Home</Link>
      
      <Link to='/user-login'>Login</Link>

      <Link to='/business-login'>Creator</Link>

      {
        getUserStatus() && <Link to='/user-profile'>Profile</Link>
      }

      <hr />
    </nav>
  )
}

export default Navbar