import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    const {singInUser} = useContext(AuthContext);

    const {register, handleSubmit} = useForm()
    
    const onSubmit = (data) => {
        const {email, password} = data;
        singInUser(email, password);
    }

    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100 mt-20">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white text-lg">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;