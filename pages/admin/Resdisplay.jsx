import React, { useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/src/firebase-config";

const Resdisplay = (res) => {
  const [approve, setApprove] = useState("Not approve");
  const deleteProduct = async (path, id) => {
    const productDoc = doc(db, path, id);
    await deleteDoc(productDoc);
  };
  const approveData = async (path, id) => {
    const productDoc = doc(db, path, id);
    await updateDoc(productDoc, { firstapprove: approve });

    alert(approve);
  };

  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div className="w-[90%]  flex flex-col items-center justify-center border mb-5 mt-5 p-10 rounded-lg drop-shadow-xl bg-white">
        <div className="flex gap-10">
          {res.imageUrls?.map((element) => {
            return (
              <div className="w-[200px] h-[200px] ">
                <img
                  src={element}
                  alt=""
                  className="w-[200px] h-[120px] drop-shadow-xl rounded-lg hover:scale-[1.05] transition-[1s]"
                />
              </div>
            );
          })}
        </div>

        <div className="w-[50%] flex">
          <div className="w-[50%] flex flex-col gap-2">
            <div className="">Name :</div>
            <div className="">Description :</div>
            <div className="">Category :</div>
            <div className="">Type :</div>
            <div className="">Seller Name :</div>
            <div className="">Seller Email :</div>
            <div className="">Seller Phone :</div>
            <div className="">Size : {res.size}</div>
            <div className="">Date of Manufacture :</div>
            <div className="">Price :</div>
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <div className="">{res.productName}</div>
            <div className="">{res.productDescription}</div>
            <div className="">{res.category}</div>
            <div className="">{res.type}</div>
            <div className="">{res.sellerName}</div>
            <div className="">{res.sellerEmail}</div>
            <div className="">S{res.sellerPhone}</div>
            <div className="">{res.size}</div>
            <div className="">{res.dateofManu}</div>
            <div className="">{res.price}</div>
          </div>
        </div>
        <div className="w-[70%] flex items-center mt-5 justify-around">
          <div className="w-[50%] flex items-center justify-center">
            <button
              onClick={() => deleteProduct(res.path, res.id)}
              className="w-[40%] h-[3rem] border bg-red-500 text-white rounded-3xl hover:scale-[1.02] transition-[1s]"
            >
              Delete
            </button>
          </div>
          <div className="w-[60%] flex items-center justify-around">
            <select
              id="type"
              name="type"
              value={approve}
              onChange={(e) => setApprove(e.target.value)}
              className="w-[40%] h-[2rem] border"
            >
              <option value="Approve">Approve</option>
              <option value="Not approve">Not approve</option>
            </select>

            <button
              onClick={() => approveData(res.path, res.id)}
              className="w-[50%] h-[3rem] border bg-blue-400 text-white rounded-3xl hover:scale-[1.02] transition-[1s]"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resdisplay;
