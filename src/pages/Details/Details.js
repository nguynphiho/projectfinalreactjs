import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Rating from './Rating'
import "./details.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, openMessage, closeMessage } from "redux/cart/actions";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useCheckbox } from "hooks/input.hooks";
import { NavLink } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { getProductByIdAsync } from 'redux/manageProduct/actions';
import { selectedProduct } from 'redux/manageProduct/selector';
import productApi from "api/productApi";



export default function Details() {
    const imgDiv = useRef();

    const dispatch = useDispatch();
    const { carts } = useSelector((state) => state.cartReducer);
    const { id } = useParams();
    const isOpen = useSelector((state) => state.cartReducer.open);


    const productSelected = useSelector(selectedProduct);
    const { value: inCart, setValue: setInCart } = useCheckbox(false);


	const [products, setProducts] = React.useState([]);

    useEffect(() => {
        async function getProducts() {
			try {
				const respone = await productApi.getAll();
				setProducts(respone);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
        dispatch(getProductByIdAsync(id));
        setInCart(carts.some((item) => item.id === Number(id)));
        
    }, [carts, id, dispatch, setInCart]);

    let product = {};
    let data = [];
    if(productSelected)
    {
        product = productSelected;
        data = products.filter((pt) => pt.category.value === product.category.value);
    }



    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    function handleAddToCart() {
        dispatch(
            cartAdd({
                ...product,
                amount: 1,
            })
        );
        dispatch(openMessage(true));
    }
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleClose() {
        dispatch(closeMessage(false));
    }
    return (
        <>
            <div className="details" key={product.id}>
                <div className="img-container" onMouseMove={handleMouseMove}
                    style={{ backgroundImage: `url(${product.avatar})` }} ref={imgDiv}
                    onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />
                <div className="box-details">
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <Rating />
                    <p>Category: {product.category && product.category.name}</p>
                    <p>{product.description}</p>
                    <div className="thumb">
                        <img src={product.avatar} alt="" />
                        <img src={product.avatar} alt="" />
                        <img src={product.avatar} alt="" />
                    </div>
                    {inCart ? (
                        <NavLink to="/cart" className="cart">
                            View Cart
                        </NavLink>
                    ) : (
                        <button onClick={handleAddToCart} className="cart">
                            Add to cart
                        </button>
                    )}

                </div>
                <Snackbar
                    open={isOpen}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                    <Alert onClose={handleClose} severity="success">
                        Add success
                    </Alert>
                </Snackbar>
            </div>
                <div className="details">
                    <h2>Relative Product</h2>
                </div>
                <div className="products_relative">
                {data.map((prod) => (
                    <Card className="product">
                        <NavLink to={`/product/${prod.id}`}>
                            <Card.Img
                                style={{
                                    backgroundImage: `url(${prod.avatar})`,
                                    height: 200,
                                }}
                                variant="top"
                                className="product__image"
                            />
                        </NavLink>
                        <Card.Body className="text-center product__content">
                            <Card.Title className="product__title">
                                <NavLink to={`/product/${prod.id}`}>{prod.name}</NavLink>
                            </Card.Title>
                            <Card.Text>
                                <BsStarFill className="product__star" />
                                <BsStarFill className="product__star" />
                                <BsStarFill className="product__star" />
                                <BsStarFill className="product__star" />
                                <BsStar className="product__star" />
                            </Card.Text>
                            <Card.Text className="product__price">
                                <span className="product__price-text">${prod.price}</span>
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
                        {prod.status && <span className="product__state">{prod.status}</span>}
                </Card>
                ))}
                </div>
        </>
    )
}
