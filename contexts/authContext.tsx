'use client'
import { auth } from '../firebase/config';
import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthValues } from '@/interfaces/contactInfo';
import axios from 'axios';
import { INTERNAL_API_URL } from '@/constants/commons';

type UserState = {
  logged: boolean;
  email: null | string;
  uid: null | string;
}

type AuthContextType = {
  user: UserState;
  registerUser: (values: AuthValues) => void;
  loginUser: (values: AuthValues) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: { logged: false, email: null, uid: null },
  registerUser: () => { },
  loginUser: () => {}
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

  const registerUser = (values: AuthValues) => {
    axios({
      method: 'POST',
      url: `${INTERNAL_API_URL}/admin`,
      data: values
    }).then(({ data }) => {
      // TODO: Implementar notificaciones
      if (data.ok) {
        setUser({ logged: true, email: data.user.email, uid: data.user.uid });
      }
    })
  }

  const loginUser = (values: AuthValues) => {
    axios({
      method: 'POST',
      url: `${INTERNAL_API_URL}/admin`,
      data: values
    }).then(({ data }) => {
      // TODO: Implementar notificaciones
      if (data.ok) {
        setUser({ logged: true, email: data.user.email, uid: data.user.uid });
      }
    })
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;