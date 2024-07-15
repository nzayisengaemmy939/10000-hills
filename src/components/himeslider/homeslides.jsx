import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homeslides.scss';

const slides = [
  {
    text: ' Welcome to our virtual legal consultation service, where we seamlessly connect clients with experienced lawyers remotely, ensuring convenient access to expert legal advice from the comfort of your own home.',
  },
  {
    text: 'Welcome to our consultancy firm, where your goals meet our expertise, and together, we pave the path to success.',
  },
  {
    text: `Welcome to our vibrant internship program at 1000 Hills Solicitors! Whether you're a university student and high school student with a passion for learning, our doors are open to you. Join us in an immersive experience where mentorship, growth, and hands-on learning converge.`,
  },
];

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
