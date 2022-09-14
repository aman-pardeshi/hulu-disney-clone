import React from "react";
import { PlayIcon, UserGroupIcon } from "@heroicons/react/solid";
import { PlusSmIcon } from "@heroicons/react/outline";

const styles = {
  controlStyles: `flex gap-3 sm:text-xl text-sm pl-12`,
  playButtons: `sm:px-4 sm:py-2 px-1 py-1 flex justify-center items-center rounded-sm tracking-widest border-2 border-white`,
  circularButtons: `text-white bg-[rgba(0,0,0,0.5)] rounded-full sm:px-2 px-1 hover:scale-110 border-2 border-transparent hover:border-white`,
  circularIconsStyles: `h-4 sm:h-7 text-sm px-1`,
};

const ControlButtons = () => {
  return (
    <div className={styles.controlStyles}>
      <button
        className={
          styles.playButtons + " bg-slate-100 hover:bg-[rgb(149,149,149)]"
        }
      >
        <PlayIcon className='h-4 sm:h-8 ' /> &nbsp; PLAY
      </button>

      <button
        className={
          styles.playButtons +
          " bg-[rgba(0,0,0,0.3)] text-white hover:bg-slate-200 hover:text-black"
        }
      >
        <PlayIcon className='h-4 sm:h-8' /> &nbsp; TRAILER
      </button>

      <button className={styles.circularButtons}>
        <PlusSmIcon className={styles.circularIconsStyles} />
      </button>

      <button className={styles.circularButtons}>
        <UserGroupIcon className={styles.circularIconsStyles} />
      </button>
    </div>
  );
};

export default ControlButtons;
