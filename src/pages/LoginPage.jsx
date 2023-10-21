import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

import { Link, useNavigate } from "react-router-dom";

import { post } from "../services/authService";

import { AiOutlineUnlock } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    post('/auth/login', requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        // console.log('JWT token', response.data.authToken);
        console.log("DATA =====>", response.data)
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center p-20 bg-indigo-50 border border-slate-600 rounded-3xl">
        <span className="text-3xl font-bold">Login</span>

        <form className="flex flex-col items-center justify-center" onSubmit={handleLoginSubmit}>

          <div className="my-4 flex flex-row justify-between">
            <input className="block w-11/12 py-2.5 px-0 text-sm text-gray-900 border border-slate-600 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
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
              onChange={handlePassword}
            />
            <div>
              <AiOutlineUnlock className='text-slate-400' />
            </div>
          </div>

          <div className="flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl bg-lime-400">
            <button type="submit">Login</button>
          </div>

          <div className="my-4">
            <span>Don't have an account yet?
              <Link to="/signup"> <span className="text-sky-400">Sign Up</span></Link>
            </span>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

        </form>

      </div>
    </div>
  )
}

export default UserLogin