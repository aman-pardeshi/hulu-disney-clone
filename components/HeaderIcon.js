import React from 'react';

const styles = {
  wrapperStyles: `group flex flex-col items-center cursor-pointer text-white w-12 sm:w-20`,
  iconStyles: `h-7 mb-1 group-hover:animate-bounce`,
  titleStyles: `opacity-0 tracking-widest group-hover:opacity-100 text-sm`,
};

const HeaderIcon = ({ title, Icon }) => {
  return (
    <div className={styles.wrapperStyles}>
      <Icon className={styles.iconStyles} />
      <p className={styles.titleStyles}>{title}</p>
    </div>
  );
};

export default HeaderIcon;
