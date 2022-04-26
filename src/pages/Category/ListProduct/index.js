import React, { useEffect } from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import Product from "pages/Category/ListProduct/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import useInput from "hooks/input.hooks";
import { filterProductRequest } from "redux/manageProduct/actions";

const prices = [
  {
    id: 0,
    title: "Select Price",
    value: "0-100000",
  },
  {
    id: 1,
    title: "Dưới $10",
    value: "0-10",
  },
  {
    id: 2,
    title: "Dưới $20",
    value: "0-20",
  },
  {
    id: 3,
    title: "Từ $20 đến $50",
    value: "20-50",
  },
  {
    id: 4,
    title: "Từ $50 đến $100",
    value: "50-100",
  },
  {
    id: 5,
    title: "Trên $100",
    value: "100-100000",
  },
];

function ListProduct({ products }) {
  const dispatch = useDispatch();

  const { statuses } = useSelector((state) => state.statusReducer);

  const {
    value: status,
    onChange: onChangeStatus,
    reset: resetStatus,
  } = useInput("");
  const {
    value: price,
    onChange: onChangePrice,
    reset: resetPrice,
  } = useInput("");

  useEffect(() => {
    if (!!status) {
      dispatch(filterProductRequest("", "", status, "", []));
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (!!price) {
      dispatch(filterProductRequest("", "", "", "", price.split("-")));
    }
  }, [dispatch, price]);

  // const handleReset = () => {
  //   resetStatus();
  //   resetPrice();
  //   dispatch(filterProductRequest("", "", "", "", []));
  // };

  return (
    <Container>
      <Row>
        <div className="category__notice">
          <span className="category__notice__result">
            Showing 1-9 of 12 results
          </span>
          <div className="category__notice__filter">
            <Form.Select
              className="shadow-none py-2"
              aria-label="Default select example"
              value={status}
              onChange={onChangeStatus}
            >
              <option>Select Status</option>
              {!!statuses &&
                Object.entries(statuses).map((item) => (
                  <option key={item[0]} value={item[0]}>
                    {item[1]}
                  </option>
                ))}
            </Form.Select>
          </div>
          <div className="category__notice__filter">
            <Form.Select
              className="shadow-none py-2"
              aria-label="Default select example"
              value={price}
              onChange={onChangePrice}
            >
              {prices.map((price) => (
                <option key={price.id} value={price.value}>
                  {price.title}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </Row>
      <Row>
        {products.map((product) => {
          return (
            <Col
              key={product.id}
              sm={12}
              md={4}
              xl={4}
              style={{ marginBottom: "24px" }}
            >
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Pagination size="lg" className="justify-content-end">
          <Pagination.Prev />
          <Pagination.Next />
        </Pagination>
      </Row>
    </Container>
  );
}

export default ListProduct;
