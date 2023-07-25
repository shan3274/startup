import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "@/src/firebase-config";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Accountreq = () => {
  const route = useRouter();
  const [data, setData] = useState([]);
  const [approvechk, setApprovechk] = useState(true);
  let databaseRef = "";
  let btntext = "Approve";
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
  const notapprove = async (id, approve) => {
    if (approve == null) {
      const productDoc = doc(db, "User", id);
      await deleteDoc(productDoc).then(() => {
        window.location.reload(true);
      });
    }
  };

  const approve = async (email, pwd, id, approve) => {
    if (approve == null) {
      const productDoc = doc(db, "User", id);
      const user = await createUserWithEmailAndPassword(auth, email, pwd);
      await updateDoc(productDoc, { firstapprove: "Approved" }).then((res) => {
        window.location.reload(true);
      });
      btntext = "Approved";
      console.log(user);
    }
  };

  useEffect(() => {
    getData();

    if (localStorage.getItem("adminid") == null) {
      route.push("/admin");
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col items-center justify-start gap-5 mt-10">
        {data.map((res) => {
          return (
            <div className="w-[100%] flex items-center justify-center flex-col">
              <div className="bg-white rounded-lg drop-shadow-lg w-[70%] flex items-start justify-center gap-10 p-10 ">
                <div className=" flex flex-col items-start justify-center gap-3">
                  <div className="">Email : </div>
                  <div className="">UserName : </div>
                  <div className="">Company Name : </div>
                  <div className="">Comapany Address :</div>
                  <div className="">Seller Type : </div>
                  <div className="">Nature Of Business : </div>
                </div>

                <div className=" flex flex-col items-start justify-center gap-3">
                  <div className="">{res.email}</div>
                  <div className="">{res.userName}</div>
                  <div className="">{res.companyName}</div>
                  <div className="">{res.companyAddress}</div>
                  <div className="">{res.sellerType}</div>
                  <div className="">{res.natureOfBusiness}</div>
                </div>
              </div>
              <div className="w-full flex items-center gap-10 justify-center m-10">
                <button
                  className={`w-[200px] h-[50px] rounded-xl ${res.firstapprove ?"bg-gray-500" :"bg-red-500"}  text-white duration-300 hover:scale-[1.05]`}
                  onClick={() => notapprove(res.id, res.firstapprove)}
                >
                  Not Approve
                </button>
                <button
                  className={`w-[200px] h-[50px] rounded-xl ${
                    res.firstapprove != null ? "bg-gray-500" : "bg-blue-500"
                  }  text-white duration-300 hover:scale-[1.05]`}
                  onClick={() => {
                    if (approvechk) {
                      approve(res.email, res.pwd, res.id, res.firstapprove);
                      setApprovechk(false);
                    }
                  }}
                >
                  {res.firstapprove != null ? res.firstapprove : btntext}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accountreq;
