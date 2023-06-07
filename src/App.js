import 'tailwindcss/tailwind.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Connect from './connect';
import Home from './home';
function App(){
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Connect/>
    </BrowserRouter>
    </>
  )
}
export default App;