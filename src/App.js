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
import Blogs from "pages/Blog/index"
// import PrivateRoute from "Route/PrivateRoute";
import "./App.scss";
import Admin from "Admin";
import ManageUser from "pages/ManageUser";
import UserProfile from 'pages/ManageUser/UserProfile/index'
import AddNewUser from "pages/ManageUser/AddNewUser";
import EditUser from "pages/ManageUser/EditUser";
import NotFoundPage from "pages/NotFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginAndRegister />} />
      <Route exact path="/" element={<Customer />}>
        <Route index element={<Home />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/products" element={<Category />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Route>
        
      <Route exact path='/admin' element={<Admin />}>
        <Route exact path="/admin/manage-prods" index element={<ManageProducts />} />
        <Route exact path="/admin/manage-prods-details/:id" element={<ProductDetail />} />
        <Route exact path="/admin/manage-prods-details/edit/:id" element={<EditProduct />} />
        <Route exact path="/admin/addproduct" element={<AddNewProduct />} />

        <Route exact path="/admin/manage-users" element={<ManageUser />} />
        <Route exact path="/admin/manage-users/adduser" element={<AddNewUser />} />
        <Route exact path="/admin/manage-users/profile/:id" element={<UserProfile />} />
        <Route exact path="/admin/manage-user/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;