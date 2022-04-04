import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import './style.scss'

const sliders = [{
    id: 1,
    src: 'https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-1.jpg',
    alt: 'First slide',
    titleSlide: 'the tea empire',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam.'
},
{
    id: 2,
    src: 'https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-3.jpg',
    alt: 'Second slide',
    titleSlide: 'this is tealicious',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam.'
},
{
    id: 3,
    src: 'https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/home-4-rev-img-4.jpg',
    alt: 'Third slide',
    titleSlide: 'it\'s tea-time!',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quis possimus distinctio, magnam laborum consequuntur.'
}]

function Slider() {
  return (
    <>
    <Carousel className='slider'>
        {
            sliders.map((slider) => (<Carousel.Item key={slider.id}>
                <img className='d-block w-100 slider__img' src={slider.src} alt={slider.alt}/>
                <Carousel.Caption className='slider__caption'>
                    <h1 className='slider__caption-title'>{slider.titleSlide}</h1>
                    <p className='slider__caption-des'>{slider.des}</p>
                    <div className='slider__caption-btn'>
                    <button>discover</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>))
        }
    </Carousel>
    </>
  )
}

export default Slider