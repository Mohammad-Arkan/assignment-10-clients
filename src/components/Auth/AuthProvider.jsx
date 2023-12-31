import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../configs/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);


    const createUser = (email, password ) =>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut =()=> {
      return signOut(auth)
    }

    //observe auth state change
    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        console.log('auth state chang', currentUser)
        setUser(currentUser)
        setLoading(false);
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        // googleSignIn
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProviders;