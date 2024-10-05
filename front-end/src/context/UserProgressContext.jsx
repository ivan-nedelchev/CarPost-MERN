import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showLogin: () => {},
  hideLogin: () => {},
  showRegister: () => {},
  hideRegister: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showLogin() {
    setUserProgress("login");
  }
  function hideLogin() {
    setUserProgress("");
  }
  function showRegister() {
    setUserProgress("register");
  }
  function hideRegister() {
    setUserProgress("");
  }
  const userProgressCtx = {
    progress: userProgress,
    showLogin,
    hideLogin,
    showRegister,
    hideRegister,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
