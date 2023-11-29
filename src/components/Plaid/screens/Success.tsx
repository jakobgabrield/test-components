import React from "react";
import image from "@/images/work-party.svg";

const Success = () => {
  return (
    <div className="h-full w-full p-5 flex flex-col items-center gap-6 sm:gap-3 lg:gap-3 overflow-hidden">
      <div className="w-full h-full flex flex-col space-y-2 items-center justify-center">
        <div className="w-2/3 sm:w-1/3">
          <img src={image} alt="Success Image" />
        </div>
        <p className="text-2xl font-bold">Success</p>
        <p className="mx-6 text-center text-gray-500 text-lg">
          Your account has been successfully linked to this application.
        </p>
      </div>
      <button className="rounded-sm text-lg bg-black text-white font-semibold w-full py-3">
        Continue
      </button>
    </div>
  );
};

export default Success;
