import React, { useState, useEffect } from "react";
import { db } from "@/src/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import UserProducts from "./UserProducts";

const Userdeatls = ({ userData, setUserModal }) => {
  let databaseRef1;
  const [data, setData] = useState([]);
  let path = `SellerProduct/hjSXho3U2Ictlf1XdAIu/${userData.email}`;
  try {
    databaseRef1 = collection(db, path);
  } catch (error) {
    console.log(error.message);
  }
  const getData = async () => {
    try {
      await getDocs(databaseRef1).then((response) => {
        setData(
          response.docs.map((data) => {
            return { ...data.data(), id: data.id };
          })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  const [update, setUpadte] = useState(false);
  const [username, setUsername] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [companyName, setCompanyName] = useState();
  const [gstin, setGstin] = useState();
  const [natureOfBusiness, setNatureOfBusiness] = useState();
  const [sellerType, setSelllertype] = useState();

  const [closeModal, setCloseModal] = useState(false);
  return (
    <div className="absolute top-0 left-0 z-[1000] w-full h-screen flex items-center justify-center">
      <div className="w-[70%] h-[70%] bg-white drop-shadow-2xl rounded-lg flex items-center justify-center gap-5 mt-10">
        <div className="absolute top-5 text-[30px] font-[700] text-red-500">
          User Details
        </div>
        <div className="">
          <button
            onClick={() => setUserModal(() => false)}
            className="absolute right-4 top-2"
          >
            X
          </button>
        </div>
        <div className="w-[20%] flex flex-col items-start justify-start gap-8">
          <div className="">UserName</div>
          <div className="">Email</div>
          <div className="">Company Address</div>
          <div className="">Company Name</div>
          <div className="">GST Number</div>
          <div className="">Nature Of busines</div>
          <div className="">Seller Type</div>
          <div className="">Number of Product</div>
        </div>
        <div className="w-[20%] flex flex-col items-start justify-start gap-8">
          <div className="">{userData.userName}</div>
          <div className="">{userData.email}</div>
          <div className="">{userData.companyAddress}</div>
          <div className="">{userData.companyName}</div>
          <div className="">{userData.gstin}</div>
          <div className="">{userData.natureOfBusiness}</div>
          <div className="">{userData.sellerType}</div>
          <div className="flex gap-5">
            {data.length}
            <button
              className="px-5 border bg-green-500 text-white rounded-lg"
              onClick={() => setCloseModal(true)}
            >
              view all
            </button>
          </div>
        </div>
        {update && (
          <div className="w-[40%] flex flex-col items-start justify-start gap-4 transition-[2s]">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, { userName: username }).then(() =>
                    alert("Updated please reload the page")
                  );
                }}
              >
                Update
              </button>
            </div>
            <div className="flex gap-3">
              <input type="text" className="w-[250px] h-[40px] " disabled />
              <button className="w-[150px] h-[40px] "></button>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Company address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, {
                    companyAddress: companyAddress,
                  }).then(() => alert("Updated please reload the page"));
                }}
              >
                Update
              </button>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, {
                    companyName: companyName,
                  }).then(() => alert("Updated please reload the page"));
                }}
              >
                Update
              </button>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="gstin"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, {
                    gstin: gstin,
                  }).then(() => alert("Updated please reload the page"));
                }}
              >
                Update
              </button>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Nature of business"
                value={natureOfBusiness}
                onChange={(e) => setNatureOfBusiness(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, {
                    natureOfBusiness: natureOfBusiness,
                  }).then(() => alert("Updated please reload the page"));
                }}
              >
                Update
              </button>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Seller Type"
                value={sellerType}
                onChange={(e) => setSelllertype(e.target.value)}
                className="w-[250px] h-[40px] border border-black rounded-xl pl-5"
              />
              <button
                className="w-[150px] h-[40px] border bg-blue-400 rounded-lg text-white"
                onClick={async () => {
                  const productDoc = doc(db, "User", userData.id);
                  await updateDoc(productDoc, {
                    sellerType: sellerType,
                  }).then(() => alert("Updated please reload the page"));
                }}
              >
                Update
              </button>
            </div>
          </div>
        )}
        {!update && (
          <button
            className=" absolute bottom-4 w-[150px] h-[40px] bg-blue-400 rounded-lg text-white"
            onClick={() => setUpadte(true)}
          >
            Update
          </button>
        )}

        {update && (
          <button
            className=" absolute bottom-4 w-[150px] h-[40px] bg-red-400 rounded-lg text-white"
            onClick={() => setUpadte(false)}
          >
            Close Update
          </button>
        )}
      </div>
      
      {closeModal && <UserProducts {...{ data, setCloseModal }} />}
    </div>
  );
};

export default Userdeatls;
