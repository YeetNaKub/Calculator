import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Bisection from './page/bisection';
import FalsePosition from './page/false-position';
import Newton from './page/newton';
import OnePoint from './page/onepoint';
import Secant from './page/secant';
import Cramer from './page/cramer';
import GaussElimination from './page/gauss-eli';
import NewtonDivided from './page/newton-divided';
import Lagrange from './page/lagrange';
import CramerV2 from './page/cramerv2';
import Function from './page/func';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Bisection/>} />
          <Route path='/False Position' exact element={<FalsePosition/>} />
          <Route path='/Newton Raphson' exact element={<Newton/>} />
          <Route path='/One Point' exact element={<OnePoint/>} />
          <Route path='/Secant' exact element={<Secant/>} />
          <Route path='/Cramer Rule' exact element={<Cramer/>} />
          <Route path='/CramerV2' exact element={<CramerV2/>} />
          <Route path='/Gauss Elimination' exact element={<GaussElimination/>} />
          <Route path='/Newton Divided' exact element={<NewtonDivided/>} />
          <Route path='/Lagrange' exact element={<Lagrange/>} />
          <Route path='/Function' exact element={<Function/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
