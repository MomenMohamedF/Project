import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BiSolidShoppingBag } from "react-icons/bi";
import DarkMode from "../mode/dark-mode";
import { useCart } from "../provider/cart";
const Header = () => {
  const { state } = useCart();
  const totalCount = state.items.reduce((s, i) => s + i.quantity, 0);

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
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-DYprimary" : "")}
          >
            <div className="relative">
              <BiSolidShoppingBag />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </div>
          </NavLink>
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
