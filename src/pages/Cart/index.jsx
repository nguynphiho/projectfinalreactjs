import QuantityGroup from "pages/Cart/QuantityGroup";
import React, { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartDeleteRequest, cartFetchRequest } from "redux/manageCart/actions";
import "./cart.scss";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const { carts, totalCost } = useSelector((state) => state.cartReducer);
  console.log(carts);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartFetchRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(cartDeleteRequest(id));
  };

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
        {!carts ? (
          <h2 className="text-center fw-light">Nothing here</h2>
        ) : (
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
                  {carts.map((cart) => {
                    return (
                      <tr key={cart.id}>
                        <td className="text-center">
                          <AiOutlineClose
                            onClick={() => handleDelete(cart.id)}
                            style={{ cursor: "pointer" }}
                          />
                        </td>
                        <td>
                          <div className="cart__table__product">
                            <img
                              className="d-none d-md-inline-block"
                              src={
                                "http://127.0.0.1:8887/" + cart.product.image
                              }
                              alt="Product"
                            />
                            <span>{cart.product.name}</span>
                          </div>
                        </td>
                        <td>$ {cart.product.price}</td>
                        <td>
                          <QuantityGroup id={cart.id} quantity={cart.quantity} />
                        </td>
                        <td>
                          $ {Math.round(cart.quantity * cart.product.price)}
                        </td>
                      </tr>
                    );
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
                  <span className="fw-light">$ {Math.round(totalCost)}</span>
                </div>
                <div className="subtotal">
                  <span>Total</span>
                  <span>$ {Math.round(totalCost)}</span>
                </div>
              </Col>
              <Col sm={12} className="mt-5">
                <Button
                  className="btn__checkout"
                  onClick={() => navigate("/checkout")}
                >
                  Checkout
                </Button>
              </Col>
            </Row>
          </Container>
        )}
      </section>
    </div>
  );
}

export default Cart;
