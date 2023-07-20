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

    console.log("done approve");
  };

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

      <select
        id="type"
        name="type"
        value={approve}
        onChange={(e) => setApprove(e.target.value)}
      >
        <option value="Approve">Approve</option>
        <option value="Not approve">Not approve</option>
      </select>
      <button onClick={() => deleteProduct(res.path, res.id)}>Delet</button>
      <button onClick={() => approveData(res.path, res.id)}>Approve</button>
    </div>
  );
};

export default Resdisplay;
