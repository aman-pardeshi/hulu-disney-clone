import React from 'react';
import Image from 'next/image';
import SliderImageOne from '../assests/slider-badag.jpg';
import SliderImageTwo from '../assests/slider-badging.jpg';
import SliderImageThree from '../assests/slider-scale.jpg';
import SliderImageFour from '../assests/slider-scales.jpg';
import SliderImageFive from '../assests/SliderImageFive.jpeg';

const styles = {
  sliderContainer: `box-border outline-none relative flex`,
  slideStyles: `border-2 border-transparent hover:border-2 hover:border-white pb-0 leading-none align-bottom w-full`,
  dotStyles: `cursor-pointer h-4 w-4 mr-3 bg-white rounded-[50%] inline-block transition-colors ease delay-600`,
  navButtons: `cursor-pointer absolute w-auto top-1/2 px-2 text-black bg-white font-bold text-lg transition-all rounded-3xl select-none`,
  activeDotStyles: `bg-[#717171]`,
};

const CustomImageSlider = () => {
  let sliderIndex = 1;
  const showSlider = (n) => {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      sliderIndex = 1;
    }
    if (n < 1) sliderIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(styles.activeDotStyles, '');
    }

    slides[sliderIndex - 1].style.display = 'block';

    dots[sliderIndex - 1].className += styles.activeDotStyles;
  };
  const plusSlides = () => {
    showSlider(sliderIndex + 1);
  };

  const currentSlide = (n) => {
    showSlider((sliderIndex = n));
  };

  return (
    <div className={styles.sliderContainer}>
      <div className='flex -slider'>
        {/*  Full-width images with number and caption text */}
        <div className={styles.slideStyles + ' mySlides'}>
          <Image src={SliderImageOne} className='align-bottom' />
          {/* <div className='text'>Caption Text</div> */}
        </div>

        <div className={styles.slideStyles + ' mySlides'}>
          <Image src={SliderImageTwo} />
          {/* <div className='text'>Caption Two</div> */}
        </div>

        <div className={styles.slideStyles + ' mySlides'}>
          <Image src={SliderImageThree} />
          {/* <div className='text'>Caption Three</div> */}
        </div>

        {/* <!-- Next and previous buttons --> */}
        <a className={styles.navButtons + ' left-0'} onClick='plusSlides(-1)'>
          &#10094;
        </a>
        <a className={styles.navButtons + ' right-0'} onClick='plusSlides(1)'>
          &#10095;
        </a>
      </div>
      <br />

      {/* <!-- The dots/circles --> */}
      <div className='flex justify-center'>
        <span
          className={styles.dotStyles + ' dot'}
          onClick={currentSlide(1)}
        ></span>
        <span
          className={styles.dotStyles + ' dot'}
          onClick={currentSlide(2)}
        ></span>
        <span
          className={styles.dotStyles + ' dot'}
          onClick={currentSlide(3)}
        ></span>
      </div>
    </div>
  );
};

export default CustomImageSlider;
