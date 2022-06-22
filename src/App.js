import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products'
import Product from './component/Product'
import { Routes, Route } from 'react-router-dom'
import Cart from './component/Cart'
import Checkout from './component/Checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
