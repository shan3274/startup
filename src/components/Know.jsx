import React from "react";

const Know = ({ closeModal}) => {
  return (
    <div className="w-full h-screen flex sm:items-center justify-center absolute top-0 z-[1000]">
      <div className="w-[80%] sm:h-[90%] h-[70%] overflow-x-scroll  flex flex-col items-start sm:mt-0 mt-[10%] p-10 justify-center bg-white border rounded-lg drop-shadow-lg">
        <button
          onClick={() => closeModal(false)}
          className="absolute right-4 top-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Know;
