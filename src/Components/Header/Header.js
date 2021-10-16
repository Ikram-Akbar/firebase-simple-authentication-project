import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,logout} =useAuth();
    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/login">Login </Link>
            <Link to="/registration">Registration</Link>
            <span>{user?.displayName} </span>
           {user?.email && <button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;