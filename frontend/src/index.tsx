import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const getRoot = document.getElementById('root')

if (getRoot) {
  const root = ReactDOM.createRoot(getRoot)

  root.render(
    <Provider store = {store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals(console.log);
}
