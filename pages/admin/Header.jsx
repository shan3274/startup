import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="w-full  flex flex-col">
      <div className="w-full h-[5rem] bg-black text-white text-[30px] flex items-center justify-center">
        Admin <span className="text-red-500"> Home</span>
      </div>
      <div className="w-full h-[3rem] flex items-center justify-around text-blue-500  transition-[1s]">
        <Link href="/admin/Request" className="hover:text-blue-400">
          Product Request
        </Link>
        <Link href="" className="hover:text-blue-400">
          Link 1
        </Link>
        <Link href="" className="hover:text-blue-400">
          Link 1
        </Link>
        <Link href="" className="hover:text-blue-400">
          Link 1
        </Link>
        <Link href="" className="hover:text-blue-400">
          Link 1
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
