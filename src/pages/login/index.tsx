import React from "react";
import Header from "../../components/header";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="flex items-center">
        <div className="flex flex-1 w-1/2 items-center justify-center">
          <div className="flex flex-col w-[550px] h-[392px] space-y-4 bg-white p-8">
            <div className="flex flex-col ">
              <p className="text-primary font-bold ">Email</p>
              <input
                placeholder="Email"
                type="text"
                name="search"
                className="border border-gray-300 rounded-lg py-3 placeholder:text-primary p-2"
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-primary font-bold">Password</p>
              <input
                className="border border-gray-300 rounded-lg py-3 placeholder:text-primary p-2"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="py-2 w-full">
              <button className="border bg-blue-900 text-white py-3 w-full rounded-[10px] font-semibold">
                Log in
              </button>
            </div>
            <div className="py-2 w-full">
              <button className="border-2 border-blue-900 bg-white text-blue-900 py-3 w-full rounded-[10px] font-semibold">
                Don’t have an account yet? Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <Image src="/Frame.png" alt="loginPageImg" width={620} height={620} />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
