import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/src/firebase-config";
import { useRouter } from "next/router";

const index = () => {
  const [adminid, setID] = useState("");
  const [fireId, setFireId] = useState();
  const [firPass, setFirePass] = useState();
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);
  const route = useRouter();
  let databaseRef = "";
  try {
    databaseRef = collection(db, `Admin/wBBgAgGIlGGDDyQ17Qkd/${adminid}`);
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
    getData();
  }, []);
  useEffect(() => {
    data.map((res) => {
      setFireId(res.userid);
      setFirePass(res.pass);
      localStorage.setItem("adminid", adminid);
      localStorage.setItem("adminpass", pass);
    });
  }, [data]);

  if (fireId == adminid && firPass == pass) {
    route.push("/admin/Request");
  }

  console.log("id ", fireId, " pass ", firPass);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-[10%] flex items-center justify-center absolute top-[10%]">
        <p className="text-[40px] font-[700]">
          Admin <span className="text-red-700"> Panel</span>
        </p>
      </div>

      <div className="w-[40%] h-[50%] bg-white rounded-md drop-shadow-md border flex flex-col items-center justify-center gap-10">
        <p className="text-[25px] font-[500]">Login</p>
        <input
          type="text"
          value={adminid}
          onChange={(e) => setID(e.target.value)}
          className="w-[70%] h-[10%] border border-gray-300 pl-5"
          placeholder="Admin ID"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-[70%] h-[10%] border border-gray-300 pl-5"
          placeholder="Admin Password"
        />
        <button
          className="w-[40%] h-[15%] border text-[25px] bg-gray-200 hover:scale-[1.02] transition-[1s] rounded-lg drop-shadow-lg"
          onClick={getData}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default index;
