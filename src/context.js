import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openUserTab, setOpenUserTab] = useState(false);
  const [currentID, setCurrentID] = useState("");
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };
  const setCurrentId = (cid) => {
    setCurrentID(cid);
    setOpenUserTab(true);
  };
  const getCurrentId = () => {
    return currentID;
  };
  const removeUser = () => {
    setUser(null);
  };
  const logoutUser = async () => {
    localStorage.removeItem("user");
    removeUser();
  };
  const fetchUser = async () => {
    const { name } = JSON.parse(localStorage.getItem("user"));
    if (name) saveUser(name);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        user,
        logoutUser,
        saveUser,
        logoutUser,
        currentID,
        setCurrentId,
        getCurrentId,
        openUserTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
