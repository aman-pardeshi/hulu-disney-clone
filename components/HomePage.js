import React, { useEffect, useState } from 'react';

import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';

const styles = {
  mainStyles: `min-h-[calc(100vh-70px)] text-gray-400 px-10`,
};

const Home = () => {
  return (
    <main className={styles.mainStyles}>
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  );
};

export default Home;
