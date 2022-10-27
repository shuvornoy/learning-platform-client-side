import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firbase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin= (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const gitProvider = (provider) => {
         setLoading(true);
        return signInWithPopup (auth, provider)
    }
    const logOut = () => {
          setLoading(true);
        return signOut(auth)
    }
    const createUser = (email, password) => {
          setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password) 
    }
    const signIn = (email, password) => {
          setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile )
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('statechanged',currentUser);
              setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = { user,updateUserProfile,gitProvider, logOut,createUser,loading, signIn, providerLogin };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {
                children
            }
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;