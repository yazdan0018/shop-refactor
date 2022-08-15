import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../container/HomePage';
import LoginPage from '../container/LoginPage';
import ProductsPage from '../container/ProductsPage';
import NotFound from '../container/NotFound';
import UnAuthenticatedRoute from './UnAuthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import Product from '../container/Product';

import Cart from '../container/Cart';

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
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/cart"
        element={
          <AuthenticatedRoute isAuthenticated={token}>
            <Cart />
          </AuthenticatedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
