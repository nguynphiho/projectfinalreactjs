import Footer from "pages/Footer/Footer";
import Header from "pages/Header/Header";
import { Outlet } from "react-router-dom";

const Customer = () => {
  return (
    <div>
      <Header />
      <div className="container mainContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Customer;
