import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './Styles/index.sass';

import Product from './Pages/Product';
import Main from "./Pages/Main";
import Footer from "./Components/Blocks/Footer/Footer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/' element={<Product />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);