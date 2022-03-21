import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Procduct from '../../../components/Product';
function ListProduct(props) {
    return (
        <Container>
            <Row>
                <div className="category__notice">
                    <span className="category__notice__result">Showing 1-9 of 12 results</span>
                    <div className="category__notice__filter">
                        <Form.Select className='shadow-none py-2' aria-label="Default select example">
                            <option>Default sorting</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
            </Row>
            <Row>
                <Col sm={4}>
                    <Procduct name="Bera Bera" />
                </Col>
                <Col sm={4}>
                    <Procduct name="Bera Bera" />
                </Col>
                <Col sm={4}>
                    <Procduct name="Bera Bera" />
                </Col>
            </Row>
        </Container>
    );
}

export default ListProduct;