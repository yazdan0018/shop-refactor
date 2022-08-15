import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './modules/login';
import tokenReducer from './modules/token';
import productsReducer from './modules/products';
import cartReducer from './modules/cart';
import productReducer from './modules/product';

const rootReducer = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  products: productsReducer,
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
