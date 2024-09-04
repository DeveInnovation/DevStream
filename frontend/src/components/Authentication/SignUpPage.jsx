"use client";
import { ThreeDots } from "react-loader-spinner";
import React, { useState } from "react";
import Cookies from "js-cookie";
const signupImg = "/assets/signup.jpg";
import { FaStarOfLife } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

function SignUpPage() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  /* ============================================
----FORM HANDLING USING EVENT HANDElER---------
==============================================*/
  const formHandler = (event) => {
    setLoading(true);
    setError(false);
    setErrorMessage(null);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const password = form.password.value;
    const terms_condition = form.terms_condition.checked;
    const userCredentials = { name, email, phone, password, terms_condition };
    console.log(userCredentials);
    axios
      .post("https://devstream-server.vercel.app/createuser", userCredentials)
      .then((response) => {
        console.log(response);
        if (response.status === 200 && response.data.token) {
          setLoading(false);
          Cookies.set("sessiontoken", response.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 400) {
          setLoading(false);
          setError(true);
          setErrorMessage(error.response.data.error);
        }
      });
  };

  return (
    <section className="w-full md:flex">
      <div className="md:w-[50%] absolute md:relative md:z-0 -z-10 w-full h-screen overflow-hidden">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${signupImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="md:w-[50%] w-full bg-[#ffffffea] backdrop-blur-sm md:backdrop-blur-0">
        <div className="flex justify-center items-center w-full h-[100vh]">
          <div className="">
            <div>
              <h1 className="font-medium text-[24px] leading-7 text-[#444444]">
                Create your Account
              </h1>
              <p className="font-normal mt-3 text-[12px] leading-4 text-[#4a4a4a]">
                Figma ipsum component variant main layer.
              </p>
            </div>
            <div className="w-[400px] mt-12">
              <form onSubmit={formHandler}>
                <div className="flex flex-col">
                  <label
                    className="ml-1 text-[14px] font-medium leading-5 flex items-start"
                    htmlFor="name"
                  >
                    Name <FaStarOfLife className="text-[5px] text-[#ff0000]" />
                  </label>
                  <input
                    required
                    className=" border-[1px] outline-none mt-1 rounded-lg border-[#dcdcdc] px-3 py-2"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Type Your name"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    className="ml-1 text-[14px] font-medium leading-5 flex items-start"
                    htmlFor="email"
                  >
                    Email
                    <FaStarOfLife className="text-[5px] text-[#ff0000]" />
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
                    htmlFor="number"
                  >
                    Number
                  </label>
                  <input
                    className=" border-[1px] outline-none mt-1 rounded-lg border-[#dcdcdc] px-3 py-2"
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Type Your number"
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
                <div className="w-full mt-4 flex gap-2">
                  <div>
                    <input
                      required
                      className="outline-none text-[#444444]"
                      type="checkbox"
                      name="terms_condition"
                      id=""
                    />
                  </div>
                  <div className="font-normal text-[12px] leading-5 text-[#444444]">
                    <span>I agree to all </span>
                    <Link href="/" className="underline">
                      Terms of Service
                    </Link>
                    <span> and </span>
                    <Link href="/" className=" underline">
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                <div className="w-full mt-[16px]">
                  {error && (
                    <p className="text-red-500 pl-2 text-sm mb-2">
                      {errorMessage}
                    </p>
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
                      "Sign Up"
                    )}
                  </button>
                </div>
                <div className="w-full">
                  <h5 className="text-[14px] leading-5 font-medium text-[#444444] mt-4">
                    Already have an account? <Link className="text-green-500 underline" href="/login">login</Link>
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

export default SignUpPage;
