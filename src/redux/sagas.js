import { all, takeEvery } from 'redux-saga/effects';
import { login, watchLogin } from './modules/login';

console.log(login.type, 'this is action');
export default function* root() {
  yield all([takeEvery(login.type, watchLogin)]);
}
