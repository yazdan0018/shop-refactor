import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './components/Providers';
import { BrowserRouter } from 'react-router-dom';
import storeCreator from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = storeCreator();

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Providers>
            <App />
          </Providers>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
