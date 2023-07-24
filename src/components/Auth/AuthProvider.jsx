import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../configs/firebase.config';
// import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);


    const createUser = (email, password ) =>{
     return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut =()=> {
      return signOut(auth)
    }

//Sign up to google
const googleSignIn=()=>{
    const provider = new GoogleAuthProvider();

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
        googleSignIn
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProviders;