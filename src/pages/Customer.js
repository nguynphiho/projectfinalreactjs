import Footer from "pages/Footer/Footer";
import Header from "pages/Header/Header";
import { Outlet } from "react-router-dom";
import Comments from "./Comment/Comments";
import Slider from "./Slider";


const Customer = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <Outlet />
      <Comments currentUserId="1"/>
      <Footer />
    </div>
  );
};

export default Customer;
