import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: String;
};

type UserContextType = {
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  user: AuthUser | null;
};

type FutureValueUserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType); // type assertion

const FutureValueUserContext = ({ children }: FutureValueUserContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default FutureValueUserContext;
