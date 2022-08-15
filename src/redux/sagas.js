import { all, takeEvery } from 'redux-saga/effects';
import { login, watchLogin } from './modules/login';
import {
  loadProducts,
  watchLoadProducts,
} from './modules/products';
import {
  loadProduct,
  watchLoadProduct,
} from './modules/product';

console.log(login.type, 'this is action');
export default function* root() {
  yield all([
    takeEvery(loadProducts.type, watchLoadProducts),
    takeEvery(login.type, watchLogin),
    takeEvery(loadProduct.type, watchLoadProduct),
  ]);
}
