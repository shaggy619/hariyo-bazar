import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartInfo from "./pages/CartInfo";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <CartInfo />
    </>
  );
}

export default App;
