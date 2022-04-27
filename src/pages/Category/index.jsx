import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import data from "data";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "redux/cart/actions";
import "./category.scss";
import ListProduct from "./ListProduct";
import SideBar from "./SideBar";

function Category() {
  //get categories from data
  const categories = [];
  data.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  const isOpen = useSelector((state) => state.cartReducer.open);
  const dispatch = useDispatch();

  const [products, setProducts] = useState(data);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filter, setFilter] = useState({
	category: categories[0],
	sortPrice: 0
  });

  useEffect(() => {
	const newProducts = data.filter((product) =>{
		return product.category === filter.category && product.price >= filter.sortPrice;
	})
	setProducts(newProducts)
  },[filter])

  function Alert(props) {
	  return <MuiAlert elevation={6} variant="filled" {...props} />;
	}
	
	function handleClose() {
		dispatch(closeMessage(false));
	}
	
	function handleCategoryChange(category) {
		setFilter({...filter, category});
		setActiveCategory(category);
	}
	const handleSort = (rule) => {
		setFilter({...filter,sortPrice: rule})
	}

	function handleSubmit(value) {
		const newProducts = data.filter((product) => {
			return product.title.toLowerCase().includes(value.toLowerCase());
		});
		setProducts(newProducts);
		setActiveCategory("");
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
						<ListProduct products={products} handleSort = {handleSort} />
					</Col>
					<Col sm={12} lg={3}>
						<SideBar
							active={activeCategory}
							categories={categories}
							handleCategoryChange={handleCategoryChange}
							handleSubmit={handleSubmit}
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
