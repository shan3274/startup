import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { BiUserCircle, BiEditAlt, BiMailSend, BiLogOut } from "react-icons/bi";
import Link from "next/link";

const Loggedin = ({ closeModal }) => {
  const users = useSelector((state) => state.user.value);
  const [email, setEmail] = useState(null);
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [sellerType, setSllerType] = useState("");

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
    setUserName(localStorage.getItem("userName"));
    setSllerType(localStorage.getItem("sellerType"));
  }, []);
  useEffect(() => {
    if (window === undefined) return;

    setEmail(localStorage.getItem("email"));
    data.map((data) => {
      localStorage.setItem("userName", data.userName);
    });
    getData();
  }, [data]);
  console.log(data);
  return (
    <div className="">
      <div className=" w-[250px]  h-[400px] flex flex-col items-center p-10 justify-center absolute sm:left-[80%] duration-700  left-[55%] sm:top-[10%] top-[8%] bg-white border rounded-lg drop-shadow-lg">
        <button
          onClick={() => closeModal(false)}
          className="absolute right-4 top-2"
        >
          X
        </button>
        <div className="w-[100%] h-[50px] border-b border-black flex items-center justify-center pb-10">
          <div className="text-black w-[100%] flex items-center justify-center flex-col">
            <div className="">
              <p className="text-[20px] font-[700]">{userName}</p>
            </div>
            <div className="">
              <div className="">{sellerType}</div>
            </div>
          </div>
        </div>
        <Link
          href="/profile"
          className="w-[100%] flex items-center justify-start gap-5 mt-10 cursor-pointer hover:text-gray-700 hover:scale-[1.05] duration-500"
        >
          <BiUserCircle className="text-[25px] text-gray-400" />
          <div className="">My Profile</div>
        </Link>
        <Link
          href="/profile/Dashboard"
          className="w-[100%] flex items-center justify-start gap-5  mt-3 cursor-pointer hover:text-gray-700 hover:scale-[1.05] duration-500"
        >
          <BiEditAlt className="text-[25px] text-gray-400" />
          <div className="">Dashboard</div>
        </Link>
        <div className="w-[100%] flex items-center justify-start gap-5 mt-3 cursor-pointer hover:text-gray-700 hover:scale-[1.05] duration-500">
          <BiMailSend className="text-[25px] text-gray-400" />
          <div className="">Inbox</div>
        </div>
        <div
          className="w-[100%] flex items-center justify-start gap-5 mt-10 cursor-pointer hover:text-gray-700 hover:scale-[1.05] duration-500"
          onClick={() => {
            signOut(auth);
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("userName");
            localStorage.removeItem("companyAddress");
            localStorage.removeItem("companyName");
            localStorage.removeItem("gstin");
            localStorage.removeItem("natureOfBusiness");
            localStorage.removeItem("sellerType");

            window.location.reload(true);
          }}
        >
          <BiLogOut className="text-[25px] text-gray-400" />
          <div className="">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Loggedin;
