import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin,githubLogin} = useContext(AuthContext);

    // Navigation Process
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocialLogin =(socialProvider)=>{
        socialProvider().then((result) =>{
            if(result.user){
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
        </div>
    );
};

export default SocialLogin;