import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Menu from "../pages/Menu";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
