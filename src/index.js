import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Works from './pages/Works'
import { HashRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
  
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
      </Route>
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

