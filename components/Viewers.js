import React from 'react';
import Image from 'next/image';
import DisneyLogo from '../assests/viewers-disney.png';
import NatGeoLogo from '../assests/viewers-national.png';
import MarvelLogo from '../assests/viewers-marvel.png';
import PixarLogo from '../assests/viewers-pixar.png';
import StarWarsLogo from '../assests/viewers-starwars.png';

const styles = {
  containerStyles: `mt-8 grid grid-cols-5 gap-8 pt-7 pb-6`,
  wrapperDivStyles: `border-2 border-[rgba(249,249,249,0.1)] rounded-lg shadow-lg shadow-black cursor-pointer transition-all duration-300 
  hover:scale-[1.05] hover:border-[rgba(249,249,249,0.8)]  hover:shadow-xl hover:shadow-black`,
};

const Viewers = () => {
  return (
    <div className={styles.containerStyles}>
      <div className={styles.wrapperDivStyles}>
        <Image src={DisneyLogo} />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={NatGeoLogo} />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={MarvelLogo} />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={PixarLogo} />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={StarWarsLogo} />
      </div>
    </div>
  );
};

export default Viewers;
