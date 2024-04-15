import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    console.log(user);

    //New User Create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User sign in
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
        });

    },[])

    const allValues = {
        createUser,
        singInUser,
    }

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