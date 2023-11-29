import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoMdArrowBack } from "react-icons/io";
import logo from "../../images/logo.png";
import usePlaid from "@/hooks/usePlaid";

type ModalTypes = {
  close: () => void;
};

const Modal: React.FC<ModalTypes> = ({ close }) => {
  const { back, getScreen, hasBack } = usePlaid();
  return (
    <div className="z-[9999] p-3 md:p-0 rounded-md flex flex-col overflow-hidden shadow-lg border transform transition-all h-screen w-full sm:w-[22em] sm:h-[34em] bg-white">
      <div className="w-full px-3 pt-3 sm:pt-6 sm:px-6 flex items-center justify-center font-semibold">
        {hasBack && (
          <IoMdArrowBack
            className="mr-auto w-6 h-6 md:w-4 md:h-4 font-bold cursor-pointer"
            onClick={back}
          />
        )}
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

export default Modal;
