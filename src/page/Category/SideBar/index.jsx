import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import LatestProduct from '../../../components/LatestProduct';
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
                    <h5>PRODUCT CATEGORIES</h5>
                    <ul className='category__menu__list'>
                        <li>Flavour</li>
                        <li>Healthy</li>
                        <li>Organic</li>
                        <li>Tea</li>
                        <li>Uncategorized</li>
                    </ul>
                </div>
            </Row>

            <Row>
                <div className="category__latest">
                    <h5>LATEST PRODUCTS</h5>
                    <div className='category__latest__group'>
                        <LatestProduct />
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default SideBar;