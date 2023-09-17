import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterProvider,CartProvider } from './context';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ScrollToTop} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
      <ScrollToTop/>
      <ToastContainer closeButton = {false} autoClose={3000} position={"bottom-right"}/>
      <App />
      </FilterProvider>
      </CartProvider>
  
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

