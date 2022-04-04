import Footer from "pages/Footer/Footer";
import Header from "pages/Header/Header";
import { Outlet } from "react-router-dom";

const Customer = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Customer;
