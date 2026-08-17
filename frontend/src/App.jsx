
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

