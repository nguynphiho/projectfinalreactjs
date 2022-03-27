import React from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./style.scss";
function Procduct(props) {
  return (
    <Card className="product">
      <Card.Img
        style={{
          backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/shop-img-1-300x300.jpg')`,
        }}
        variant="top"
        className="product__image"
      />
      <Card.Body className="text-center product__content">
        <Card.Title className="product__title">{props.name}</Card.Title>
        <Card.Text>
          <BsStarFill className="product__star" />
          <BsStarFill className="product__star" />
          <BsStarFill className="product__star" />
          <BsStarHalf className="product__star" />
          <BsStar className="product__star" />
        </Card.Text>
        <Card.Text className="product__price">
          <span className="product__price-text">$90.00</span>
          <span className="product__price__add">Add to cart</span>
        </Card.Text>
      </Card.Body>
      <span className="product__state">Sale</span>
    </Card>
  );
}

export default Procduct;
