import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
  <App />
  <ToastContainer className='mt-14 md:mt-20 sm:mt-6'></ToastContainer>

 
  </Router>
  
);
