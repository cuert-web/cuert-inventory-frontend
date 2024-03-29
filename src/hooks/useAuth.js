import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useAuth must be used within a AuthProvider");

  return context;
}
