import { useState } from 'react';
import './App.css'
import Navbar from './views/components/Navbar';
import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('user') !== null
  );

  return (
    <>
      <div className="App">
        <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
          <Route path="/login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        </Routes>

      </div>
    </>
  )
}

export default App
