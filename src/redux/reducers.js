import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './modules/login';
import tokenReducer from './modules/token';

const rootReducer = combineReducers({
  login: loginReducer,
  token: tokenReducer,
});

export default rootReducer;
