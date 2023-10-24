import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import { post } from "../services/authService";

import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai"

const UserSignup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isBusiness, setIsBusiness] = useState(false)
  const [phone, setPhone] = useState(0)

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { authenticateUser, storeToken } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const hanglePhone = (e) => setPhone(e.target.value);

  const handleToggle = (e) => {
    setIsBusiness(!isBusiness)
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, phone, password, name, isBusiness };

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    post('/auth/signup', requestBody)
      .then((response) => {
        console.log("Created user ===>", response.data)
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  }

  return (

    <div style={{ height: '70vh' }} className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-1/2 bg-indigo-200 border border-slate-600 rounded-3xl">
        <span className="text-3xl font-bold my-3">Register</span>

        <form onSubmit={handleSignupSubmit} className="flex flex-col items-center justify-center w-3/5">

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="name"
              type="name"
              name="name"
              value={name}
              onChange={handleName}
            />
            <div>
              <BiUser className='text-black' />
            </div>
          </div>

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <div>
              <MdOutlineAlternateEmail className='text-black' />
            </div>
          </div>

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="+12223334455"
              type="phone"
              name="phone"
              onChange={hanglePhone}
            />
            <div>
              <AiOutlinePhone className='text-black' />
            </div>
          </div>

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <div>
              <AiOutlineUnlock className='text-black' />
            </div>
          </div>

          <div className="my-4 flex flex-row justify-evenly">

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                className="sr-only peer"
                type="checkbox"
                name="isBusiness"
                value={isBusiness}
                onChange={handleToggle} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
              </div>
            </label>

            <div>
              <span className="ml-3">Business</span>
            </div>

          </div>

          <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl">
            <button type="submit"><span className="hover:text-black transition cursor-pointer">Signup</span></button>
          </div>

          <div className="my-4">
            <span>Already have account?
              <Link to="/login"> <span className="font-bold border-b-2 border-black hover:text-white hover:border-white transition cursor-pointer">Login</span></Link>
            </span>
          </div>

          {errorMessage && <p className="error-message mb-2">{errorMessage}</p>}

        </form>

      </div>
    </div>


  )
}

export default UserSignup