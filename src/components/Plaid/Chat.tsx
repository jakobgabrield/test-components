import React from "react";
import Home from "./screens/Home";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../images/logo.png";

type ChatTypes = {
  close: () => void;
};

const Chat: React.FC<ChatTypes> = ({ close }) => {
  const getScreen = () => {
    return <Home />;
  };

  return (
    <div className="p-3 md:p-0 rounded-md flex flex-col overflow-hidden shadow-lg border transform transition-all h-screen w-full sm:w-[22em] sm:h-[34em] bg-white">
      <div className="w-full p-3 flex items-center justify-center font-semibold">
        <div className="py-2 absolute self-center ratio-auto w-12 md:w-6 flex-none flex-shrink-0 overflow-hidden">
          <img src={logo} alt="Logo" />
        </div>
        <XMarkIcon
          className="ml-auto w-6 h-6 md:w-4 md:h-4 font-bold cursor-pointer"
          onClick={close}
        />
      </div>
      <div className="w-full flex-1 justify-center overflow-auto">
        {getScreen()}
      </div>
    </div>
  );
};

export default Chat;
