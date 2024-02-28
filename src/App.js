import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './table/Home';
import AllData from './table/AllData';

function App() {
  return (
    <>
    <Routes>
        {/* <Route path="/dashboard" element={<h/>} /> */}
      
      <Route path='/' element = {<Home/>}/>
      <Route path='/table/:id' element = {<AllData/>}/>

      
    </Routes>
    </>
  );
}

export default App;
