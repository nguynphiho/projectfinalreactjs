import React from "react"
import { Card } from "react-bootstrap"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import "./style.scss"
function Product(props) {
    const { name, image, price, id } = props
    const link = `/product/${id}`
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
                <Card.Title className="product__title">{name}</Card.Title>
                <Card.Text>
                    <BsStarFill className="product__star" />
                    <BsStarFill className="product__star" />
                    <BsStarFill className="product__star" />
                    <BsStarHalf className="product__star" />
                    <BsStar className="product__star" />
                </Card.Text>
                <Card.Text className="product__price">
                    <span className="product__price-text">${price}</span>
                    <span className="product__price__add">Add to cart</span>
                </Card.Text>
            </Card.Body>
            <span className="product__state">Sale</span>
        </Card>
    )
}

export default Product
