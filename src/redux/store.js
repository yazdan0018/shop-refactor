import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'cart'],
};

let persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

const storeCreator = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
  });
  store.rootTask = sagaMiddleware.run(sagas);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default storeCreator;
