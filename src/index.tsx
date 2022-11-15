import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './Styles/index.sass';

import Main from './Pages/Main';
import Info from "./Pages/Info";
import Footer from "./Components/Blocks/Footer/Footer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info/' element={<Info />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);