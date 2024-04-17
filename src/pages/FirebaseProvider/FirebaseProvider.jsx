import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

export const AuthContext = createContext(null);

// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    //Update user profile
    const updateUserProfile = (fullName, imageURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: fullName, 
            photoURL: imageURL,
          })
    }

    //New User Create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User sign in (Log in with email and password)
    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google pop up log in
    const googleLogin = () =>{
        setLoading(true);
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
        setLoading(false);
        {
            <Link to='/'></Link>
        }
    }

    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setLoading(false);
            } 
        });

    },[])

    const allValues = {
        createUser,
        singInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
        user,
        loading,
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