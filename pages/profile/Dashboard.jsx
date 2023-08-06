import { db } from "@/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  let databaseRef1;
  const [data, setData] = useState([]);
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(
      () =>
        `SellerProduct/hjSXho3U2Ictlf1XdAIu/${localStorage.getItem("email")}`
    );
  }, []);
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
  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
      {data.map((item) => {
        return (
          <div className="w-[70%] min-h-[70%] flex flex-col items-center justify-center">
            <h1>{item.productName}</h1>
            {item.imageUrls.map((imgurl) => {
              return (
                <div className="">
                  <img src={imgurl} className="w-[200px]" />
                </div>
              );
            })}
            <div className="w-[90%]  flex  items-center justify-center"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
