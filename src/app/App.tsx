import { Routes, Route } from "react-router-dom"
import Menu from "../pages/Menu"
import Checkout from "../pages/Checkout"
import Navbar from "../components/Navbar"
import OrderSuccess from "../pages/OrderSuccess"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
    </>
  )
}

export default App