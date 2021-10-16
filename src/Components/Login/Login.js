import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
    // we can use the function - because we export the function from the last page . now we can destructing the value from the function;

    const { signInWithGoogle, signInWithGithub } = useAuth();

    return (
        <div>
            <div>
                <h5>Please Log in </h5>
                <br />
                <input type="text" placeholder="write here your email" />
                <br />
                <input type="password" placeholder="write here your password" />
                <br />
                <input type="submit" value="submit" />
            </div>
            <br />
            <div>------------------------- or -----------------------------</div>
            <div>
                <h5>Sign in with Google </h5>
                <button onClick={signInWithGoogle}>Google</button>
            </div>
            <div>
                <h5>Sign in with GitHub </h5>
                <button onClick={signInWithGithub}>GitHub</button>
            </div>
            <div>
                <h5>Create an Account? </h5>
                <Link to="/registration">click here </Link>
            </div>
        </div>
    );
};

export default Login;
