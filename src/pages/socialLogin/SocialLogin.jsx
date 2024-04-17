import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const {googleLogin,githubLogin} = useContext(AuthContext);

    // Navigation Process
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin =(socialProvider)=>{
        socialProvider().then((result) =>{
            if(result.user){
                toast.success("Login Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
                navigate(location?.state || '/');
            }
        })
    }
    return (
        <div className="flex gap-2">
            
            <div>
                <button className="btn btn-sm btn-outline btn-success w-24" onClick={()=>handleSocialLogin (googleLogin)}>Google</button>
            </div>
            <div>
                <button className="btn btn-sm btn-outline btn-secondary w-24 " onClick={()=>handleSocialLogin (githubLogin)}>GitHub</button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default SocialLogin;