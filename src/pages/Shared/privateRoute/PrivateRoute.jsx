import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading && user) return <div>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>

    if(!user) return <Navigate state={location?.pathname || "/"}  to="/login"></Navigate>

    return children; 
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;