import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import { SearchContextProvider } from "./context/SearchContext";
import Navbar from "./views/components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import CreateCar from "./views/CreateCar";
import Details from "./views/Details";
import MyPosts from "./views/MyPosts";
import Footer from "./views/components/Footer";
import SearchAdvanced from "./views/SearchAdvanced";
import SearchResults from "./views/SearchResults";
import "./App.css";
function App() {
  const { authenticated } = useContext(AuthContext);
  return (
    <>
      <div className="App">
        <UserProgressContextProvider>
          <Navbar />
          <Login />
          <Register />
        </UserProgressContextProvider>
        <SearchContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create/car" element={<CreateCar />} />
            <Route path="/details/:carId" element={<Details />} />
            <Route path="/search" element={<SearchAdvanced />} />
            <Route path="/results" element={<SearchResults />} />
            {authenticated && <Route path="/my-posts" element={<MyPosts />} />}
          </Routes>
        </SearchContextProvider>

        <Footer />
      </div>
    </>
  );
}

export default App;
