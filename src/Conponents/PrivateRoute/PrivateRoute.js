import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contextApi } from '../../App';

const PrivateRoute = ({ children }) => {
    const [isLoggedIn] = useContext(contextApi)
    let location = useLocation();
  
    if (!isLoggedIn?.email) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return children;
  }

export default PrivateRoute;