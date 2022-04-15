import { useCheckbox } from "hooks/input.hooks";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartAdd, openMessage } from "redux/cart/actions";
import "./style.scss";
function Product (props) {
	const { name, image, price, id } = props;

	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.cartReducer);

	const { value: inCart, setValue: setInCart } = useCheckbox(false);
  
	useEffect(() => {
		setInCart(carts.some((item) => item.id === id));
	}, [carts, id]);

	function handleAddToCart () {
		dispatch(
			cartAdd({
				...props,
				amount: 1,
			})
		);

		dispatch(openMessage(true));
	}

	return (
		<Card className="product">
			<NavLink to={`/product/${id}`}>
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
					<NavLink to={`/product/${id}`}>{name}</NavLink>
				</Card.Title>
				<Card.Text>
					<BsStarFill className="product__star" />
					<BsStarFill className="product__star" />
					<BsStarFill className="product__star" />
					<BsStarFill className="product__star" />
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
