import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Greet from './component/greet'
import Navbar from './component/navbar'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

{/* <h1>Jai Shri Radhe</h1> */}
<Greet/>
<Greet/>
<Navbar/>
</>
)
