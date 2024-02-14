import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Monitoring from './pages/Monitoring';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Power from './pages/Power'
import ParamGraph from './pages/ParamGraph';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import { useState } from "react";
// import { Data } from "./Data";
// import "./styles.css";

Chart.register(CategoryScale);
function App() {
  return (
    <div className="App">
        <div className='container'>
          <Menu/>
          <div className="header_and_maincontent_container">
            <Header/>
            <div id='main-content'>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<ParamGraph />} />
                  <Route path="/:selectedPower/monitoring" element={<Monitoring />} />
                  <Route path="power" element={<Power />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
  ); 
}

export default App;
