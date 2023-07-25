import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Loggedin = ({ closeModal }) => {
  const users = useSelector((state) => state.user.value);
  const [email, setEmail] = useState(null);
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
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  useEffect(() => {
    if (window === undefined) return;

    setEmail(localStorage.getItem("email"));
    data.map((data) => {
      localStorage.setItem("userName", data.userName);
    });
    getData();
  }, [data]);
  return (
    <div className="w-full h-screen  absolute top-0 z-[10000]">
      <div className="sm:w-[20%] w-[40%] sm:h-[40%] h-[20%] flex flex-col items-start p-10 justify-center relative sm:left-[78%] left-[55%] sm:top-[10%] top-[8%] bg-white border rounded-lg drop-shadow-lg">
        <button
          onClick={() => closeModal(false)}
          className="absolute right-4 top-2"
        >
          X
        </button>

        {localStorage.getItem("userName") == "" ? (
          <div className="text-[30px] ">Loading...</div>
        ) : (
          <div className=" text-[10px] sm:text-[16px] ">
            {localStorage.getItem("userName")}
          </div>
        )}

        <div className="w-[100%] relative bottom-[-50%] flex items-center justify-center">
          <button
            className="sm:w-[130px] w-[50px] text-[10px] sm:text-[16px] border h-[25px] sm:h-[35px] rounded-xl text-white bg-gray-400 hover:bg-gray-500 transition-colors"
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("email");
              localStorage.removeItem("password");
              localStorage.removeItem("userName");
              window.location.reload(true);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loggedin;
