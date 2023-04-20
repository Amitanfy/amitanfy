import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    var decoded,
      user = window.localStorage.getItem("user");
    if (user !== null) {
      decoded = jwtDecode(user);
      console.log("ok");
    } else decoded = null;
  }
  return (
    <UserContext.Provider value={{ decoded, user }}>
      {children}
    </UserContext.Provider>
  );
};
