import Header from "@/src/components/Header";
import React from "react";

import { useState } from "react";
const index = () => {
  const [type, setType] = useState("Spare parts");
  const [category, setCategory] = useState("");

  return (
    <div className="w-full h-screen ">
      <Header />

      <div className="w-full h-screen flex flex-col items-center justify-start">
        {/* type */}
        <div className="w-[15%] h-[5%] flex items-center justify-center border bg-white  mt-8 rounded-lg drop-shadow-md">
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Spare parts">Spare parts</option>
            <option value="Machine">Machine</option>
          </select>
        </div>
        {/* form */}

        <div className="w-full h-screen overflow-y-scroll flex flex-col items-center justify-start  absolute top-[25%]">
          {/* label */}
          <label className="w-[15%] flex items-center justify-center h-[5%] mb-10 text-[30px] font-[600]">
            {type}
          </label>
          {/* image */}
          <div className="w-[15%] h-[10%] flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer">
            <label htmlFor="image">Image +</label>
            <input type="file" className="hidden" id="image" />
          </div>
          {/* fields */}
          <input
            type="text"
            placeholder="Product Name"
            className="w-[25%] h-[5%] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />
          <div className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md flex items-center ">
            <select
              id="type"
              name="type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
              <option value="Category 5">Category 5</option>
              <option value="Category 6">Category 6</option>
            </select>
          </div>
          <textarea
            placeholder="Product Description"
            className="w-[25%] h-[20%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          ></textarea>
          <input
            type="text"
            placeholder="Seller Name"
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="email"
            placeholder="Seller Email"
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Seller Phone"
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
