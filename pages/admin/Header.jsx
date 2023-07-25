import Link from "next/link";
import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    setAdmin(localStorage.getItem("adminid"));
  }, []);
  console.log("admin ", admin);
  return (
    <div className="w-full  flex flex-col">
      <div className="w-full h-[5rem] bg-black text-white text-[30px] flex items-center justify-center">
        Admin <span className="text-red-500"> Home</span>
        <div className="absolute right-0 w-[30%] h-[100%] flex items-center justify-center  gap-3 text-white text-[20px]">
          <div className="">
            <p>{admin}</p>
          </div>
          <div
            className="w-[150px] bg-gray-400 h-[40px] flex items-center justify-center rounded-xl cursor-pointer"
            onClick={() => {
              localStorage.removeItem("adminid");
              window.location.reload(false);
            }}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="w-full h-[3rem] flex items-center justify-around text-blue-500  transition-[1s]">
        <Link href="/admin/Request" className="hover:text-blue-400">
          Product Request
        </Link>
        <Link href="/admin/Accountreq" className="hover:text-blue-400">
          Account Request
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
