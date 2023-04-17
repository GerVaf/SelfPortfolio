import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Testimonial.css';
import { TesData } from '../assets/Testimonial';

const Testimonial = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgGirl,
      }));
    };
  
    return (
      <div className="App mb-20">
        <p className='text-3xl font-bold mb-10'>Testimonial <span className='text-[#A30CFF]'>Review</span> </p>
        <Slider {...settings}>
          {TesData.map((item) => (
            <div key={item.id} className="card">
              <div className="card-top">
                <img
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.text}</h3>
                <span className="category">{item.title}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Testimonial;
