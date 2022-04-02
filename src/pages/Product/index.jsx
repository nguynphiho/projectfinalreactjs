import React from "react"
import { Card } from "react-bootstrap"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { cartAdd, openMessage } from "redux/addToCart/actions"
import "./style.scss"
function Product(props) {
    const { name, image, price, id } = props;
    const dispatch = useDispatch();

    const link = `/product/${id}`;

    function handleAddToCart() {
        dispatch(cartAdd({
            ...props,
            quantity: 1
        }))

        dispatch(openMessage({
            open: true,
            type: 'success'
        }))
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
                    <span onClick={handleAddToCart} className="product__price__add">Add to cart</span>
                </Card.Text>
            </Card.Body>
            <span className="product__state">Sale</span>
        </Card>
    )
}

export default Product
