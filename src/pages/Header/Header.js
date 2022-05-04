import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [hidden, setHidden] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleShowSearch = () => {
    setToggle((toggle) => !toggle);
  };
  const handleChangeList = () => {
    if(window.innerWidth < 1024){
      setHidden((hidden) => !hidden);
    }
  };
  return (
    <div className="header">
      <div className="header__logo">
        <span>
          <AiOutlineMenu
            className="header__icon-menu"
            onClick={handleChangeList}
          />
        </span>
        <img
          src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/logo-mobile-img-1.png"
          alt=""
        />
      </div>
      {
        toggle && (
          <div className="header__mobileinput">
            <input type='text' placeholder="Tìm kiếm" />
          </div>
        )
      }
      <div className="header__menu">
        <div className="header__phone">
          <IoIosCall />
          <span>Call us + 00 60 123 612 123</span>
        </div>
        <ul className={hidden ? "header__list" : "header__list-hidden"}>
          <li className="header__item" onClick={handleChangeList}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "header__active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li className="header__item" onClick={handleChangeList}>
            <NavLink
              to="/pages"
              className={({ isActive }) => (isActive ? "header__active" : "")}
            >
              PAGES
            </NavLink>
          </li>
          <li className="header__item" onClick={handleChangeList}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "header__active" : "")}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li className="header__item" onClick={handleChangeList}>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "header__active" : "")}
            >
              ABOUT-US
            </NavLink>
          </li>
          <li className="header__item" onClick={handleChangeList}>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "header__active" : "")}
            >
              BLOG
            </NavLink>
          </li>
        </ul>
        <div className="header__action">
          <div className="header__search">
            <input type="text" placeholder="search..." />
            <AiOutlineSearch className="hover-ic"/>
          </div>
          <div className="header__mobilesearch" onClick={handleShowSearch}>
            <AiOutlineSearch className="hover-ic"/>
          </div>
          <div className="header__user">
            <Link
              to={{
                pathname: "/login",
                state: {
                  openLogin: true,
                },
              }}
            >
              {" "}
              <FiUser className="hover-ic"/>{" "}
            </Link>
          </div>
          <div className="header__cart">
            <Link to="/cart">
              {" "}
              <BsBagCheck className="hover-ic"/>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
