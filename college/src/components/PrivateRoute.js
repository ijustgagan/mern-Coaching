// components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={props =>
        currentUser ? <Element {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
