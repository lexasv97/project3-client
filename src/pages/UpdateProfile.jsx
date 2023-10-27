import { put } from "../services/authService"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineFileImage } from "react-icons/ai"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

const UpdateProfile = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0)
    const [isBusiness, setIsBusiness] = useState(false)
    const [profileImage, setProfileImage] = useState("https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg")


    const [errorMessage, setErrorMessage] = useState(undefined);

    const { user } = useContext(AuthContext)

    // if (user && user.isBusiness) {
    //     setIsBusiness(true)
    // }

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleProfileImage = (e) => setProfileImage(e.target.value);

    const handleToggle = (e) => {
        setIsBusiness(!isBusiness)
    }
    // user && (
    useEffect(() => {
        if (user) {
            setEmail(user.email)
            setName(user.name)
            setPhone(user.phone)
            setProfileImage(user.profileImage)
            setIsBusiness(user.isBusiness)
        }
    }, [user])
    // )

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const requestBody = { user, email, phone, password, name, isBusiness, profileImage };

        put('/users/update-profile', requestBody)
            .then((response) => {
                setEmail("")
                setPassword("")
                setName("")
                setPhone(0)
                setProfileImage("https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg")
                setIsBusiness(false)
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

    return (
        user &&
        <div style={{ height: '70vh' }} className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 bg-indigo-200 border border-slate-600 rounded-3xl">
                <span className="text-3xl font-bold my-3">Update profile</span>

                <form onSubmit={handleUpdateSubmit} className="flex flex-col items-center justify-center w-4/5 md:w-3/5 py-2">

                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input
                            className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="profile image"
                            type="text"
                            name="profileImage"
                            value={profileImage}
                            onChange={handleProfileImage}
                            required
                        />
                        <AiOutlineFileImage className='text-black' />
                    </div>

                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <input className="w-11/12 border border-slate-600 py-2 rounded-3xl px-2"
                            placeholder="name"
                            type="name"
                            name="name"
                            value={name}
                            onChange={handleName}
                            required
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
                            required
                        />
                        <div>
                            <MdOutlineAlternateEmail className='text-black' />
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-2 justify-evenly w-full">
                        <PhoneInput className="w-11/12 border border-slate-600 py-2 rounded-3xl px-3"
                            placeholder="(222) 333-4455"
                            country="US"
                            type="phone"
                            name="phone"
                            maxLength="14"
                            onChange={setPhone}
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
                            required
                        />
                        <div>
                            <AiOutlineUnlock className='text-black' />
                        </div>
                    </div>

                    {/* <div className="my-4 flex flex-row justify-evenly">

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                className="sr-only peer"
                                type="checkbox"
                                name="isBusiness"
                                onChange={handleToggle} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                            </div>
                        </label>

                        <div>
                            <span className="ml-3">Business</span>
                        </div>

                    </div> */}

                    <div className="bg-amber-500 text-white flex justify-center w-1/2 py-2 my-2 border border-slate-600 rounded-3xl">
                        <button type="submit"><span className="hover:text-black transition cursor-pointer">Update profile</span></button>
                    </div>

                    {errorMessage && <p className="error-message mb-2">{errorMessage}</p>}

                </form>

            </div>
        </div>

    )
}

export default UpdateProfile