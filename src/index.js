import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import View from './View';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page from './Page';
import { Update } from './Update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Login/>} >
     
    </Route>
    <Route path='/sign' element={<App/>}></Route>
    <Route path='/home' element={<Page/>}></Route>
    <Route path='/view' element={<View/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
     
    
  
    </Routes>
    


    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
