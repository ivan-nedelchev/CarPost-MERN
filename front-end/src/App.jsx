import { useState } from 'react';
import './App.css'
import Navbar from './views/components/Navbar';
import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';
import CreateCar from './views/CreateCar';
import Details from './views/Details';
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
          <Route path="/create/car" element={<CreateCar />} />
          <Route path="/register" element={<Register authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
          <Route path="/login" element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
          <Route path="/details/:carId" element={<Details/>} />
        </Routes>

      </div>
    </>
  )
}

export default App
