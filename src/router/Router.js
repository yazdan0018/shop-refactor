import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../container/HomePage';
import LoginPage from '../container/LoginPage';
import ProductsPage from '../container/ProductsPage';
import NotFound from '../container/NotFound';
import UnAuthenticatedRoute from './UnAuthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import { useSelector } from 'react-redux';

const Router = () => {
  const token = useSelector(state => state.token.token);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <UnAuthenticatedRoute isAuthenticated={token}>
            <LoginPage />
          </UnAuthenticatedRoute>
        }
      />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
