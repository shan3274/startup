import React, { useState, useEffect } from "react";
// import styled, { keyframes, css } from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { db } from "../firebase-config";
import { HiOutlineInformationCircle } from "react-icons/hi";

// typeing style lib

import Typewriter from "typewriter-effect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Know from "./Know";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { collection, getDocs } from "firebase/firestore";
import Tooltips from "./Tooltips";

const Homepage = () => {
  const [ifuser, setIfUser] = useState(null);

  // modals
  const [know, setKnow] = useState(false);

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
    getData();
  }, []);
  useEffect(() => {
    data.map((item) => {
      localStorage.setItem("companyAddress", item.companyAddress);
      localStorage.setItem("companyName", item.companyName);
      localStorage.setItem("email", item.email);
      localStorage.setItem("gstin", item.gstin);
      localStorage.setItem("natureOfBusiness", item.natureOfBusiness);
      localStorage.setItem("sellerType", item.sellerType);
      localStorage.setItem("userName", item.userName);
    });
  }, [data]);

  console.log(data);

  useEffect(() => {
    setIfUser(localStorage.getItem("email"));
  }, []);
  console.log("data", data);

  if (ifuser != null) {
    return (
      <>
        <div
          className="w-full  flex flex-col justify-center items-center  absolute top-0 z-[-1]"
          style={{
            backgroundImage: `url("https://tecdn.b-cdn.net/img/new/slides/041.jpg")`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-screen flex flex-col justify-center items-center bg-trans ">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="text-[70px] font-[500] text-white">
                This is Heading Exmple{" "}
              </p>
              <p className="text-[20px] w-[40%] text-center text-teal-300">
                <Typewriter
                  options={{
                    strings: [
                      "this is text example and the actual text will be replace",
                      "You can buy any thing here",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <div className="w-[30%] h-[20%]  flex items-center justify-around">
              <Link href="/sell" className="w-[40%] h-[40%]">
                <div className="relative overflow-hidden w-[100%] h-[100%] flex items-center justify-center px-[15px] py-0 text-center  text-[25px] mx-[20px] my-[10px] rounded-[25px]  border-[2px] bg-trans text-white cursor-pointer border-[#009688] duration-500 hover:bg-[#009688] ">
                  SELL
                </div>
              </Link>
              <Link href="/buy" className="w-[40%] h-[40%]">
                <div className="relative overflow-hidden w-[100%] h-[100%] flex items-center justify-center px-[15px] py-0 text-center  text-[25px] mx-[20px] my-[10px] rounded-[25px]  border-[2px] bg-trans text-white cursor-pointer border-[#009688] duration-500 hover:bg-[#009688] ">
                  BUY
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full h-screen text-[#000000] absolute flex flex-col items-center justify-start">
        {/* scrolling text */}
        {/* <div className="w-[100%] h-[10%] flex items-center justify-center flex-col ">
          <div className="flex w-[100%] overflow-hidden select-none">
            <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-[100%] animate-scrollX">
              <div className="grid place-items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <p className="text-[20px] sm:text-[35px] font-[500] object-contain w-[100%] h-[100%] rounded-[.5rem] px-[5px] py-[20px] drop-shadow-md">
                  Tag Line / Punch Line Scrolling
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-[100%] animate-scrollX">
              <div className="grid place-items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <p className="text-[20px] sm:text-[35px] font-[500] object-contain w-[100%] h-[100%] rounded-[.5rem] px-[5px] py-[20px] drop-shadow-md">
                  Tag Line / Punch Line Scrolling
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-[100%] h-[10%] flex items-center justify-center flex-col ">
          <div className="flex w-[100%] overflow-hidden select-none">
            <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-[100%] animate-pulse">
              <div className="grid place-items-center w-[clamp(10rem, 1rem + 40vmin, 30rem)] p-[calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)]">
                <p className="text-[25px] font-[700] text-orange-500 object-contain w-[100%] h-[100%] rounded-[.5rem] px-[5px] py-[20px] drop-shadow-md">
                  ONE STOP SOLUTION FOR TECHNICAL PRODUCTS AND SERVICES
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* four about boxes */}
        <div className="w-[60%] h-[12%] flex items-center justify-around absolute top-[7rem]">
          <div
            className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[15px] text-center transition-[1s]"
            onClick={() => setKnow(true)}
          >
            Who we are?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[15px] text-center transition-[1s]">
            What we do?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[15px] text-center transition-[1s]">
            How to Contact Us?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[15px] text-center transition-[1s]">
            Business Profile
          </div>
        </div>
        {/* Ads swiper */}

        <div className="w-[70%] h-[50%] flex items-center justify-center m-10  border z-[-1] absolute top-[25%]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                  alt="Image"
                  className="w-[100%]  bg-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%] object-cover">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter2.jpg?alt=media&token=aa4bc2e0-877a-40e8-9b23-4f1bc7f29a1e"
                  alt="Image"
                  className="w-full h-full "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter3.jpg?alt=media&token=65b5b64e-1ea7-4d77-9b47-2cd5290ec7c2"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter4.jpg?alt=media&token=2e71040d-99bf-4b53-8f77-92eef1b46b3b"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter5.jpg?alt=media&token=5ec5d1c2-2b15-4002-b6f1-98c49915b457"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Services */}
        <div className="w-[80%] h-[20%] flex items-center justify-around absolute bottom-[-5rem] z-10">
          <div className="w-[25%] h-[100%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            Technical Productss
          </div>
          <div className="w-[25%] h-[100%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            Technical Services
          </div>
          <div className="w-[25%] h-[100%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            Consultancy
          </div>
        </div>
        {/* footer */}
        <div className="w-full h-[500px] bg-gray-400 text-white absolute bottom-[-650px] flex flex-col items-center justify-start">
          <div className="w-full h-[100px] bg-gray-500  text-[15px] font-[500] flex items-center justify-center cursor-pointer hover:scale-[1.02] hover:text-gray-200 transition-[1s]">
            Procedure to buy & sell on this website
          </div>
          <div className="w-[80%] h-[400px] text-white text-[17px] font-[500] flex items-center justify-around">
            <div className="w-[25%] h-[100%] flex flex-col items-center justify-center">
              <p className="text-[18px] font-[700]">Heading demo line</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
            </div>
            <div className="w-[25%] h-[100%] flex flex-col items-center justify-center">
              <p className="text-[18px] font-[700]">Heading demo line</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
            </div>
            <div className="w-[25%] h-[100%] flex flex-col items-center justify-center">
              <p className="text-[18px] font-[700]">Heading demo line</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
            </div>
            <div className="w-[25%] h-[100%] flex flex-col items-center justify-center">
              <p className="text-[18px] font-[700]">Heading demo line</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
              <p>Demo list</p>
            </div>
          </div>
        </div>
        {know && <Know closeModal={{ setKnow }} />}
      </div>
    );
  }
};

export default Homepage;

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #000000;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: start;
// `;
// const Wrapper = styled.div`
//   width: 100%;
//   height: 10%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
// const Marquee = styled.div`
//   display: flex;
//   width: 100%;
//   overflow: hidden;
//   user-select: none;
// `;
// const scrollX = keyframes`
//   from{
//     left : translateX(0);
//   }
//   to{
//     transform : translateX(-100%);
//   }
// `;
// const MarqueeGroup = styled.div`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 10s linear infinite;
// `;

// const TextGRoup = styled.div`
//   display: grid;
//   place-items: center;
//   width: clamp(10rem, 1rem + 40vmin, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;
// const Text = styled.div`
//   font-size: 35px;
//   font-weight: 500;
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2);

//   @media (max-width: 640px) {
//     font-size: 20px;
//   }
// `;
