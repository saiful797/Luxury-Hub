import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {
    const allValues = {name: 'test'}
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node,
}

export default FirebaseProvider;