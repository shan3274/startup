import React, { useState } from "react";

const Resdisplay = (res) => {
  const [imgUrl, setImgUrl] = useState();
  return (
    <div className="w-[100%] h-[100%]  flex flex-col items-center justify-center">
      <div className="flex ">
        {res.imageUrls?.map((element) => {
          return (
            <div className="w-[200px] h-[100px] ">
              <img src={element} alt="" />
            </div>
          );
        })}
      </div>

      {res.productName}
      {res.productDecription}
      <br />
      {res.category}
      <br />
      {res.type}
      <br />
      {res.sellerName}
      <br />
      {res.sellerEmail}
      <br />
      {res.sellerPhone}
      <br />
      {res.size}
      <br />
      {res.dateofManu}
      <br />
      {res.price}
      <br />
    </div>
  );
};

export default Resdisplay;
