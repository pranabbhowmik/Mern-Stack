import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLogIn, setIsLogIn] = useState(!!token);
  const [user, setUser] = useState("");

  const storedtoken = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update token state
  };

  // Update isLogIn whenever token changes
  useEffect(() => {
    setIsLogIn(!!token);
  }, [token]);

  // JWT Authentication
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error Fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLogIn, storedtoken, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
