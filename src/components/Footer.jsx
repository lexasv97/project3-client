import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-200 h-1/5 text-black border-t border-slate-800 pt-3 px-3 relative inset-x-0 bottom-0">
      <div className="flex grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="">
          <span className="text-3xl font-semibold py-2">LOGO</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit! Vero praesentium cupiditate, optio id nesciunt quia debitis nostrum blanditiis aperiam tempora!</p>
        </div>
        <div className="">
          <span className="text-2xl font-semibold">Services</span>
          <ul className="my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="">
          <span className="text-2xl font-semibold">Contact</span>
          <p className="my-4">Email: company@gmail.com</p>
          <p className="my-4">Phone: +1 111-111-1111 </p>

          <span className="text-2xl">Follow Us</span>
          <div className="flex my-4 space-x-4">
            <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
              <FaGithub />
            </Link>
            <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
              <FaLinkedinIn />
            </Link>
            <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
              <FaTwitter />
            </Link>
            <Link className="hover:text-fuchsia-800  transition-all duration-150 ease-in-out">
              <FaInstagram />
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