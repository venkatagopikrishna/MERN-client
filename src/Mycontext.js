import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const registerUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <MyContext.Provider value={{ users, registerUser }}>
      {children}
    </MyContext.Provider>
  );
};