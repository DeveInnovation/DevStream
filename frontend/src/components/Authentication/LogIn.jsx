"use client";
import axios from "axios";
import Link from "next/link";
const loginImg = "/assets/login.jpg";
import { FaStarOfLife } from "react-icons/fa";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function LogIn() {
  const router = useRouter()

  const [error, setError] = useState(false);
  const [Messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    setLoading(true);
    setError(false);
    setMessages(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userCredentials = { email, password };
    axios
      .post("https://devstream-server.vercel.app/userlogin", userCredentials)
      .then((response) => {
        if (response.status === 200 && response.data.token) {
          setLoading(false);
          toast.success("Log in Successful");
          Cookies.set("sessiontoken", response.data.token);
          router.push('/')
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 404) {
          setLoading(false);
          setError(true);
          setMessages(error.response.data.error);
        }
      });
  };
  return (
    <section className="w-full md:flex">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:w-[50%] absolute md:relative md:z-0 -z-10 w-full h-screen overflow-hidden">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${loginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%"
          }}
        ></div>
      </div>
      <div className="md:w-[50%] w-full bg-[#ffffffea] backdrop-blur-sm md:backdrop-blur-0">
        <div className="flex justify-center items-center w-full h-[100vh]">
          <div className="">
            <div>
              <h1 className="font-medium text-[24px] leading-7 text-[#444444]">
                Log In
              </h1>
              <p className="font-normal mt-3 text-[12px] leading-4 text-[#4a4a4a]">
                Figma ipsum component variant main layer.
              </p>
            </div>
            <div className="w-[400px] mt-12">
              <form onSubmit={handleLogin}>
                <div className="flex flex-col">
                  <label
                    className="ml-1 text-[14px] font-medium leading-5 flex items-start"
                    htmlFor="email"
                  >
                    Email <FaStarOfLife className="text-[5px] text-[#ff0000]" />
                  </label>
                  <input
                    required
                    className=" border-[1px] outline-none mt-1 rounded-lg border-[#dcdcdc] px-3 py-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Type Your Email"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    className="ml-1 text-[14px] font-medium leading-5 flex items-start"
                    htmlFor="password"
                  >
                    Password
                    <FaStarOfLife className="text-[5px] text-[#ff0000]" />
                  </label>
                  <input
                    required
                    className=" border-[1px] outline-none mt-1 rounded-lg border-[#dcdcdc] px-3 py-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Type Your Password"
                  />
                </div>
                <div className="w-full mt-4">
                  <Link
                    href="/"
                    className="font-normal text-[12px] leading-5 text-[#444444] text-right block"
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="w-full mt-4">
                  {error && (
                    <p className="text-red-500 pl-2 text-sm mb-2">{Messages}</p>
                  )}
                  <button
                    type="submit"
                    className="bg-[#21005D] text-[#ffffff] text-[14px] flex justify-center font-medium leading-5 text-center py-[10px] w-full rounded-[100px] "
                  >
                    {loading ? (
                      <ThreeDots
                        visible={true}
                        height="20"
                        width="30"
                        color="#ffffff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      "Log In"
                    )}
                  </button>
                </div>
                <div className="w-full">
                  <h5 className="text-[14px] leading-5 font-medium text-[#444444] mt-4">
                    If You Are New! Please{" "}
                    <Link className="text-green-500 underline" href="/signup">
                      sign up
                    </Link>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
