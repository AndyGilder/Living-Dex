import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
