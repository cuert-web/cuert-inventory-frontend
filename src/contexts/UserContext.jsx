import { useUser } from "@/hooks/useUser";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { user, isLoading } = useUser();

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
