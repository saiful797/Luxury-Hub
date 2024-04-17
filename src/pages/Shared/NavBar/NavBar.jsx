import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    const {logout, user}= useContext(AuthContext);

    const navLinks=<>
         <li className="md:text-[#22c1c3] md:text-2xl"><NavLink to="/">Home </NavLink></li>
         <li><NavLink to="/about">About</NavLink></li>
         <li><NavLink to="/contact">Contact Us</NavLink></li>
         {
            user?<div>
             <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
            </div>
            :
            <div>
                <li className="md:hidden"><NavLink to="/login">Login</NavLink></li>
                <li className="md:hidden"><NavLink to="/register">Register</NavLink></li>
            </div>
         }
    </>

    const myFunction = () =>{
        toast.success(`Logout Successfully!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            
        });
        logout()
    }

    return (
        <div className="navbar bg-blue-950 p-3 mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-slate-50 rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <Link to='/' className="text-2xl md:text-4xl lg:text-6xl font-bold"><span className="text-[#22c1c3]">Luxury </span> <span className="text-[#fdbb2d]">Hub</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 text-lg font-bold text-[#fdbb2d]">
                     {navLinks}
                </ul>
            </div>
            
            <div className="navbar-end">
                {
                    user?<div className="flex justify-center items-center gap-2">

                        <div className="w-10 tooltip" data-tip={user?.displayName}>
                            {
                                user?.photoURL? <img className="rounded-full" src={user.photoURL}/>
                                :
                                <img className="rounded-full" src="https://i.ibb.co/Jq10C13/user.png" alt="User profile..."/>
                            }
                        </div>

                        <div>
                            <Link to="/">
                                <button  onClick={myFunction} className="btn btn-sm btn-outline btn-success">Logout</button>
                            </Link>
                        </div>

                    </div>
                    :
                    <div className="space-x-3 hidden md:flex">
                        <Link className="btn btn-sm btn-outline btn-accent text-base" to="/login">Login</Link>
                        <Link className="btn btn-sm btn-outline btn-accent text-base" to="/register">Register</Link>
                    </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default NavBar;