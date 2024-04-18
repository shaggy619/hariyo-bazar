import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartInfo from "./pages/CartInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Login from "./pages/Login";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart-info" element={<CartInfo />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
