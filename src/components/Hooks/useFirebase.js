import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    return {
        user, setUser,
        signInWithGoogle
    }
}

export default useFirebase;