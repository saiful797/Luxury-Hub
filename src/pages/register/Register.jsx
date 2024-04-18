import { useContext, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createUser,updateUserProfile} =  useContext(AuthContext);
    const [showPassword, setShowPassword]=useState(false);

    const {register, handleSubmit} = useForm()

    // Navigation Process
    const navigate = useNavigate();
    // const location = useLocation();
    
    const onSubmit = (data) => {
        console.log(data);

        const {email, password, fullName, imageURL} = data;

        if(password.length < 6){
            toast.error(`Password should be at least 6 characters or longer!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have at least one Uppercase and Lowercase character!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast.error("Your password should have at least one Uppercase and Lowercase character!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            return;
        }

        createUser(email, password).then(()=>{
            toast.success("Account Create Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            toast.success("Login Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            updateUserProfile(fullName, imageURL).then(() =>{
            
                navigate(location?.state || '/');
                location.reload();
    
            });
        });
    }

  
    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
            <Helmet>
                <title>User Register Page</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="fullName" className="input input-bordered"  {...register("fullName")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" className="input input-bordered" {...register("imageURL")}/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
                            <span className="top-[54px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-success text-white text-lg">Register</button>
                        </div>
                        <div className="flex justify-between">
                            <h1>Have an account?</h1>
                            <Link to="/login"><p className="text-green-600 font-bold hover:text-black"><u>Please Login</u></p></Link>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;