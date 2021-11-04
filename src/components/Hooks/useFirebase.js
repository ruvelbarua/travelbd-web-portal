import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    // Refresh
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    // Google Signin
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createAccountWithGoogle = (email, password) => {
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        console.log(email, password)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name }
            setUser(newUser)
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    // SignOut
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    // Return
    return {
        user, setUser,
        signInWithGoogle, logOut,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        isLoading, setIsLoading,
        updateName
    }
}

export default useFirebase;