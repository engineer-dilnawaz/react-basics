import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

import { UserContext } from "../contexts/UserContext";

// import Logo from "url:../assets/logo.png";
// import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser, isLoggedIn, handleLogIn, handleLogOut } =
    useContext(UserContext);

  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="flex justify-between items-center  shadow sticky top-0 backdrop-blur-2xl z-40">
      <Link to="/" className="logo-container">
        <img
          src={
            "https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
          }
          alt="Foodie app"
          className="w-25"
        />
      </Link>

      <ul className="flex gap-2 pr-10 items-center">
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer  hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="/about">About us</Link>
        </li>
        <li className="bg-stone-300 px-4 py-0.5 rounded-lg text-stone-600 cursor-pointer  hover:bg-stone-600 hover:text-white hover:scale-[1.05] transition-all">
          <Link to="contact">Contact us</Link>
        </li>

        {isLoggedIn ? (
          <li>
            <p className="font-bold">{loggedInUser}</p>
          </li>
        ) : null}
        <li>
          <p>Cart items - {cartCount}</p>
        </li>
        <li>
          <button
            className="bg-indigo-500 px-4 py-0.5 rounded-lg text-white cursor-pointer  hover:bg-white hover:text-indigo-500 hover:scale-[1.05] transition-all"
            onClick={() => {
              if (isLoggedIn) {
                handleLogOut();
              } else {
                handleLogIn();
              }
            }}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </li>
        <li className="w-8 h-8 rounded-md  cursor-pointer flex justify-center items-center text-indigo-500 relative">
          <FaCartPlus className="h-5 w-5" />
          {cartCount > 0 ? (
            <div className="h-4 w-4 rounded-full bg-red-600 text-center align-middle absolute -top-0.5 -right-0.5">
              <p className="text-white font-bold text-xs">{cartCount}</p>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Header;
