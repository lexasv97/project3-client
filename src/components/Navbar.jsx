import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import DownLoadIcons from '../assets/download-icons.png'

const Navbar = () => {

  const { isLoggedIn, user } = useContext(AuthContext);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  // const getBusinessStatus = () => {
  //   return localStorage.getItem('isBusiness')
  // }

  // const businessStatus = getBusinessStatus();

  const content = <>
    <div className="flex flex-col justify-between items-center absolute top-12 w-3/4 md:w-1/4 left-0 right-0 bg-gradient-to-t rounded-br-3xl from-white to-indigo-200 transition border-b border-r border-t border-slate-600 z-10">
      <ul className="text-center text-xl p-5 w-full">

        <Link to="">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-white	 hover:rounded-xl">About</li>
        </Link>

        <Link to="">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-white	 hover:rounded-xl">FAQ</li>
        </Link ><Link to="">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-white	 hover:rounded-xl">Our blog</li>
        </Link ><Link to="">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-white	 hover:rounded-xl">Support</li>
        </Link >

        {user &&
          <>
            {
              user.isBusiness &&
              <Link to="/add-service">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-white	 hover:rounded-xl">Add a service</li>
              </Link >
            }
          </>}

      </ul>

      <div className="flex justify-center mb-10">
        <img className="w-1/2" src={DownLoadIcons} alt="download-icons" />
      </div>
    </div>
  </>

  return (
    <nav>
      <div className="h-10vh bg-indigo-200 flex justify-between px-10 py-2 border-b border-slate-800">

        <div>
          {click && content}

          <button onClick={handleClick}>
            {click ? <FaTimes /> : <AiOutlineMenu />}
          </button>
        </div>

        <div>

          <Link to="/">
            <span className="text-2xl font-bold">LOGO</span>
          </Link>
        </div>

        <div>
          {
            !getToken() && <Link to='/login'>
              <span className="hover:text-white transition cursor-pointer">Login</span>
            </Link>
          }
          {user && <>
            {
              !user.isBusiness && <Link to='/user-profile'>
                <span className="hover:text-white transition cursor-pointer">Profile</span>
              </Link>
            }
            {
              user.isBusiness && <Link to='/business-profile'>
                <span className="hover:text-white transition cursor-pointer">Profile</span>
              </Link>
            }
          </>}

        </div>

      </div>
    </nav>
  )
}

export default Navbar