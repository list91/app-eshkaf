import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Monitoring from './pages/Monitoring';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Power from './pages/Power'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import GraphPage from './pages/GraphPage';
Chart.register(CategoryScale);
function App() {
  return (
    <div className="App content">
        <div className='container'>
          <Menu/>
          <div className="header_and_maincontent_container">
            <Header/>
            <div id='main-content'>
              <BrowserRouter>
                <Routes>
                  <Route path="power" element={<Power />} />
                  <Route path="/:power/monitoring" element={<Monitoring />} />
                  <Route path="/:power/monitoring/:param/graph" element={<GraphPage />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
  ); 
}

export default App;
