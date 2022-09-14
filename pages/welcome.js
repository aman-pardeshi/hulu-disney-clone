import React from "react";
import Header from "../components/Header";

import huluDisneyLogo from "../assests/cta-logo1-custom.png";
// import secondLogo from "../assests/cta-logo-two.png";
import Image from "next/image";

const styles = {
  containerStyles: `min-h-[calc(100vh-80px)] relative flex justify-center items-center`,
};

const Welcome = () => {
  return (
    <div>
      <Header />
      <div className={styles.containerStyles + ` login-container `}>
        <div className='max-w-2xl flex flex-col gap-6'>
          <Image src={huluDisneyLogo} alt='hulu-disney-logo' />
          <button className='bg-blue-500 w-full py-4 text-white font-bold text-xl rounded-md tracking-wider opacity-80 hover:opacity-100 '>
            GET ALL THESE
          </button>
          <p className='text-white text-xl font-bold tracking-wide text-center leading-6'>
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </p>
          {/* <Image src={secondLogo} alt='group-logo' /> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
