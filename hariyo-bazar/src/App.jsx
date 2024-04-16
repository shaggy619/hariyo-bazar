import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartInfo from "./pages/CartInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart-info" element={<CartInfo />}></Route>
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
