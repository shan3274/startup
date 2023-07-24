import React, { useState } from "react";

import { GiMachineGunMagazine } from "react-icons/gi";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillApi,
} from "react-icons/ai";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [machinemenu, setMachineMenu] = useState(false);
  const [sparemenu, setSpareMenu] = useState(false);

  return (
    <div>
      <div
        className={`${
          open ? "w-[20%]" : "w-[5%]"
        } w-[15%] h-screen p-5 pt-[8rem] duration-500 z-[100000]  bg-gray-700 absolute top-0 left-0`}
      >
        <AiOutlineArrowLeft
          className={`absolute cursor-pointer  top-1 duration-500  bg-white rounded-full drop-shadow-2xl right-[-.5rem]  text-[17px] font-bold ${
            !open && "rotate-180 "
          } `}
          onClick={() => {
            setOpen(!open);
            setMachineMenu(false);
            setSpareMenu(false);
          }}
        />
        <div className="w-[100%] ">
          <div className=" flex gap-x-4 items-center">
            <GiMachineGunMagazine className="text-white text-[35px] absolute" />
            <h1
              className={`text-white text-xl font-medium ml-[4rem] origin-left duration-500 cursor-pointer ${
                !open && "scale-0"
              }`}
              onClick={() => setMachineMenu(!machinemenu)}
            >
              Machine
            </h1>
          </div>
          <div
            className={`w-[100%]  flex flex-col  items-start duration-500 justify-start text-white pl-[4rem] pt-5 overflow-hidden ${
              !machinemenu && "h-0"
            }`}
          >
            <div className="w-full flex gap-3 items-center ">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] ">
          <div className=" flex gap-x-4 items-center">
            <AiFillApi className="text-white text-[35px] absolute" />
            <h1
              className={`text-white text-xl font-medium ml-[4rem] origin-left duration-500 cursor-pointer ${
                !open && "scale-0"
              }`}
              onClick={() => setSpareMenu(!sparemenu)}
            >
              Spare Parts
            </h1>
          </div>
          <div
            className={`w-[100%]  flex flex-col  items-start duration-500 justify-start text-white pl-[4rem] pt-5 overflow-hidden ${
              !sparemenu && "h-0"
            }`}
          >
            <div className="w-full flex gap-3 items-center ">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
            <div className="w-full flex gap-3 items-center">
              <AiOutlineArrowRight />
              <p className="cursor-pointer duration-300 hover:text-blue-200 hover:scale-[1.05]">
                Category
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
