import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import logo from "../../../images/logo.png";
import { cn } from "@/lib/utils";

type SelectProps = {
  forward: () => void;
};

const Select: React.FC<SelectProps> = ({ forward }) => {
  const [selection, setSelection] = useState<BankType | null>(null);

  return (
    <div className="h-full w-full p-5 flex flex-col items-center gap-6 sm:gap-3 lg:gap-6 overflow-hidden">
      <div className="flex flex-col items-start w-full space-y-1">
        <p className="text-lg text-bold">Select your bank</p>
        <div className="w-full border-[0.5px] border-black flex items-center px-2 py-1">
          <SearchIcon size={16} />
          <input
            className="outline-none px-2 placeholder:text-gray-500"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-2 gap-4 justify-center overflow-y-auto">
        {[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ].map((bank, i) => (
          <BankeCard
            id={`${i + 1}`}
            selection={selection}
            setSelection={setSelection}
          />
        ))}
      </div>
      {selection && (
        <button className="rounded-sm text-lg bg-black text-white font-semibold w-full py-3">
          Continue
        </button>
      )}
    </div>
  );
};

type BankType = {
  id: string;
  name: string;
};

type BankCardType = {
  id: string;
  selection: BankType | null;
  setSelection: (selection: BankType | null) => void;
};

const BankeCard: React.FC<BankCardType> = ({ id, selection, setSelection }) => {
  return (
    <div
      onClick={() => {
        if (selection?.id === id) {
          setSelection(null);
        } else {
          setSelection({ id, name: "Citi" });
        }
      }}
      className={cn(
        "cursor-pointer w-full border border-gray-100 shadow-sm rounded-lg flex gap-3 justify-center px-8 py-4",
        selection?.id === id && "bg-blue-500 text-white"
      )}
    >
      <div className="ratio-auto w-6 self-center">
        <img src={logo} />
      </div>
      <p className="text-xs font-bold">Bank Name</p>
    </div>
  );
};

export default Select;
