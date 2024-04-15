import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);

    console.log(user);

    //New User Create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User sign in (Log in with email and password)
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google pop up log in
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    // GitHub pop up login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider); 
    }

    // Logout
    const logout =()=>{
        setUser(null);
        signOut(auth);
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
        googleLogin,
        githubLogin,
        logout,
        user,
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