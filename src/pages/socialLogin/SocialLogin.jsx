import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const SocialLogin = () => {
    const {googleLogin,githubLogin} = useContext(AuthContext);
    return (
        <div className="flex gap-2">
            
            <div>
                <button className="btn btn-sm btn-outline btn-success w-24" onClick={()=>googleLogin()}>Google</button>
            </div>
            <div>
                <button className="btn btn-sm btn-outline btn-secondary w-24 " onClick={()=>githubLogin()}>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;