import React from "react";
import { PiPlugsConnectedBold } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";
import illustration from "../../../images/app-launch.svg";

const Home = () => {
  return (
    <div className="h-full w-full p-5 flex flex-col items-center gap-6 sm:gap-3 lg:gap-6">
      <div className="flex flex-col items-center">
        <div className="w-2/3 sm:w-1/3">
          <img src={illustration} />
        </div>
        <p className="w-full text-2xl md:px-8 sm:text-xl font-thin text-center">
          This application uses Plaid to connect your accounts
        </p>
      </div>
      <div className="w-full flex justify-center gap-3 px-3">
        <PiPlugsConnectedBold className="font-bold w-6 h-6" />
        <div className="text-lg sm:text-sm">
          <p className="">Connect effortlessly</p>
          <p className="font-light">
            Plaid lets you descurely connect your accounts in seconds
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center gap-3 px-3">
        <FaRegEyeSlash className="font-bold w-6 h-6" />
        <div className="text-lg sm:text-sm">
          <p className="">Connect effortlessly</p>
          <p className="font-light">
            Plaid lets you descurely connect your accounts in seconds
          </p>
        </div>
      </div>
      <div className="w-full border-t border-gray-100 py-3 gap-6 sm:gap-3 flex flex-col flex-grow justify-center">
        <div className="inline">
          <p className="text-xs font-thin text-center px-14">
            By clicking "Continue" you agree to the{" "}
            <a href="/" className="underline cursor-pointer">
              Plaid end user privacy policy
            </a>
          </p>
        </div>
        <button className="rounded-sm text-lg bg-black text-white font-semibold w-full py-3">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
