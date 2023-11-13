import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  // Check if the access token is present in localStorage
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  // If authenticated, render the route content; otherwise, redirect to login
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

export default ProtectedRoute;
