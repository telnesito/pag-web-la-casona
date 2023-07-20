import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const ImagenesCarousel = (props) => {
  return (
    <Carousel fade className='container-carousel'>
      <Carousel.Item>
        <img
          className='img-king'
          src={props.sourceImg.img_1}
          alt="imagen1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img-king'
          src={props.sourceImg.img_2}
          alt="imagen2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='img-king'
          src={props.sourceImg.img_3}
          alt="imagen3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
