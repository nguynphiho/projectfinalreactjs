import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Customer from "pages/Customer";
import Admin from "pages/Admin";
import Home from "pages/Home";
import Category from "pages/Category";
import Cart from "pages/Cart";
import SignInOutContainter from "pages/LoginAndRegister";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Customer />}>
        <Route index element={<Home />} />
        <Route exact path="/products" element={<Category />} />
        <Route exact path="/cart" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<SignInOutContainter />} />
      </Route>
    </Routes>
  );
}

export default App;
