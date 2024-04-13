import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const navLinks=<>
         <li className="text-[#58fcff]"><NavLink to="/">Home </NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
         <li className="md:hidden"><NavLink to="/login">Login</NavLink></li>
         <li className="md:hidden"><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-950 p-3 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm bg-gray-100 lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <a className="text-3xl md:text-6xl font-bold"><span className="text-[#22c1c3]">Luxury </span> <span className="text-[#fdbb2d]">Hub</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-lg font-bold text-[#fdbb2d]">
                     {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                        <img src="https://i.ibb.co/Jq10C13/user.png" alt="User profile..."/>
                    </div>
                </div>
                <div className="space-x-3 hidden md:flex">
                    <Link className="btn btn-sm btn-outline btn-accent text-base" to="/login">Login</Link>
                    <Link className="btn btn-sm btn-outline btn-accent text-base" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;