import React from "react"
import { Container, Row, Col, Form, Pagination } from "react-bootstrap"
import Product from "pages/Product"

function ListProduct(props) {
    const { products } = props

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
                            <option>Default sorting</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
            </Row>
            <Row>
                {products.map((product) => {
                    return (
                        <Col key={product.id} sm={12} md={4} xl={4}>
                            <Product
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                image={product.image}
                            />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Pagination size="lg" className="justify-content-end">
                    <Pagination.Prev />
                    <Pagination.Next />
                </Pagination>
            </Row>
        </Container>
    )
}

export default ListProduct
