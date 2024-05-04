'use client'
import React, { createContext, useContext, useState } from "react";

type UserState = {
  logged: boolean;
  email: null | string;
  uid: null | string;
}

type AuthContextType = {
  user: UserState;
}

const AuthContext = createContext<AuthContextType>({
  user: { logged: false, email: null, uid: null }
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [ user, setUser ] = useState<UserState>({
    logged: false,
    email: null,
    uid: null
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;