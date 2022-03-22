import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaTumblr } from 'react-icons/fa';
import LatestProduct from 'components/LatestProduct';
function SideBar(props) {
    return (
        <div className='sidebar'>
            <Row style={{ marginBottom: '2rem' }}>
                <div className="py-2 sidebar__search">
                    <Form>
                        <input type="text" placeholder='Search' />
                        <BsSearch className='fs-5' />
                    </Form>
                </div>
            </Row>
            <Row>
                <div className="category__menu">
                    <h5 className='fw-normal'>PRODUCT CATEGORIES</h5>
                    <ul className='category__menu__list'>
                        <li>Flavour</li>
                        <li>Healthy</li>
                        <li>Organic</li>
                        <li>Tea</li>
                        <li>Uncategorized</li>
                    </ul>
                </div>
            </Row>

            <Row className='mt-5'>
                <div className="category__latest">
                    <h5 className='fw-normal'>LATEST PRODUCTS</h5>
                    <div className='category__latest__group'>
                        <LatestProduct />
                        <LatestProduct />
                        <LatestProduct />
                    </div>
                </div>
            </Row>

            <Row className='mt-5'>
                <div>
                    <h5 className='fw-normal'>FOLLOW US</h5>
                    <div className='mt-3 category__icons__group'>
                        <FaFacebookF className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaTumblr className='icon' />
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default SideBar;