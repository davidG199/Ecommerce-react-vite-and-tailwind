import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4"

  //navBar state
  let [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  const closeNav = () =>{
    setOpenNav(false)
  }

  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-black text-white opacity-95">
      <ul className="flex items-center">
        <div
          className=" absolute text-3xl right-8 top-5 cursor-pointer md:hidden"
          onClick={toggleNav}
        >
          {/* no me funciona para importar el icono toco en svg */}
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <li className="font-semibold text-lg md:mr-5 ">
          <NavLink to="/" className="no-underline"
          onClick={() => {context.setSearchByCategory(), closeNav()}}
          >
            Shopi
          </NavLink>
        </li>
      </ul>

      <ul
        className={`flex absolute md:static bg-black z-[-1] w-full items-center gap-3 justify-center flex-col md:flex-row md:mb-0 transition-all duration-500 ease-in ${
          openNav ? "top-[60px]" : "top-[-490px]"
        }`}
      >
        <li className=" hover:border-b border-white">
          <NavLink
            to="/"
            onClick={() => {context.setSearchByCategory(), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/clothes"
            onClick={() => {context.setSearchByCategory("clothes"), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/electronics"
            onClick={() => {context.setSearchByCategory("electronics"), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/furnitures"
            onClick={() => {context.setSearchByCategory("furniture"), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/shoes"
            onClick={() => {context.setSearchByCategory("shoes"), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/miscellaneous"
            onClick={() => {context.setSearchByCategory("Miscellaneous"), closeNav()}}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Miscellaneous
          </NavLink>
        </li>
      </ul>

      <ul
        className={`flex absolute bg-black md:static z-[-1] w-full py-5 md:py-0 items-center gap-3 justify-center flex-col md:flex-row transition-all duration-500 ease-in ${
          openNav ? "top-[240px]" : "top-[-490px]"
        }`}
      >
        <li className=" hover:border-b border-white">
          <NavLink
            to="/my-orders"
            onClick={() => closeNav()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/my-account"
            onClick={() => closeNav()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li className=" hover:border-b border-white">
          <NavLink
            to="/signIn"
            onClick={() => closeNav()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex justify-center items-center lg:ml-5">
          <ShoppingCartIcon
            className="h-6 w-6 me-1 cursor-pointer"
            onClick={() => {
              context.openCheckoutSideMenu(); closeNav()
            }}  
          />
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
