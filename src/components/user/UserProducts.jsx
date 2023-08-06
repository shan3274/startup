import React from "react";

const UserProducts = ({ data, setCloseModal }) => {
  console.log(data);
  return (
    <div className="absolute top-0 left-0 z-[1000] w-full min-h-screen flex flex-col items-center justify-center bg-white py-10">
      <div className="">
        <button
          onClick={() => setCloseModal(() => false)}
          className="absolute right-4 top-2"
        >
          X
        </button>
      </div>
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <div className="w-[70%] py-10  bg-white drop-shadow-2xl rounded-lg flex items-center justify-center gap-5 mt-10">
              <div className="w-[20%] flex flex-col items-start justify-start gap-8">
                <div className="">Category</div>
                <div className="">Data of Manufacture</div>
                <div className="">Amount</div>
                <div className="">Product Name</div>
                <div className="">GST Number</div>
              </div>
              <div className="w-[20%] flex flex-col items-start justify-start gap-8">
                <div className="">{item.category}</div>
                <div className="">{item.dateofManu}</div>
                <div className="">{item.price}</div>
                <div className="">{item.productDescription}</div>
                <div className="">{item.productName}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="">no data</div>
      )}
    </div>
  );
};

export default UserProducts;
