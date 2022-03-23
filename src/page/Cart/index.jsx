import React from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import './cart.scss';
function Cart(props) {
    return (
        <div className='cart'>
            <div
                className="banner"
                style={{
                    backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg')`
                }}>
                <h1 className='text-uppercase'>cart</h1>
            </div>

            <section className='cart__body'>
                <Container>
                    <Row>
                        <Table className='cart__table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center'>
                                        <AiOutlineClose style={{ cursor: 'pointer' }} />
                                    </td>
                                    <td>
                                        <div className="cart__table__product">
                                            <img
                                                className='d-none d-md-inline-block'
                                                src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/shop-img-8-300x300.jpg"
                                                alt="..." />
                                            <span>Gunpowder</span>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                    <td>
                                        <div className="cart__table__count">
                                            <input type="number" value={1} />
                                            <div className="cart__table__count-group">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                </tr>

                                <tr>
                                    <td className='text-center'>
                                        <AiOutlineClose style={{ cursor: 'pointer' }} />
                                    </td>
                                    <td>
                                        <div className="cart__table__product">
                                            <img
                                                className='d-none d-md-inline-block'
                                                src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/shop-img-8-300x300.jpg"
                                                alt="..." />
                                            <span>Gunpowder</span>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                    <td>
                                        <div className="cart__table__count">
                                            <input type="number" value={1} />
                                            <div className="cart__table__count-group">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <AiOutlineClose style={{ cursor: 'pointer' }} />
                                    </td>
                                    <td>
                                        <div className="cart__table__product">
                                            <img
                                                className='d-none d-md-inline-block'
                                                src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/shop-img-8-300x300.jpg"
                                                alt="..." />
                                            <span>Gunpowder</span>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                    <td>
                                        <div className="cart__table__count">
                                            <input type="number" value={1} />
                                            <div className="cart__table__count-group">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>€90.00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col>
                            <div className="cart__coupon">
                                <input type="text" placeholder='Coupon code' />
                                <Button>apply coupon</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <h2 className='text-uppercase fs-1 fw-light' style={{ fontFamily: 'Roboto Condensed,sans-serif' }}>Cart totals</h2>
                        </Col>
                        <Col sm={12}>
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className='fw-light'>€290.00</span>
                            </div>
                            <div className="subtotal">
                                <span>Total</span>
                                <span>€290.00</span>
                            </div>
                        </Col>
                        <Col sm={12} className='mt-5'>
                            <Button className='btn__checkout'>proceed to checkout</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
}

export default Cart;