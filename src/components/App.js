import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Students from './Students';
import Register from './Register';
import Basket from './Basket';
import Login from './auth/Login';


const App = () => {
  
 
  function extractDate(timestamp) {
    return timestamp.split('T')[0];
  }
  function extractTime(timestamp) {
    return timestamp.split('T')[1].split('.')[0].slice(0, -3);
  }
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<Students />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
