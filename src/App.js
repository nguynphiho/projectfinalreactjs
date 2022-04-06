import About from "pages/About";
import Admin from "pages/Admin";
import Cart from "pages/Cart";
import Category from "pages/Category";
import Customer from "pages/Customer";
import Home from "pages/Home";
import LoginAdmin from "pages/LoginAdmin";
import LoginAndRegister from "pages/LoginAndRegister";
import ManageProducts from "pages/ManageProducts";
import AddNewProduct from "pages/ManageProducts/AddNewProduct/AddNewProduct";
import EditProduct from "pages/ManageProducts/EditProduct/EditProduct";
import ProductDetail from "pages/ManageProducts/ViewProductDetail/ProductDetail";
import NotFoundPage from "pages/notfound/NotFoundPage";
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
      </Route>
      <Route path="/admin" element={<Admin />} >
        <Route exact path="/admin/manage-prods" element={<ManageProducts />} />
        <Route exact path="/admin/manage-prods-details/:id" element={<ProductDetail />} />
        <Route exact path="/admin/manage-prods-details/edit/:id" element={<EditProduct />} />
        <Route exact path="/admin/addproduct" element={<AddNewProduct />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
