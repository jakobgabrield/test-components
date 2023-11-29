import { PlaidContext } from "@/providers/PlaidContext";
import { useContext } from "react";

function usePlaid() {
  const context = useContext(PlaidContext);

  if (!context) {
    throw new Error("Error in usePlaid hook.");
  }

  return context;
}

export default usePlaid;
