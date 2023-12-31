import React, { useState } from "react";
import Button from "./Button";
import styles from "../../assets/css/tailwind.scss?inline";
import Modal from "./Modal";
import PlaidContextProvider from "@/providers/PlaidContext";

type PlaidProps = {
  cid: string;
};

const Plaid: React.FC<PlaidProps> = ({ cid }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{styles.toString()}</style>
      <PlaidContextProvider>
        {open && (
          <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-200/75 z-[999] fixed">
            <Modal close={() => setOpen((status) => !status)} />
          </div>
        )}
        {!open && (
          <div className="bottom-6 right-6 space-y-5 flex flex-col items-end z-[9999] fixed">
            <Button isOpen={open} setIsOpen={setOpen} />
          </div>
        )}
      </PlaidContextProvider>
    </>
  );
};

export default Plaid;
