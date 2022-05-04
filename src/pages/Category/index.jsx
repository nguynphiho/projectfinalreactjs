import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import categoriesApi from "api/categoriesApi";
import productApi from "api/productApi";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "redux/cart/actions";
import "./category.scss";
import ListProduct from "./ListProduct";
import SideBar from "./SideBar";

function Category() {

	const isOpen = useSelector((state) => state.cartReducer.open);
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [activeCategory, setActiveCategory] = useState('');
	const data = useRef([]);
	const [filter, setFilter] = useState({
		sortBy: 'price',
	});
	//get all products
	useEffect(() => {
		async function getProducts() {
			try {
				const respone = await productApi.getAll();
				data.current = respone;
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	}, [])
	//get products
	useEffect(() => {
		async function getProducts() {
			try {
				const respone = await productApi.getAll(filter);
				setProducts(respone);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	}, [filter])

	//get categories
	useEffect(() => {
		async function getCategories() {
			try {
				const respone = await categoriesApi.getAll();
				setCategories(respone);
			} catch (error) {
				console.log(error);
			}
		}
		getCategories();
	}, [])

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	function handleClose() {
		dispatch(closeMessage(false));
	}

	function handleCategoryChange(category) {
		const newData = data.current.filter((product) => {
			return category.name === product.category.name
		})
		setProducts(newData);
		setActiveCategory(category.name)
	}

	const handleSort = (rule) => {
		setFilter({ ...filter, order: rule });
		setActiveCategory('');
	}

	const handleSearch = (value) => {
		const newFilter = { ...filter, name: value };
		delete newFilter.category;
		setFilter(newFilter);
		setActiveCategory('');
	}
	return (
		<div className="category">
			<div
				className="banner"
				style={{
					backgroundImage: `url('https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/title-area-img-1.jpg')`,
				}}
			>
				<h1 className="text-uppercase">shop</h1>
			</div>
			<Container style={{ padding: "5rem 0" }}>
				<Row>
					<Col sm={12} lg={9}>
						<ListProduct products={products} handleSort={handleSort} />
					</Col>
					<Col sm={12} lg={3}>
						<SideBar
							active={activeCategory}
							categories={categories}
							handleCategoryChange={handleCategoryChange}
							handleSearch={handleSearch}
						/>
					</Col>
				</Row>
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
			</Container>
		</div>
	);
}

export default Category;
