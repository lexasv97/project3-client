import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
       <footer className="bg-indigo-200 text-black border-t border-slate-800 mt-auto">
        <div className="flex grid grid-cols-4 gap-4">
            <div className="w-1/5 mx-5">
                <span className="text-3xl font-semibold py-2">LOGO</span>
                <p className="text-[18px] w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit! Vero praesentium cupiditate, optio id nesciunt quia debitis nostrum blanditiis aperiam tempora!</p>
            </div>
            <div className="w-1/5">
                <h2 className="text-[22px] font-semibold text-fuchsia-800">Services</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">Web Design</li>
                    <li className="my-2">Web Development</li>
                    <li className="my-2">SEO</li>
                    <li className="my-2">E-commerce</li>
                </ul>
            </div>
            <div className="">
                <h2 className="font-semibold text-fuchsia-800">Contact</h2>
                <p className="my-4">Email: company@gmail.com</p>
                <p className="my-4">Phone: +1 111-111-1111 </p>
            </div>
           <div>
             <h2 className="font-semibold text-fuchsia-800">Follow Us</h2>
            <div className="flex space-x-4">
                <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
                    <FaGithub/>
                </Link>
                <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
                    <FaLinkedinIn/>
                </Link>
                <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
                    <FaTwitter/>
                </Link>
                <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
                    <FaInstagram/>
                </Link>
            </div>
            
           </div>
        </div>
        <div className="flex items-center justify-center">
          <p>© 2023 LOGO. All rights reserved.</p>
          </div>
       </footer>

    );
};

export default Footer;