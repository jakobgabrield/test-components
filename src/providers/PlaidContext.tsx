import Login from "@/components/Plaid/screens/Login";
import Select from "@/components/Plaid/screens/Select";
import Success from "@/components/Plaid/screens/Success";
import Welcome from "@/components/Plaid/screens/Welcome";
import { createContext, useMemo, useState } from "react";

type ScreenType = "welcome" | "select" | "login" | "success";

type PlaidContextType = {
  screen: ScreenType;
  forward: () => void;
  back: () => void;
  getScreen: () => React.ReactNode;
  selection: BankType | null;
  setSelection: (selection: BankType | null) => void;
  hasBack: boolean;
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
  const [screen, setScreen] = useState<ScreenType>("welcome");
  const [selection, setSelection] = useState<BankType | null>(null);

  const values = useMemo(() => {
    const forward = () => {
      switch (screen) {
        case "welcome":
          return setScreen("select");
        case "select":
          return setScreen("login");
        case "login":
          return setScreen("success");
        default:
          return null;
      }
    };

    const back = () => {
      switch (screen) {
        case "select":
          return setScreen("welcome");
        case "login":
          return setScreen("select");
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
        case "login":
          return <Login />;
        case "success":
          return <Success />;
        default:
          return <Welcome />;
      }
    };

    const hasBack = !["welcome", "success"].includes(screen);

    return {
      screen,
      forward,
      back,
      getScreen,
      selection,
      setSelection,
      hasBack,
    };
  }, [screen, selection, setSelection]);

  return (
    <PlaidContext.Provider value={values}>{children}</PlaidContext.Provider>
  );
}
