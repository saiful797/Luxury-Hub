import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Register = () => {

    const {createUser} =  useContext(AuthContext);
    console.log(createUser);
    
    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100 mt-16">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter photo url..." name="url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password..." name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white text-lg">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;