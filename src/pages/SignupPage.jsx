import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import { post } from "../services/authService";

import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const UserSignup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isBusiness, setIsBusiness] = useState(false)

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { authenticateUser, storeToken } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleToggle = (e) => {
    setIsBusiness(!isBusiness)
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, isBusiness };

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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center p-20 bg-indigo-50 border border-slate-600 rounded-3xl">
        <span className="text-3xl font-bold">Register</span>

        <form className="flex flex-col items-center justify-center" onSubmit={handleSignupSubmit}>

          <div className="my-4 flex flex-row justify-between">
            <input className="block w-11/12 py-2.5 px-0 text-sm text-gray-900 border border-slate-600 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={handleName} />
            <div>
              <BiUser className='text-slate-400' />
            </div>
          </div>

          <div className="my-4 flex flex-row justify-between">
            <input className="block w-11/12 py-2.5 px-0 text-sm text-gray-900 border border-slate-600 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail} />
            <div>
              <MdOutlineAlternateEmail className='text-slate-400' />
            </div>
          </div>

          <div className="my-4 flex flex-row justify-between">
            <input className="block w-11/12 py-2.5 px-0 text-sm text-gray-900 border border-slate-600 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword} />
            <div>
              <AiOutlineUnlock className='text-slate-400' />
            </div>
          </div>

          <div className="my-4 flex flex-row justify-evenly">
            <input className=""
              placeholder="YourName"
              type="checkbox"
              name="isBusiness"
              value={isBusiness}
              onChange={handleToggle} />
            <label> Business</label>
          </div>
          <div className="flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl bg-lime-400">
            <button type="submit">Sign Up</button>
          </div>
          <div className="my-4">
            <span>Already have account?
              <Link to="/login"> <span className="text-blue-500"> Login</span></Link>
            </span>
          </div>

          {errorMessage && <p className="block pb-5 error-message">{errorMessage}</p>}

        </form>

      </div>
    </div>
  )
}

export default UserSignup