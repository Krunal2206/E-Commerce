import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import Shop from './pages/Shop'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" index />
        <Route element={<ProductList />} path="/products/:product" />
        <Route element={<Product />} path="/product/:id" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<Order />} path="/order" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
