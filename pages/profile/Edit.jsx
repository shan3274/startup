import { db } from "@/src/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
const Edit = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setComapanyName] = useState("");
  const [gstin, setGstin] = useState("");
  const [companyAddress, setComapnyAddress] = useState("");
  const [sellerType, setSellerType] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [data, setData] = useState([]);

  // modals

  let databaseRef;

  try {
    databaseRef = collection(db, `User`);
  } catch (error) {
    console.log(error.message);
  }

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setData(
        response.docs
          .filter((val) => {
            if (val.data().email == localStorage.getItem("email")) {
              return val.data();
            }
          })
          .map((data) => {
            return { ...data.data(), id: data.id };
          })
      );
    });
  };
  const updata = async (id, fieldName, data) => {
    const productDoc = doc(db, "User", id);
    await updateDoc(productDoc, { fieldName: data }).then(() => alert("done"));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[80%] h-[75%] border bg-white drop-shadow-2xl rounded-lg flex flex-col items-center">
        {data.map((res) => {
          return (
            <div className="w-[100%] h-[100%] flex flex-col  items-center justify-center">
              <div className="w-[100%] flex gap-5 items-center justify-center">
                <input
                  type="text"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="border w-[25%] pl-5 h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
                />
                <button
                  className="px-[2rem] py-[.5rem] border rounded-xl text-white bg-blue-500"
                  onClick={async () => {
                    const productDoc = doc(db, "User", res.id);
                    await updateDoc(productDoc, { userName: userName }).then(
                      () => alert("done")
                    );
                  }}
                >
                  Update
                </button>
              </div>

              <div className="w-[100%] flex gap-5 items-center mt-5 justify-center">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-[25%] pl-5 h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
                />
                <button
                  className="px-[2rem] py-[.5rem] border rounded-xl text-white bg-blue-500"
                  onClick={async () => {
                    const productDoc = doc(db, "User", res.id);
                    await updateDoc(productDoc, { email: email }).then(() =>
                      alert("done")
                    );
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Edit;
