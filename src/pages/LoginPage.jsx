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
    <div style={{height:'70vh'}} className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-1/2 bg-indigo-200 border border-slate-600 rounded-3xl">
        <span className="text-3xl font-bold my-3">Login</span>

        <form onSubmit={handleLoginSubmit} className="flex flex-col items-center justify-center w-3/5">

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              required
            />
            <div>
              <MdOutlineAlternateEmail className='text-black' />
            </div>
          </div>

          <div className="flex items-center justify-center my-2 justify-evenly w-full">
            <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              required
            />
            <div>
              <AiOutlineUnlock className='text-black' />
            </div>
          </div>

          <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl">
            <button type="submit"><span className="hover:text-black transition cursor-pointer">Login</span></button>
          </div>

          <div className="my-4">
            <span>Don't have an account yet?
              <Link to="/signup"> <span className="font-bold border-b-2 border-black hover:text-white hover:border-white transition cursor-pointer">Sign Up</span></Link>
            </span>
          </div>

          {errorMessage && <p className="error-message mb-2">{errorMessage}</p>}

        </form>

      </div>
    </div>
  )
}

export default UserLogin