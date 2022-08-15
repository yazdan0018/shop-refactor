// @flow

import { put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { AsyncModuleState } from '../types';
import service from '../../utils/api';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

const initialState: AsyncModuleState = {
  loading: false,
  loaded: false,
  data: [],
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: () => ({
      ...initialState,
      loading: true,
    }),
    loadProductsSuccess: (state, action) => ({
      ...initialState,
      loaded: true,
      data: action.payload,
    }),
    loadProductsFailure: (state, action) => ({
      ...initialState,
      loaded: true,
      error: action.payload,
    }),
  },
});

export const {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} = productsSlice.actions;

export function* watchLoadProducts(action) {
  try {
    const response = yield service({
      method: 'get',
      url: PRODUCTS_URL,
      data: action.payload,
    });
    if (response.status === 200) {
      yield put(loadProductsSuccess(response.data));
    } else {
      throw new Error('No data found');
    }
  } catch (e) {
    console.log(e);
    yield put(loadProductsFailure(e));
  }
}

export default productsSlice.reducer;
