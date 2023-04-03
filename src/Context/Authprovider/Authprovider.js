import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.init';

//declare context 
export const AuthContext = createContext();
// get auth
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // create user

    const [user, setUser] = useState({ displayName: 'marjan' })

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }
    //sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login

    // const googleProvider = new GoogleAuthProvider();

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const authInfo = { googleLogin, setLoading, user, createUser, signIn }
    return (
        //authcontext provider set provider



        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default Authprovider;