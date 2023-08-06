import React, { useState } from "react";

const Tooltips = ({ size, text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="font-[20px] relative "
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute w-[${size}px] text-gray-500 top-[-3rem] left-10 text-[15px] p-5 border rounded-lg bg-white drop-shadow-xl flex items-center justify-center`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltips;
