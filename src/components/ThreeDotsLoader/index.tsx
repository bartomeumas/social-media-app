import React from "react";

import classNames from "classnames";

const ThreeDotsLoader = () => {
  const baseLoaderClass =
    "inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]";
  const firstLoaderClass = classNames("text-primary", baseLoaderClass);
  const secondLoaderClass = classNames("text-secondary", baseLoaderClass);
  const thirdLoaderClass = classNames("text-success", baseLoaderClass);

  return (
    <div className='flex items-center justify-center space-x-2'>
      <div className={firstLoaderClass} role='status'></div>
      <div className={secondLoaderClass} role='status'></div>
      <div className={thirdLoaderClass} role='status'></div>
    </div>
  );
};

export default ThreeDotsLoader;
