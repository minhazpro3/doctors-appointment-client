import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
 ;


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div><h5>Loading</h5></div>
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;