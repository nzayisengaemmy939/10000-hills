import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Staff.scss'; // Import the CSS file or include styles here

const Staff = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      const slides = document.getElementsByClassName('mySlides');
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <Card />
        </div>

        <div className="mySlides fade">
          <Card />
        </div>

        <div className="mySlides fade">
          <Card />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Staff;
