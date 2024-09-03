"use client";
import Image from "next/image";
import { useState } from "react";
const flower = "/assets/flower.jpg";

// client site ***

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="min-h-screen w-full text-center bg-green-50">
      <div className="flex flex-col w-full h-[100vh] justify-center items-center uppercase">
        <h2 className="text-[64px] text-center mx-auto mt-24">
          <span className="text-green-500">Master</span> the Art of Code: Learn, <br />
          Practice, and Innovate Your <br />
          Way to <span className="text-green-500 drop-shadow-2xl">Success</span>
        </h2>
        <p className="text-center my-20">
          Unlock your potential with hands-on tutorials, real-world projects,{" "}
          <br />
          and expert guidance.
        </p>
        <button className="bg-primary text-[#ffffff] px-6 py-2 rounded-3xl">
          Get Started
        </button>
      </div>

      <div className="min-h-screen w-full bg-[#F2F2F2] text-center">
        <div className="flex justify-center items-center mx-auto w-full">
          <button
            onClick={() => setCounter(counter - 1)}
            className="font-bold text-[80px] mr-20 inline-block"
          >
            -
          </button>
          <h2 className="text-[80px] text-[#BA5354] inline-block">{counter}</h2>
          <button
            onClick={() => setCounter(counter + 5)}
            className="font-bold text-[80px] ml-20 inline-block"
          >
            +
          </button>
        </div>
        <h1 className="text-6xl uppercase px-20 py-10 text-[#BA5354]">
          - Welcome to your new project -{" "}
        </h1>
        <p className="text-[20px] mb-16 font-bold px-20 uppercase text-[#BA5354]">
          Kaiser - Abdullah - Sujoy - Naeem
        </p>
        <Image
          className="border-t-[1px] border-[#BA5354]"
          layout="responsive"
          width="50"
          height="50"
          src={flower}
          alt="welcome"
        ></Image>
      </div>
    </div>
  );
};

export default HomePage;
