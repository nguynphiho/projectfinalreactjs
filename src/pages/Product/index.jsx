import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartAdd, openMessage } from "redux/addToCart/actions";
import "./style.scss";
function Product(props) {
  const { name, image, price, id } = props;
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cartReducer.cartStore);
  const [inCart, setInCart] = useState(false);
  const link = `/product/${id}`;

  useEffect(() => {
    setInCart(cartStore.some((item) => item.id === id));
  }, [cartStore, id]);

  function handleAddToCart() {
    dispatch(
      cartAdd({
        ...props,
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
      <NavLink to={link}>
        <Card.Img
          style={{
            backgroundImage: `url(${image})`,
          }}
          variant="top"
          className="product__image"
        />
      </NavLink>
      <Card.Body className="text-center product__content">
        <Card.Title className="product__title">
          <NavLink to={link}>{name}</NavLink>
        </Card.Title>
        <Card.Text>
          <BsStarFill className="product__star" />
          <BsStarFill className="product__star" />
          <BsStarFill className="product__star" />
          <BsStarHalf className="product__star" />
          <BsStar className="product__star" />
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
      <span className="product__state">Sale</span>
    </Card>
  );
}

export default Product;
