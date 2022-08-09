import React from 'react';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

const styles = {
  mainStyles: `min-h-[calc(100vh-70px)] text-gray-400 px-10`,
};

const Home = () => {
  return (
    <main className={styles.mainStyles}>
      <ImageSlider />
      <Viewers />
    </main>
  );
};

export default Home;
