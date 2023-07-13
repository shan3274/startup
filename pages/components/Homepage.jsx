import React, { useState, useEffect } from "react";
// import styled, { keyframes, css } from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Homepage = () => {
  const [ifuser, setIfUser] = useState(null);
  useEffect(() => {
    setIfUser(localStorage.getItem("email"));
  }, []);
  if (ifuser != null) {
    return <div>welcom {localStorage.getItem("userName")}</div>;
  } else {
    return (
      <div className="w-[100vw] h-[100vh] text-[#000000] relative flex flex-col items-center justify-start">
        {/* scrolling text */}
        <div className="w-[100%] h-[10%] flex items-center justify-center flex-col ">
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
        </div>
        {/* four about boxes */}
        <div className="w-[70%] h-[15%] flex items-center justify-around absolute bottom-[20rem]">
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            Who we are?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            What we do?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            How to Contact Us?
          </div>
          <div className="w-[17%] h-[90%] bg-white drop-shadow-xl rounded-lg border cursor-pointer hover:scale-[1.05] flex items-center justify-center hover:text-blue-300 text-[20px] text-center transition-[1s]">
            Business Profile
          </div>
        </div>
        {/* Ads swiper */}
        <div className="w-[95%] h-[60%] flex items-center justify-center m-10  border z-[-1] absolute top-10">
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
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Heart-Surgeons_V1._CB601144149_.jpg"
                  alt="Image"
                  className="w-[100%] object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%] object-cover">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Heart-Surgeons_V1._CB601144149_.jpg"
                  alt="Image"
                  className="w-full h-full "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Heart-Surgeons_V1._CB601144149_.jpg"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Heart-Surgeons_V1._CB601144149_.jpg"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[100%]">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/MotionHero2023/3000x1200_Heart-Surgeons_V1._CB601144149_.jpg"
                  alt="Image"
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Services */}
        <div className="w-[80%] h-[20%] flex items-center justify-around absolute bottom-5 z-10">
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
        <div className="w-full h-[500px] bg-gray-400 text-white absolute bottom-[-500px] flex flex-col items-center justify-start">
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