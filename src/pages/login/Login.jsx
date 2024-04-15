import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
    const {singInUser} = useContext(AuthContext);

    const {register, handleSubmit} = useForm()
    
    const onSubmit = (data) => {
        const {email, password} = data;
        singInUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base font-medium text-lime-600">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-success text-white text-lg">Login</button>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1>New Here?</h1>
                            <Link to="/register"><p className="text-green-600 font-bold hover:text-black"><u>Please Register</u></p></Link>
                        </div>
                    </form>
                    <div className="rounded-b-2xl bg-slate-100 pt-2 pb-5">
                        <div className="text-2xl font-bold text-center text-teal-500">OR</div>
                        <div className="text-lg font-bold text-center mb-2">Login With Social Media</div>
                        <div className="flex justify-center">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;