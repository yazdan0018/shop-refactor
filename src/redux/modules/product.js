// @flow

import { put } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { AsyncModuleState } from '../types';
import service from '../../utils/api';

const PRODUCT_URL = 'https://fakestoreapi.com/products/';

const initialState: AsyncModuleState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProduct: () => ({
      ...initialState,
      loading: true,
    }),
    loadProductSuccess: (state, action) => ({
      ...initialState,
      loaded: true,
      data: action.payload,
    }),
    loadProductFailure: (state, action) => ({
      ...initialState,
      loaded: true,
      error: action.payload,
    }),
  },
});

export const {
  loadProduct,
  loadProductSuccess,
  loadProductFailure,
} = productSlice.actions;

export function* watchLoadProduct(action) {
  try {
    const response = yield service({
      method: 'get',
      url: `${PRODUCT_URL}/${action.payload.id}`,
      data: action.payload,
    });
    if (response.status === 200) {
      yield put(loadProductSuccess(response.data));
    } else {
      throw new Error('No data found');
    }
  } catch (e) {
    console.log(e);
    yield put(loadProductFailure(e));
  }
}

export default productSlice.reducer;
