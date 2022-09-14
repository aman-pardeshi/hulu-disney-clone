import React from "react";
import Image from "next/image";
import DisneyLogo from "../assests/viewers-disney.png";
import NatGeoLogo from "../assests/viewers-national.png";
import MarvelLogo from "../assests/viewers-marvel.png";
import PixarLogo from "../assests/viewers-pixar.png";
import StarWarsLogo from "../assests/viewers-starwars.png";

const styles = {
  containerStyles: `grid grid-cols-5 gap-8 mb-2`,
  wrapperDivStyles: `border-2 border-[rgba(249,249,249,0.1)] rounded-lg shadow-lg shadow-black cursor-pointer transition-all duration-300 scale-[0.8]
  hover:scale-[0.9] hover:border-[rgba(249,249,249,0.8)] hover:shadow-xl hover:shadow-black leading-none`,
};

const Viewers = () => {
  return (
    <div className={styles.containerStyles}>
      <div className={styles.wrapperDivStyles}>
        <Image src={DisneyLogo} alt='disney-logo' />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={NatGeoLogo} alt='natgeo-logo' />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={MarvelLogo} alt='marvel-logo' />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={PixarLogo} alt='pixar-logo' />
      </div>

      <div className={styles.wrapperDivStyles}>
        <Image src={StarWarsLogo} alt='starwars-logo' />
      </div>
    </div>
  );
};

export default Viewers;
