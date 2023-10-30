import React from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface UserContextType {
    user: String | null;
    setUser: Dispatch<SetStateAction<string | null>>;
  }

export const UserContext = React.createContext<UserContextType>({user: null, setUser: (x) => {}});
