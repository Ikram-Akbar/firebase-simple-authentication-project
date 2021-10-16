import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.config"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


// initialize the authentication first..
initializeAuthentication();


// create a custom hook - useFirebase ;
const useFirebase = () => {
    // use useState hook for user information: we can put here curly bracket as a empty object or you can use null as value of useState! 

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    //  create or copy the provider form the doc .. 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const auth = getAuth();
    //  create a function -which will be work as a event handler . 
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            });
    };
    // GitHub authentication 

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // logout function start here -- 
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    // now we can use useEffect for loading user data . this will call in one time so we can set e empty square bracket

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("inside state change", user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
};

export default useFirebase;
