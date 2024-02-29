import React from "react";
import Header from "../../components/header";
import Image from "next/image";

const registerPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="flex items-center ">
        <div className="flex flex-1 w-1/2 py-16 justify-center">
          <div className="flex flex-col w-[550px] h-[481px] space-y-4 bg-white p-8">
            <div className="flex flex-col">
              <p className="font-inter text-primary font-bold">Email</p>
              <input
                placeholder="Email"
                type="text"
                name="search"
                className="border border-gray-300 rounded-lg py-3 placeholder:text-primary p-2"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-inter text-primary font-bold">Password</p>
              <input
                className="border border-gray-300 rounded-lg py-3 placeholder:text-primary p-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-inter text-primary font-bold">
                Repeat the password
              </p>
              <input
                className="border border-gray-300 rounded-lg py-3 placeholder:text-primary p-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="py-2 w-full">
              <button className="font-inter border bg-blue-900 text-white py-3  w-full rounded-[10px] font-semibold">
                Sign up
              </button>
            </div>
            <div className="py-2 w-full">
              <button className="font-inter border-2 border-blue-900 bg-white text-blue-900 py-3 w-full rounded-[10px] font-semibold">
                Already have an account? Log in
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="/register.png"
            alt="registerLogo"
            width={494}
            height={494}
          />
        </div>
      </div>
    </div>
  );
};

export default registerPage;
