import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../container/HomePage';
import LoginPage from '../container/LoginPage';
import ProductsPage from '../container/ProductsPage';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Routes>
);

export default Router;
