import React, { createContext, useState } from "react";

export const UserContext = createContext(); 

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("default_username"); 
  
    return (
      <UserContext.Provider value={{ username, setUsername }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContext;