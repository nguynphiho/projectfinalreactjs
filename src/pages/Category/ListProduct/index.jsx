import Product from "pages/Category/ListProduct/Product";
import React, { useState } from "react";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";

function ListProduct(props) {
	const {products, handleSort} = props;
	const [filterPrice, setFilterPrice] = useState(0);
	const handleFilter = (e) =>{
		setFilterPrice(e.target.value);
		handleSort(e.target.value)
	}
	return (
		<Container>
			<Row>
				<div className="category__notice">
					<span className="category__notice__result">
						Showing 1-9 of 12 results
					</span>
					<div className="category__notice__filter">
						<Form.Select
							onChange={handleFilter}
							className="shadow-none py-2"
							aria-label="Default select example"
							value={filterPrice}
						>
							<option value={0}>Default sorting</option>
							<option value={100}>Price upper 100</option>
							<option value={200}>Price upper 200</option>
							<option value={300}>Price upper 300</option>
						</Form.Select>
					</div>
				</div>
			</Row>
			<Row>
				{products.map((product) => {
					return (
						<Col
							key={product.id}
							sm={12}
							md={4}
							xl={4}
							style={{ marginBottom: "24px" }}
						>
							<Product
								id={product.id}
								name={product.title}
								price={product.price}
								image={product.image}
							/>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Pagination size="lg" className="justify-content-end">
					<Pagination.Prev />
					<Pagination.Next />
				</Pagination>
			</Row>
		</Container>
	);
}

export default ListProduct;
