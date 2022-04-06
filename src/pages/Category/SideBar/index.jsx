import LatestProduct from "pages/LatestProduct";
import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTumblr,
  FaTwitter,
} from "react-icons/fa";
function SideBar(props) {
  const { categories, handleCategoryChange, active, handleSubmit } = props;

  const [value, setValue] = useState("");
  return (
    <div className="sidebar">
      <Row style={{ marginBottom: "2rem" }}>
        <div className="py-2 sidebar__search">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              return handleSubmit(value);
            }}
          >
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Search"
              value={value}
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
