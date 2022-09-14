import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImageOne from "../assests/slider-badag.jpg";
import SliderImageTwo from "../assests/slider-badging.jpg";
import SliderImageThree from "../assests/slider-scale.jpg";
import SliderImageFour from "../assests/slider-scales.jpg";
import SliderImageFive from "../assests/SliderImageFive.jpeg";

const styles = {
  sliderStyles: `duration-300 border-4 border-transparent hover:border-4 
  hover:border-white cursor-pointer shadow-xl shadow-black flex items-center leading-none`,
};

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className='mb-6'>
      <div className={styles.sliderStyles}>
        <Image src={SliderImageOne} layout='responsive' />
      </div>
      <div className={styles.sliderStyles}>
        <Image src={SliderImageTwo} layout='responsive' />
      </div>
      <div className={styles.sliderStyles}>
        <Image src={SliderImageThree} layout='responsive' />
      </div>
      <div className={styles.sliderStyles}>
        <Image src={SliderImageFour} layout='responsive' />
      </div>
    </Slider>
  );
};

export default ImageSlider;
