import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
