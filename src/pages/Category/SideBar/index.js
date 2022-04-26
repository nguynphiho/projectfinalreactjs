import useInput from "hooks/input.hooks";
import LatestProduct from "pages/Category/SideBar/LatestProduct";
import React, { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTumblr,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function SideBar({
  categories,
  activeCategory,
  handleCategoryChange,
  searchFilter,
}) {
  const { fetching, products } = useSelector((state) => state.productReducer);
  const productLastest =
    products && products.length > 2
      ? products.slice(0, 3)
      : products.length > 1
      ? products.slice(0, 2)
      : products.length > 0
      ? products.slice(0, 1)
      : [];

  const { value: searchText, onChange: onChangeSearchText } = useInput("");

  useEffect(() => {
    searchFilter(searchText);
  }, [searchText]);

  return (
    <div className="sidebar">
      <Row style={{ marginBottom: "2rem" }}>
        <div className="py-2 sidebar__search">
          <Form>
            <input
              value={searchText}
              onChange={onChangeSearchText}
              type="text"
              placeholder="Search"
            />
            <BsSearch className="fs-5" />
          </Form>
        </div>
      </Row>
      <Row>
        <div className="category__menu">
          <h5 className="fw-normal">PRODUCT CATEGORIES</h5>
          <ul className="category__menu__list">
            {categories.map((category) => (
              <li
                onClick={() => handleCategoryChange(category.title)}
                className={
                  activeCategory === category.title
                    ? "text-capitalize active"
                    : "text-capitalize"
                }
                key={category.id}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
      </Row>
      <Row className="mt-5">
        <div className="category__latest">
          <h5 className="fw-normal">LATEST PRODUCTS</h5>
          <div className="category__latest__group">
            {fetching
              ? "Loading..."
              : productLastest.map((product) => (
                  <LatestProduct key={product.id} product={product} />
                ))}
          </div>
        </div>
      </Row>
      <Row className="mt-5">
        <div>
          <h5 className="fw-normal">FOLLOW US</h5>
          <div className="mt-3 category__icons__group">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaTumblr className="icon" />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default SideBar;
