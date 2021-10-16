import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Home.css'

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Welcome Mr {user.displayName}</h2>
        </div>
    );
};

export default Home;