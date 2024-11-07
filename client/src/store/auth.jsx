import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLogIn, setIsLogIn] = useState(!!token);

  const storedtoken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update token state
  };

  // Update isLogIn whenever token changes
  useEffect(() => {
    setIsLogIn(!!token);
  }, [token]);

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLogIn, storedtoken, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
