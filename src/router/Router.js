import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../container/HomePage';
import LoginPage from '../container/LoginPage';
import ProductsPage from '../container/ProductsPage';
import NotFound from '../container/NotFound';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
