import About from "pages/About";
import Admin from "pages/Admin";
import Cart from "pages/Cart";
import Category from "pages/Category";
import Checkout from "pages/Checkout";
import Customer from "pages/Customer";
import Home from "pages/Home";
import LoginAdmin from "pages/LoginAdmin";
import LoginAndRegister from "pages/LoginAndRegister";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Customer />}>
        <Route index element={<Home />} />
        <Route exact path="/login" element={<LoginAndRegister />} />
        <Route exact path="/products" element={<Category />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<LoginAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
