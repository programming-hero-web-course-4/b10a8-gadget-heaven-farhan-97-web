import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiHeartCircle } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
    return (
        <div>
            <div className={`navbar ${location.pathname === "/" ? "bg-[#9538E2]" : "bg-white"}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Haven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal px-1 ${location.pathname === "/" ? "text-white" : "text-black"}`}>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'statistics'}>Statistics</NavLink></li>
      <li><NavLink to={'dashboard'}>Dashboard</NavLink></li> 
      <li><NavLink to={'about'}>About Us</NavLink></li> 
    </ul>
  </div>
  <div className="navbar-end flex gap-5">
  <FaShoppingCart />
  <BiHeartCircle />

  </div>
</div>
        </div>
    );
};

export default Navbar;