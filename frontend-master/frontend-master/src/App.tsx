import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
