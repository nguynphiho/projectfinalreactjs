import { useCheckbox } from "hooks/input.hooks";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  cartFetchRequest,
  cartAddRequest,
} from "redux/manageCart/actions";
import { openMessage } from "redux/message/actions";
import "./style.scss";

function ProductItem({ product }) {
  const { title, image, price, id, vote, status } = product;

  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.cartReducer);
  const { statuses } = useSelector((state) => state.statusReducer);

  const { value: inCart, setValue: setInCart } = useCheckbox(false);

  useEffect(() => {
    dispatch(cartFetchRequest());
  }, [dispatch]);

  useEffect(() => {
    setInCart(carts.some((item) => item.product.id === id));
  }, [carts, id]);

  function handleAddToCart() {
    dispatch(
      cartAddRequest({
        productId: id,
        quantity: 1,
      })
    );

    dispatch(
      openMessage({
        open: true,
        type: "success",
      })
    );
  }

  return (
    <Card className="product">
      <NavLink to={`/product/${id}`}>
        <Card.Img
          style={{
            backgroundImage: `url(http://127.0.0.1:8887/${image.replaceAll(
              "\\",
              "/"
            )})`,
          }}
          variant="top"
          className="product__image"
        />
      </NavLink>
      <Card.Body className="text-center product__content">
        <Card.Title className="product__title">
          <NavLink to={`/product/${id}`}>{title}</NavLink>
        </Card.Title>
        <Card.Text>
          {[1, 2, 3, 4, 5].map((num) => {
            if (num <= vote) {
              return <BsStarFill key={num} className="product__star" />;
            } else {
              return <BsStar key={num} className="product__star" />;
            }
          })}
        </Card.Text>
        <Card.Text className="product__price">
          <span className="product__price-text">${price}</span>
          {inCart ? (
            <NavLink to="/cart" className="product__price__add">
              View Cart
            </NavLink>
          ) : (
            <span onClick={handleAddToCart} className="product__price__add">
              Add to cart
            </span>
          )}
        </Card.Text>
      </Card.Body>
      {!!statuses && (
        <span className="product__state">
          {Object.entries(statuses).find((st) => st[0] === status)[1]}
        </span>
      )}
    </Card>
  );
}

export default ProductItem;
