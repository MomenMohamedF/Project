import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
const Header = () => {
  return (
    <header className="w-full px-4 md:px-8 lg:px-20 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Auréne</h1>
        <nav className=" sm:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop/watches"
            className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-[#D4AF37]" : "")}
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <FaRegHeart />
          <IoPersonOutline />
          <BiSolidShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
