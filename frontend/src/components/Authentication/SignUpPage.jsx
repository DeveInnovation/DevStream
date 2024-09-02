import React from "react";
const loginImg = "/assets/login.jpg";
import { FaStarOfLife } from "react-icons/fa";
import Link from "next/link";

function SignUpPage() {
  return (
    <section className="w-full flex">
      <div className="w-[50%] h-screen overflow-hidden">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${loginImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="w-[50%]">
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
              <form>
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
                      className="outline-none text-[#444444]"
                      type="checkbox"
                      name="termscondition"
                      id=""
                    />
                  </div>
                  <div className="font-normal text-[12px] leading-5 text-[#444444]">
                    <span>I agree to all </span>
                    <Link href="/" className="underline">
                      Forget Password?
                    </Link>
                    <span> and </span>
                    <Link href="/" className=" underline">
                      Forget Password?
                    </Link>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="bg-[#21005D] text-[#ffffff] text-[14px] font-medium leading-5 text-center py-[10px] w-full rounded-[100px] mt-[32px]"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="w-full">
                  <h5 className="text-[12px] leading-5 font-medium text-[#444444] mt-4">
                    Already have an account?<Link href="/">Login</Link>
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
