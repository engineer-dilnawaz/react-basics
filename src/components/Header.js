import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "url:../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between items-center  shadow sticky top-0 backdrop-blur-2xl z-40">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="Foodie app" className="w-25" />
      </Link>

      <ul className="flex gap-2 pr-10">
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer  hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="/about">About us</Link>
        </li>
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer  hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="contact">Contact us</Link>
        </li>
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer  hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          Cart
        </li>
        <li>
          <button
            className="bg-indigo-500 px-4 py-0.5 rounded-lg text-white cursor-pointer  hover:bg-white hover:text-indigo-500 hover:scale-[1.05] transition-all"
            onClick={() => {
              setBtnName((prev) => (prev === "Logout" ? "Login" : "Logout"));
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
