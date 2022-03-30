import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import {FiUser} from 'react-icons/fi'
import {BsBagCheck} from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/logo-mobile-img-1.png' alt="" />
      </div>
      <div className='header__menu'>
        <div className="header__phone">
          <IoIosCall />
          <span>Call us + 00 60 123 612 123</span>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to='/' className={({ isActive }) => isActive ? 'header__active' : ''}>HOME</NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/pages' className={({ isActive }) => isActive ? 'header__active' : ''}>PAGES</NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/products' className={({ isActive }) => isActive ? 'header__active' : ''}>PRODUCTS</NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/about-us' className={({ isActive }) => isActive ? 'header__active' : ''}>SHOP</NavLink>
          </li>
          <li className="header__item">
            <NavLink to='/blog' className={({ isActive }) => isActive ? 'header__active' : ''}>BLOG</NavLink>
          </li>
        </ul>
        <div className="header__action">
          <div className="header__search">
            <input type='text' placeholder='search...' />
            <AiOutlineSearch />
          </div>
          <div className="header__user">
              <Link to={{
                pathname: '/login',
                state: {
                  openLogin: true,
                },
              }}> <FiUser /> </Link>
            </div>
            <div className="header__cart">
              <Link to='/cart'> <BsBagCheck /> </Link>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Header