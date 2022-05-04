import Product from "pages/Category/ListProduct/Product";
import React, { useState } from "react";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";

function ListProduct(props) {
	const { products, handleSort } = props;
	const [filterPrice, setFilterPrice] = useState('');
	const handleFilter = (e) => {
		setFilterPrice(e.target.value);
		handleSort(e.target.value)
	}
	return (
		<Container>
			<Row>
				<div className="category__notice">
					<span className="category__notice__result">
						Showing 6 results
					</span>
					<div className="category__notice__filter">
						<Form.Select
							onChange={handleFilter}
							className="shadow-none py-2"
							aria-label="Default select example"
							value={filterPrice}
						>
							<option>Default sorting</option>
							<option value='asc'>Price low to hight</option>
							<option value='desc'>Price hight to low</option>
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
								name={product.name}
								price={product.price}
								image={product.avatar}
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
