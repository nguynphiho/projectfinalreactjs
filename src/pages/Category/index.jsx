import data from "data";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./category.scss";
import ListProduct from "./ListProduct";
import SideBar from "./SideBar";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "redux/addToCart/actions";

function Category() {
  //get categories from data
  const categories = [];
  data.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  const isOpen = useSelector((state) => state.cartReducer.message.open);
  const dispatch = useDispatch();

  const [products, setProducts] = useState(data);
  const [activeCategory, setActiveCategory] = useState("");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function handleClose() {
    dispatch(closeMessage(false));
  }

  function handleCategoryChange(category) {
    const newProducts = data.filter((product) => {
      return product.category === category;
    });
    setProducts(newProducts);
    setActiveCategory(category);
  }

  function handleSubmit(value) {
    const newProducts = data.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(newProducts);
    setActiveCategory("");
  }
  return (
    <div className="category">
      <div
        className="banner"
        style={{
          backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg')`,
        }}
      >
        <h1 className="text-uppercase">shop</h1>
      </div>

      <Container style={{ padding: "5rem 0" }}>
        <Row>
          <Col sm={12} lg={9}>
            <ListProduct products={products} />
          </Col>
          <Col sm={12} lg={3}>
            <SideBar
              active={activeCategory}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
        <Snackbar
          open={isOpen}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleClose} severity="success">
            Add success
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
}

export default Category;
