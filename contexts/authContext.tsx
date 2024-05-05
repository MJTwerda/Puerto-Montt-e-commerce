'use client'
import { auth } from '../firebase/config';
import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';

type UserState = {
  logged: boolean;
  email: null | string;
  uid: null | string;
}

type AuthContextType = {
  user: UserState;
  registerUser: (values: { email: string, password: string }) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: { logged: false, email: null, uid: null },
  registerUser: () => { }
  
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

  const registerUser = async (values: { email: string, password: string }) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password);
    console.log('User Credentials: ', userCredentials);

    const user = userCredentials.user;
    console.log('USER!! ', user);
    setUser({ logged: true, email: user.email, uid: user.uid });
    // setUser({ logged: true, email: '', uid: '' })
  }

  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;