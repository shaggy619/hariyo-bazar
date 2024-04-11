import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [cardItemCount, setCartItemCount] = useState(0);
  return (
    <>
      <Navbar cardItemCount={cardItemCount} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
