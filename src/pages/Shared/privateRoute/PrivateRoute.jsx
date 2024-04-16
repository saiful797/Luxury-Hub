import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading && user){
        return <span className="loading loading-spinner loading-lg text-center"></span>
    }
    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }

    return (

        <div>
            {children}
        </div>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;