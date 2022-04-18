import About from "pages/About";
import Cart from "pages/Cart";
import Category from "pages/Category";
import Customer from "Customer";
import ForgotPassword from "pages/ForgotPassword";
import Home from "pages/Home";
import LoginAndRegister from "pages/LoginAndRegister";
import ManageProducts from "pages/ManageProducts";
import AddNewProduct from "pages/ManageProducts/AddNewProduct/AddNewProduct";
import EditProduct from "pages/ManageProducts/EditProduct/EditProduct";
import ProductDetail from "pages/ManageProducts/ViewProductDetail/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Checkout from "pages/Checkout";
import PrivateRoute from "Route/PrivateRoute";
import "./App.scss";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginAndRegister />} />
      <Route exact path="/" element={<Customer />}>
        <Route index element={<Home />} />
        <Route exact path="forgot-password" element={<ForgotPassword />} />
        <Route exact path="products" element={<Category />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="about-us" element={<About />} />
        <Route exact path="checkout" element={<Checkout />} />
      </Route>

      <Route exact path="/admin" element={<PrivateRoute />}>
        <Route exact path="manage-prods" element={<ManageProducts />} />
        <Route
          exact
          path="manage-prods-details/:id"
          element={<ProductDetail />}
        />
        <Route
          exact
          path="manage-prods-details/edit/:id"
          element={<EditProduct />}
        />
        <Route exact path="add-product" element={<AddNewProduct />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
