import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        
    }

    // observe user state change
    useEffect(() => {
       
    }, [])

    const logOut = () => {
        
    }

    return {
        user, setUser,
        
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;