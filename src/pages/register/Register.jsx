import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const {createUser} =  useContext(AuthContext);

    const {register, handleSubmit} = useForm()

    // Navigation Process
    const navigate = useNavigate();
    // const location = useLocation();
    
    const onSubmit = (data) => {
        const {email, password} = data;
        createUser(email, password)
        .then((result) =>{
            if(result.user){
                navigate(location?.state || '/');
            }
            else {
                navigate('/')
            }
        })
    }

  
    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
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
                            <input type="text" placeholder="Enter your name..." name="name" className="input input-bordered"  {...register("fullName")} required />
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
                            <input type="url" placeholder="Enter your photo url..." name="url" className="input input-bordered" {...register("url")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
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
            </div>
        </div>
    );
};

export default Register;