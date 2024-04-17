import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    const { fullName, imageURL } = data;


    updateUserProfile(fullName, imageURL).then(() => {
        toast.success("Account Create Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });

        navigate(location?.state || "/");
        location.reload();
       
    });
  };

  return (
    <div className="mt-10 bg-blue-100 mx-auto md:w-1/2 rounded-3xl">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
        <div className="bg-base-200 p-5 rounded-2xl">
            <div className="flex-col mt-10">
                <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold">Update Your Profile</h1>
                </div>
                <div className="mx-auto mt-10 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="fullName" className="input input-bordered"  {...register("fullName")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" className="input input-bordered" {...register("imageURL")}/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
