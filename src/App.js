import './App.css';
import Menu from './components/Menu';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Monitoring from './pages/Monitoring';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Power from './pages/Power'
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
                  {/* стартовая (временно) */}
                  <Route path="/" element={<Monitoring />} />
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
