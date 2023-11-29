import React from "react";
import { LockIcon } from "lucide-react";
import usePlaid from "@/hooks/usePlaid";

const Login = () => {
  const { selection, forward } = usePlaid();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forward();
  };

  return (
    <div className="h-full w-full p-5 flex flex-col items-center gap-6 sm:gap-3 lg:gap-3 overflow-hidden py-32 sm:py-5">
      <div className="w-full flex flex-col space-y-2">
        <p className="text-2xl font-bold">Enter your credentials</p>
        <p className="text-gray-900 font-thin">
          By providing your <strong>{selection?.name}</strong> credentials to
          Plaid, you're enabling Plaid to retrieve your financial data.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3">
        <div className="px-3 w-full py-2 border-[0.5px] border-black flex items-center">
          <input
            type="text"
            placeholder="Username"
            className="text-md w-full outline-none"
          />
          <LockIcon size={14} className="ml-3" />
        </div>
        <div className="px-3 w-full py-2 border-[0.5px] border-black flex items-center">
          <input
            type="password"
            placeholder="Password"
            className="text-md w-full outline-none"
          />
          <LockIcon size={14} className="ml-3" />
        </div>
        <button
          type="submit"
          className="rounded-sm text-lg bg-black text-white font-semibold w-full py-3"
        >
          Continue
        </button>
        <button className="font-semibold">Reset password</button>
      </form>
    </div>
  );
};

export default Login;
