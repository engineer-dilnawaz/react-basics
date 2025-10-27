import { createContext, useState } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  loggedInUser: "Default User",
  handleLogIn() {},
  handleLogOut() {},
});

const initalState = {
  isLoggedIn: false,
  loggedInUser: "Unknown",
};

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    ...initalState,
  });

  const handleLogIn = () => {
    setUserState((prev) => ({
      ...prev,
      isLoggedIn: true,
      loggedInUser: "Dilnawaz",
    }));
  };

  const handleLogOut = () => {
    setUserState((prev) => ({
      ...prev,
      ...initalState,
    }));
  };

  return (
    <UserContext.Provider value={{ ...userState, handleLogIn, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
