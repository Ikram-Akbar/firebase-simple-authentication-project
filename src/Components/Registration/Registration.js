import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h3>Please Complete your Registration Process </h3>
            <form >
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to='/login'>Already Have an Account?</Link>
        </div>
    );
};

export default Registration;