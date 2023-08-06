import { db } from "@/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
const index = () => {
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

  useEffect(() => {
    if (window === undefined) return;

    data.map((data) => {
      localStorage.setItem("userName", data.userName);
    });
    getData();
  }, [data]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[80%] h-[75%] border bg-white drop-shadow-2xl rounded-lg flex flex-col items-center">
        <BiSolidUserCircle className="text-[120px] relative top-[-4rem] bg-white rounded-full p-0 drop-shadow-xl" />
        <div className="w-[80%] h-[80%] relative top-[-4rem] flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            {data.map((val) => {
              return (
                <div className="flex gap-[5rem]">
                  <div className="text-[20px] flex flex-col gap-3 font-[700]">
                    <div className="">User Name </div>
                    <div className="">Company Address</div>
                    <div className="">Comapany Name</div>
                    <div className="">Email</div>
                    <div className="">GSTIN</div>
                    <div className="">Nature of Business</div>
                    <div className="">Seller type</div>
                  </div>
                  <div className="text-[20px] flex flex-col gap-3 font-[500] text-gray-500">
                    <div className="">{val.userName}</div>
                    <div className="">{val.companyAddress}</div>
                    <div className="">{val.companyName}</div>
                    <div className="">{val.email}</div>
                    <div className="">{val.gstin}</div>
                    <div className="">{val.natureOfBusiness}</div>
                    <div className="">{val.sellerType}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <Link
              href="/profile/Edit"
              className="px-7 py-3 bg-gray-100 rounded-xl drop-shadow-lg"
            >
              Edit your Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
