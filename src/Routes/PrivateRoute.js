import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <>
            <h1 className='text-xl text-center text-emerald-600'>Loading </h1>
        </>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;