import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import DarkMode from "../mode/dark-mode";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm dark:bg-gray-900/95">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-8 md:px-8 lg:px-20">
        <h1 className="font-bold text-2xl mr-10">Auréne</h1>
        <nav className="hidden sm:flex items-center gap-4 mx-4 md:mx-8 lg:mx-20 text-gray-700 dark:text-white/90 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-Yprimary" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "text-Yprimary" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-Yprimary" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-Yprimary" : "")}
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <FaRegHeart />
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-DYprimary" : "")}
          >
            <IoPersonOutline />
          </NavLink>
          <BiSolidShoppingBag />
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
