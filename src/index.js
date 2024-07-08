import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 
import Register from './components/Register';
import Login from './components/Login'; 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<div> 
<Router> 
    <p>changes</p>
<Navbar/> 
<Routes> 
<Route path="/about" element={<h1>About</h1>}/> 
<Route path="/register" element={<Register/>}/> 
<Route path="/Login" element={<Login/>}/> 
</Routes> 
</Router> 
</div> 
); 