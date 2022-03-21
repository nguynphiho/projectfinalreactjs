import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListProduct from './ListProduct';
import SideBar from './SideBar';
import './category.scss';
function Category(props) {

    return (
        <div className='category'>
            <div
                className="banner"
                style={{ backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg')` }}>
                <h1 className='text-uppercase'>shop</h1>
            </div>

            <Container>
                <Row>
                    <Col sm={9}>
                        <ListProduct />
                    </Col>
                    <Col sm={3}>
                        <SideBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Category;