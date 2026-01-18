// src/context/ShopContext.jsx
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 1️⃣ Create context
export const ShopContext = createContext();

// 2️⃣ Create provider component
export const ShopProvider = ({ children }) => {
  const navigate = useNavigate();

  // Store auth token
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Your backend API base URL from env
  const backendUrl = import.meta.env.VITE_API_URL;

  // Optional: Save token in localStorage whenever it changes
  const saveToken = (newToken) => {
    setToken(newToken);
    if (newToken) localStorage.setItem('token', newToken);
    else localStorage.removeItem('token');
  };

  return (
    <ShopContext.Provider
      value={{
        token,
        setToken: saveToken,
        navigate,
        backendUrl,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
