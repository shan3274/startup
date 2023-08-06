import React, { useState, useEffect } from "react";
import Header from "./Header";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/src/firebase-config";
import Link from "next/link";
import { useRouter } from "next/router";
import Userdeatls from "@/src/components/user/Userdeatls";

const UserProfile = () => {
  const [data, setData] = useState([]);

  //   userdetailsmodalstate
  const [userModal, setUserModal] = useState(false);
  const [userData, setUserData] = useState();
  const [closeModal, setCloseModal] = useState(false);

  let databaseRef = "";
  const route = useRouter();

  try {
    databaseRef = collection(db, "User");
    
  } catch (error) {
    console.log(error.message);
  }

  const getData = async () => {
    try {
      await getDocs(databaseRef).then((response) => {
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
    if (localStorage.getItem("adminid") == null) {
      route.push("/admin");
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[70%]  grid grid-cols-3 gap-4 mt-5">
          {data.map((item) => {
            return (
              <div
                className="w-[100%] min-h-[100px] flex items-center justify-center  gap-5 drop-shadow-lg bg-white rounded-lg border cursor-pointer"
                onClick={() => {
                  setUserModal(true);
                  setUserData(() => item);
                }}
              >
                {item.userName}
              </div>
            );
          })}
        </div>
      </div>
      {userModal && <Userdeatls {...{ userData, setUserModal }} />}
    </div>
  );
};

export default UserProfile;
