import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./category.scss";
import ListProduct from "./ListProduct";
import SideBar from "./SideBar";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { requestCategories } from "redux/manageProduct/category/actions";
import {
  fetchAllProductAsync,
  filterProductRequest,
} from "redux/manageProduct/actions";
import useInput from "hooks/input.hooks";
import { requestStatuses } from "redux/manageProduct/productStatus/actions";
import { closeMessage } from "redux/message/actions";

function Category() {
  const dispatch = useDispatch();

  const { open } = useSelector((state) => state.messageReducer);
  const { fetching, products } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);

  const { value: activeCategory, setValue: setActiveCategory } = useInput("");

  useEffect(() => {
    dispatch(fetchAllProductAsync());
    dispatch(requestCategories());
    dispatch(requestStatuses());
  }, [dispatch]);

  function handleCategoryChange(category) {
    dispatch(filterProductRequest(category.title, "", "", ""));
    setActiveCategory(category);
  }

  function searchFilter(searchText) {
    dispatch(filterProductRequest("", "", "", searchText));
    setActiveCategory("");
  }

  function handleClose() {
    dispatch(closeMessage(false));
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
            {!fetching && products && <ListProduct products={products} />}
          </Col>
          <Col sm={12} lg={3}>
            <SideBar
              categories={categories}
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
              searchFilter={searchFilter}
            />
          </Col>
        </Row>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
          >
            Add success
          </MuiAlert>
        </Snackbar>
      </Container>
    </div>
  );
}

export default Category;
