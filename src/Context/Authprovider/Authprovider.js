import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';

//declare context 
export const AuthContext = createContext();
// get auth
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // create user

    const [user, setUser] = useState({})

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }
    //sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // signout
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('auth state changed', currentUser)
        })

        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { googleLogin, setLoading, user, createUser, signIn, logOut, loading }
    return (
        //authcontext provider set provider



        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default Authprovider;