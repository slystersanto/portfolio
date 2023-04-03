import React from 'react';
import NavBar from "./Components/NavBar";
import { Routes,Route, } from 'react-router-dom';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skill/>}/>
      <Route path="/contacts" element={<Contact/>}/>
      
      {/* <Route path="/about" element={<DashBoard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/history" element={<History />} /> */}
    </Routes>
  </div>
  );
}

export default App;
