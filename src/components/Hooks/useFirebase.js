import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    // Google Signin
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const createAccountWithGoogle = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password, location, history) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                const newUser = { ...user, displayName: name }
                setUser(newUser)
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }
    // SignOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // Refresh
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

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