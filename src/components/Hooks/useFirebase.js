import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Refress
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user) {
                    setUser(user);
                }

            } else {
                setError("");
            }
        });

    })

    // Return
    return {
        user, setUser,
        signInWithGoogle
    }
}

export default useFirebase;