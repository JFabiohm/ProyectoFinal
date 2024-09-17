import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Register from '../pages/Register';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Productos from '../pages/Productos'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Productos" element={<Productos/>}/>

      </Routes>
    </Router>
  );
};

export default Routing;
