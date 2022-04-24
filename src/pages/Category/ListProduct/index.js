import React from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import Product from "pages/Category/ListProduct/Product";
import { useSelector } from "react-redux";

function ListProduct({ products }) {
  const { statuses } = useSelector((state) => state.statusReducer);

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
            >
              <option>Select Price</option>
              {!!statuses &&
                Object.entries(statuses).map((item) => (
                  <option key={item[0]} value={item[0]}>
                    {item[1]}
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
