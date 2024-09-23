import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import CreateCar from "./views/CreateCar";
import Details from "./views/Details";
import MyPosts from "./views/MyPosts";
import "./App.css";
function App() {
  const { authenticated } = useContext(AuthContext);
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create/car" element={<CreateCar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:carId" element={<Details />} />
          {authenticated && <Route path="/my-posts" element={<MyPosts />} />}
        </Routes>
      </div>
    </>
  );
}

export default App;
