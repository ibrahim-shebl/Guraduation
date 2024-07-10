import React from 'react';
import ReactDOM from 'react-dom/client';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import './index.css';
import App from './App';
import store from "./store/store";
import { Provider } from "react-redux";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
      <Provider store={store}>
        <ToastContainer 
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
         
        />
        <App />
      </Provider>

  </React.StrictMode>
);

 
