import React from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import QuantityGroup from "components/QuantityGroup";
import "./cart.scss";
import { cartDelete } from "redux/addToCart/actions";
function Cart() {
  const cartStore = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(cartDelete(id))
  }
  const subTotal = cartStore.reduce((prev, item) => {
    return prev + item.quantity * item.price;
  }, 0)

  console.log(subTotal)
  return (
    <div className="cart">
      <div
        className="banner"
        style={{
          backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg')`,
        }}
      >
        <h1 className="text-uppercase">cart</h1>
      </div>

      <section className="cart__body">
        <Container>
          <Row>
            <Table className="cart__table">
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
                {cartStore.map((product) => {
                  // const total = product.price * product.quantity
                  return (
                    <tr key={product.id}>
                      <td className="text-center">
                        <AiOutlineClose onClick={() => handleDelete(product.id)} style={{ cursor: "pointer" }} />
                      </td>
                      <td>
                        <div className="cart__table__product">
                          <img
                            className="d-none d-md-inline-block"
                            src={product.image}
                            alt="..."
                          />
                          <span>{product.name}</span>
                        </div>
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <QuantityGroup id={product.id} value={product.quantity} />
                      </td>
                      <td>{product.quantity * product.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col>
              <div className="cart__coupon">
                <input type="text" placeholder="Coupon code" />
                <Button>apply coupon</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h2
                className="text-uppercase fs-1 fw-light"
                style={{ fontFamily: "Roboto Condensed,sans-serif" }}
              >
                Cart totals
              </h2>
            </Col>
            <Col sm={12}>
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="fw-light">€{subTotal}</span>
              </div>
              <div className="subtotal">
                <span>Total</span>
                <span>€{subTotal}</span>
              </div>
            </Col>
            <Col sm={12} className="mt-5">
              <Button className="btn__checkout">proceed to checkout</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Cart;
