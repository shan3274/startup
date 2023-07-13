import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
const Search = ({ closeModal }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  let jsonData = require("../DATA_FETCH.json");

  const fetchData = (value) => {
    const results = jsonData.filter((data) => {
      return (
        value && data && data.name && data.name.toLowerCase().includes(value)
      );
    });
    setResult(results);
  };

  const handleSearch = (value) => {
    setSearch(value);
    fetchData(value);
  };

  return (
    <div className="w-full h-screen flex sm:items-center bg-trans justify-center absolute top-0 backdrop-blur-sm z-[1000]">
      <div className="w-[80%] sm:h-[90%] h-[70%] overflow-x-scroll  flex flex-col items-start sm:mt-0 mt-[10%] p-10 justify-center bg-white border rounded-lg drop-shadow-lg">
        <button
          onClick={() => closeModal(false)}
          className="absolute right-4 top-2"
        >
          X
        </button>
        <div className="w-[100%] flex items-center justify-center absolute sm:right-0 right-[-3%] top-10">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            
            placeholder="Search"
            className="w-[80%] sm:h-[50px] border border-black rounded-3xl px-5"
          />

          <button className="relative text-[25px] sm:right-[5%] right-[10%]">
            <FcSearch 
            className="sm:text-[25px] text-[15px]"/>
          </button>
        </div>
        {result.map((data) => {
          return (
            <div
              className={"w-full flex items-start justify-center"}
            >
              <div className=" border-b pt-1 w-full ">
                <div
                  className=" text-[25px] hover:text-blue-500 cursor-pointer transition-[1s]"
                  onClick={() => {
                    setSearch(data.name);
                    if (router.push(data.path)) {
                      setSearch("");
                    }
                  }}
                >
                  {data.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
