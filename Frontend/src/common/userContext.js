import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  let decoded = null;
  let user = null;
  
  if (typeof window !== "undefined") {
    user = window.localStorage.getItem("user");
    if (user !== null) {
      decoded = jwtDecode(user);
    }
  }

  return (
    <UserContext.Provider value={{ decoded, user }}>
      {children}
    </UserContext.Provider>
  );
};
