import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  const link = <>
      <li className=""><NavLink  to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/listed'}>Listed Books</NavLink></li>
      <li><NavLink to={'/pages'}>Pages to Read</NavLink></li>
  </>
  return (
    <div>
      {/* NavBar */}

      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-success lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 23 23"
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
       {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
    <div className="flex gap-4 ml-24">
        <button className="btn bg-[#23BE0A] text-white">
            Sign In
        </button>
        <button className="btn bg-[#59C6D2] text-white">
          Sign Up
        </button>
   
  
    </div>
  </div>
  </div>

    
  );
};

export default NavBar;