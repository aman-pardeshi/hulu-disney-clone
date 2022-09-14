import React from 'react';

const styles = {
  containerStyles: `flex justify-center w-full min-h-screen items-center content-center`,
  spinnerStyles: `animate-spin h-10 w-10 border-[5px] border-gray-500 rounded-full border-t-[#fff]`,
};

const Spinner = () => {
  return (
    <div className={styles.containerStyles}>
      <div className={styles.spinnerStyles}></div>
    </div>
  );
};

export default Spinner;
