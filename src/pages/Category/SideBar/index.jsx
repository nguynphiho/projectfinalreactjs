import useInput from "hooks/input.hooks";
import LatestProduct from "pages/Category/SideBar/LatestProduct";
import React from "react";
import { Form, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import {
	FaFacebookF,
	FaInstagram,
	FaPinterest,
	FaTumblr,
	FaTwitter
} from "react-icons/fa";

function SideBar(props) {
	const { categories, handleCategoryChange, active, handleSubmit } = props;

	const { value, onChange } = useInput("");

	const submit = (e) => {
		e.preventDefault();
		handleSubmit(value);
	};

	return (
		<div className="sidebar">
			<Row style={{ marginBottom: "2rem" }}>
				<div className="py-2 sidebar__search">
					<Form onSubmit={submit}>
						<input
							value={value}
							onChange={onChange}
							type="text"
							placeholder="Search"
						/>
						<BsSearch className="fs-5" onClick={submit} />
					</Form>
				</div>
			</Row>
			<Row>
				<div className="category__menu">
					<h5 className="fw-normal">PRODUCT CATEGORIES</h5>
					<ul className="category__menu__list">
						{categories.map((category) => (
							<li
								onClick={() => handleCategoryChange(category)}
								className={
									active === category
										? "text-capitalize active"
										: "text-capitalize"
								}
								key={category}
							>
								{category}
							</li>
						))}
					</ul>
				</div>
			</Row>

			<Row className="mt-5">
				<div className="category__latest">
					<h5 className="fw-normal">LATEST PRODUCTS</h5>
					<div className="category__latest__group">
						<LatestProduct />
						<LatestProduct />
						<LatestProduct />
					</div>
				</div>
			</Row>

			<Row className="mt-5">
				<div>
					<h5 className="fw-normal">FOLLOW US</h5>
					<div className="mt-3 category__icons__group">
						<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
							<FaFacebookF className="icon" />
						</a>
						<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
							<FaInstagram className="icon" />
						</a>
						<a href="https://twitter.com/" target="_blank" rel="noreferrer">
							<FaTwitter className="icon" />
						</a>
						<a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
							<FaPinterest className="icon" />
						</a>
						<a href="https://www.tumblr.com" target="_blank" rel="noreferrer">
							<FaTumblr className="icon" />
						</a>
					</div>
				</div>
			</Row>
		</div>
	);
}

export default SideBar;
