import Select from "@/components/Plaid/screens/Select";
import Welcome from "@/components/Plaid/screens/Welcome";
import { createContext, useState } from "react";

type PlaidContextType = {
  screen: "welcome" | "select";
  forward: () => void;
  back: () => void;
  getScreen: () => React.ReactNode;
  selection: BankType | null;
  setSelection: (selection: BankType | null) => void;
};

export const PlaidContext = createContext<PlaidContextType | null>(null);

type BankType = {
  id: string;
  name: string;
};

export default function PlaidContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [screen, setScreen] = useState<"welcome" | "select">("welcome");
  const [selection, setSelection] = useState<BankType | null>(null);

  const forward = () => {
    switch (screen) {
      case "welcome":
        return setScreen("select");
      default:
        return null;
    }
  };

  const back = () => {
    switch (screen) {
      case "select":
        return setScreen("welcome");
      default:
        return null;
    }
  };

  const getScreen = () => {
    switch (screen) {
      case "welcome":
        return <Welcome />;
      case "select":
        return <Select />;
      default:
        return <Welcome />;
    }
  };

  return (
    <PlaidContext.Provider
      value={{
        screen,
        forward,
        back,
        getScreen,
        selection,
        setSelection,
      }}
    >
      {children}
    </PlaidContext.Provider>
  );
}
