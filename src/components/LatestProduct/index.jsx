import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import './style.scss';
function LatestProduct (props) {
    return (
        <div className='mt-4 latest__product'>
            <img src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/shop-img-9-300x300.jpg" alt="..." />
            <div className="latest__product__content">
                <p>Yunna Tea</p>
                <div>
                    <BsStarFill className='product__star' />
                    <BsStarFill className='product__star' />
                    <BsStarFill className='product__star' />
                    <BsStarHalf className='product__star' />
                    <BsStar className='product__star' />
                </div>
                <p className='text-decoration-line-through'>$20.00</p>
                <p>$14.00</p>
            </div>
        </div>
    );
}

export default LatestProduct;