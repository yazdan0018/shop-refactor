// @flow

import { put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { AsyncModuleState } from '../types';
import service from '../../utils/api';
import { tokenAdd } from './token';

const LOGIN_URL = 'https://reqres.in/api/login';
const initialState: AsyncModuleState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: () => ({
      ...initialState,
      loading: true,
    }),
    loginSuccess: (state, action) => ({
      ...initialState,
      loading: false,
      loaded: true,
      data: action.payload,
    }),
    loginFailure: (state, action) => ({
      ...initialState,
      loaded: true,
      error: action.payload,
    }),
  },
});

const { login, loginSuccess, loginFailure } =
  loginSlice.actions;

export function* watchLogin(action) {
  try {
    const response = yield service({
      method: 'post',
      url: LOGIN_URL,
      data: action.payload,
    });
    if (response.status === 200) {
      yield put(loginSuccess(response));
      yield put(tokenAdd(response.data.token));
    }
    throw new Error(response);
  } catch (e) {
    console.log(e);
    yield put(loginFailure(e));
  }
}
export { login, loginSuccess };
export default loginSlice.reducer;
