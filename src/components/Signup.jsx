import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";

const Signup = ({ closeModal, closeLogin }) => {
  //state for user input
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [verifyPwd, setVerifyPwd] = useState("");

  let databaseRef;
  try {
    databaseRef = collection(db, `Users/WUtcWShrAMkcfnmVN5ls/${email}`);
  } catch (error) {
    console.log(error.message);
  }
  let flag = 0;
  //singup button function
  const register = async () => {
    if (pwd == verifyPwd) {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, pwd);
        console.log(user);
        const dataShow = {
          email: email,
          userName: userName,
          pwd: pwd,
        };
        const res = addDoc(databaseRef, dataShow).then((re) => {
          alert("done");
          setEmail("");
          setUserName("");
          setPwd("");
          setVerifyPwd("");
        });
        console.log("firebase res" + res);
        localStorage.setItem("email", email);
        localStorage.setItem("password", pwd);
        flag = 1;
      } catch (error) {
        console.log(error.message);
      }
    }
    if (flag == 1) {
      window.location.reload(false);
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center absolute top-0 z-[1001]">
        <div className="sm:w-[40%] sm:h-[70%] flex flex-col items-center p-10 justify-center gap-5 bg-white border rounded-lg drop-shadow-lg bg-trans">
          <div className="">
            <button
              onClick={() => {
                closeModal(false);
                closeLogin(false);
              }}
              className="absolute right-4 top-2"
            >
              X
            </button>
            <IoArrowBack
              className="absolute left-4 top-2 text-[20px]"
              onClick={() => closeModal(false)}
            />
          </div>

          <svg
            width="70"
            height="51"
            viewBox="0 0 165 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.57 50L8.69 1.14H19.05L12.33 41.46H33.47L32.07 50H0.57Z"
              fill="#B91717"
            />
            <path
              d="M58.5027 50.84C55.5627 50.84 53.0193 50.42 50.8727 49.58C48.726 48.74 46.9527 47.5267 45.5527 45.94C44.1527 44.3533 43.126 42.4167 42.4727 40.13C41.8193 37.8433 41.4927 35.2767 41.4927 32.43C41.4927 28.2767 41.8893 24.2633 42.6827 20.39C43.5227 16.5167 44.8293 13.11 46.6027 10.17C48.376 7.18333 50.6393 4.80333 53.3927 3.03C56.1927 1.21 59.5293 0.299997 63.4027 0.299997C66.3427 0.299997 68.886 0.719997 71.0327 1.56C73.1793 2.4 74.9527 3.61333 76.3527 5.2C77.7527 6.78667 78.7793 8.72333 79.4327 11.01C80.086 13.2967 80.4127 15.8633 80.4127 18.71C80.4127 22.8633 79.9927 26.8767 79.1527 30.75C78.3593 34.6233 77.076 38.0533 75.3027 41.04C73.5293 43.98 71.2427 46.36 68.4427 48.18C65.6893 49.9533 62.376 50.84 58.5027 50.84ZM58.5027 42.44C61.4427 42.44 63.5893 41.3433 64.9427 39.15C66.3427 36.9567 67.3693 33.8533 68.0227 29.84L69.4227 21.44C69.7027 19.76 69.8427 18.08 69.8427 16.4C69.8427 13.9733 69.3293 12.0833 68.3027 10.73C67.276 9.37666 65.6427 8.7 63.4027 8.7C60.4627 8.7 58.2927 9.79666 56.8927 11.99C55.5393 14.1833 54.536 17.2867 53.8827 21.3L52.4827 29.7C52.2027 31.38 52.0627 33.06 52.0627 34.74C52.0627 37.1667 52.576 39.0567 53.6027 40.41C54.6293 41.7633 56.2627 42.44 58.5027 42.44Z"
              fill="#2496FF"
            />
            <path
              d="M108.245 42.93H107.615C107.009 44.0033 106.379 45.03 105.725 46.01C105.072 46.9433 104.325 47.7833 103.485 48.53C102.692 49.23 101.759 49.79 100.685 50.21C99.6586 50.63 98.4453 50.84 97.0453 50.84C93.032 50.84 89.8586 49.3233 87.5253 46.29C85.2386 43.2567 84.0953 38.7767 84.0953 32.85C84.0953 28.23 84.562 23.9367 85.4953 19.97C86.4753 15.9567 87.8986 12.5033 89.7653 9.61C91.6786 6.71666 94.0353 4.45333 96.8353 2.82C99.682 1.14 102.972 0.299997 106.705 0.299997C109.225 0.299997 111.419 0.649997 113.285 1.35C115.152 2.05 116.715 3.05333 117.975 4.36C119.235 5.62 120.215 7.13667 120.915 8.91C121.615 10.6833 122.035 12.62 122.175 14.72L112.165 16.68C112.072 15.6533 111.909 14.65 111.675 13.67C111.489 12.69 111.139 11.85 110.625 11.15C110.159 10.4033 109.529 9.82 108.735 9.4C107.989 8.93333 107.009 8.7 105.795 8.7C103.135 8.7 101.059 9.82 99.5653 12.06C98.1186 14.3 97.0686 17.31 96.4153 21.09L95.2253 28.23C95.0853 29.07 94.9453 30.0733 94.8053 31.24C94.712 32.36 94.6653 33.3867 94.6653 34.32C94.6653 36.7933 95.1786 38.7767 96.2053 40.27C97.2786 41.7167 98.9353 42.44 101.175 42.44C103.649 42.44 105.585 41.67 106.985 40.13C108.385 38.59 109.272 36.77 109.645 34.67L110.205 31.31H101.595L102.785 23.96H120.565L116.225 50H107.055L108.245 42.93Z"
              fill="#223FD3"
            />
            <path
              d="M142.448 50.84C139.508 50.84 136.965 50.42 134.818 49.58C132.671 48.74 130.898 47.5267 129.498 45.94C128.098 44.3533 127.071 42.4167 126.418 40.13C125.765 37.8433 125.438 35.2767 125.438 32.43C125.438 28.2767 125.835 24.2633 126.628 20.39C127.468 16.5167 128.775 13.11 130.548 10.17C132.321 7.18333 134.585 4.80333 137.338 3.03C140.138 1.21 143.475 0.299997 147.348 0.299997C150.288 0.299997 152.831 0.719997 154.978 1.56C157.125 2.4 158.898 3.61333 160.298 5.2C161.698 6.78667 162.725 8.72333 163.378 11.01C164.031 13.2967 164.358 15.8633 164.358 18.71C164.358 22.8633 163.938 26.8767 163.098 30.75C162.305 34.6233 161.021 38.0533 159.248 41.04C157.475 43.98 155.188 46.36 152.388 48.18C149.635 49.9533 146.321 50.84 142.448 50.84ZM142.448 42.44C145.388 42.44 147.535 41.3433 148.888 39.15C150.288 36.9567 151.315 33.8533 151.968 29.84L153.368 21.44C153.648 19.76 153.788 18.08 153.788 16.4C153.788 13.9733 153.275 12.0833 152.248 10.73C151.221 9.37666 149.588 8.7 147.348 8.7C144.408 8.7 142.238 9.79666 140.838 11.99C139.485 14.1833 138.481 17.2867 137.828 21.3L136.428 29.7C136.148 31.38 136.008 33.06 136.008 34.74C136.008 37.1667 136.521 39.0567 137.548 40.41C138.575 41.7633 140.208 42.44 142.448 42.44Z"
              fill="#DE4A2A"
            />
          </svg>
          <input
            type="text"
            className="border w-[80%] h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="Text"
            className="border w-[80%] h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border w-[80%] h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <input
            type="password"
            className="border w-[80%] h-[40px] rounded-xl border-black px-5 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
            placeholder="Verify Password"
            value={verifyPwd}
            onChange={(e) => setVerifyPwd(e.target.value)}
          />
          <button
            className="bg-gray-400 w-[50%] h-[40px] rounded-3xl text-white hover:bg-gray-500 hover:scale-[1.05] hover:drop-shadow-xl transition-[1s]"
            onClick={register}
          >
            Signup
          </button>

          <p>
            Already User ?{" "}
            <Link
              href=""
              className="text-blue-500"
              onClick={() => closeModal(false)}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
