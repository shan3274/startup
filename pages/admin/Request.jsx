import React, { useState } from "react";
import Header from "./Header";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/src/firebase-config";
import Resdisplay from "./Resdisplay";

const Request = () => {
  const [category, setCategory] = useState();
  const [type, setType] = useState();
  const [data, setData] = useState([]);

  let spareandparts = `POSTS/GjZxh7T7CJsYv1lEEoyW/Spareparts/jcJW7idJNETVspHqz7ir/${category}`;
  let machine = `POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/${category}`;

  let databaseRef = "";
  let path = "";
  if (type == "Spare parts") {
    path = spareandparts;
  } else {
    path = machine;
  }

  try {
    databaseRef = collection(db, path);
  } catch (error) {
    console.log(error.message);
  }
  const getData = async () => {
    try {
      await getDocs(databaseRef).then((response) => {
        setData(
          response.docs.map((data) => {
            return { ...data.data(), id: data.id, path: path };
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // productName: productName,
  // productDescription: productDescription,
  // category: category,
  // type: type,
  // sellerName: sellerName,
  // sellerEmail: sellerEmail,
  // sellerPhone: sellerPhone,
  // size: size,
  // dateofManu: dateofManu,
  // price: price,
  // imageUrls: downloadImageURLs,

  return (
    <div className="w-full">
      <Header />

      <div className="w-full h-screen flex">
        {/* side menu */}
        <div className="w-[20%] h-[80%]  border-r border-black flex flex-col items-center justify-center">
          {/* category */}
          <p>Select type and Category</p>
          <div className="w-[90%] h-[3rem] pl-5 mt-5 border border-gray-400 text-black rounded-md flex items-center ">
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

          {/* type */}
          <div className="w-[90%] h-[3rem] pl-5 mt-5 border border-gray-400 text-black rounded-md flex items-center ">
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

          <div
            className="w-[70%] h-[3rem] border border-gray-400  mt-5 text-black rounded-md flex items-center justify-center cursor-pointer bg-gray-300"
            onClick={getData}
          >
            Find
          </div>
        </div>
        <div className="w-[80%] flex flex-col items-center justify-center absolute left-[20rem] top-[10rem]">
          {data.map((res) => {
            return <Resdisplay {...res} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Request;
