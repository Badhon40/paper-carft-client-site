import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext=createContext(null)

const FirebaseProvider = ({children}) => {
     const [user,setUser]=useState(null)

    //  console.log(user)
     const [loading,setLoading]=useState(true)
// createUser
     const createUser=(email,password)=>{
            //  setLoading(true)
           
            return createUserWithEmailAndPassword(auth,email,password)
        }

        //SignIn user 
        const signinUser=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)

        }

        // google Login

        const googleProvider=new GoogleAuthProvider()

        const googleLogin=()=>{
            return signInWithPopup(auth,googleProvider)
        }

        // github login
        const gitHubProvider = new GithubAuthProvider();

        const githubLogin=()=>{
         return  signInWithPopup(auth, gitHubProvider)
        }


    // sign out
        const logout=()=>{
            setUser(null)
            signOut(auth)
        }


// objerver
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                    setUser(user)
              
            }
          });
          
     },[])

    const info={
        user,
        setUser,
        createUser,
        signinUser,
        googleLogin,
        githubLogin,
        logout

    }
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;