'use client'
import { auth } from '../firebase/config';
import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { AuthValues } from '@/interfaces/contactInfo';
// import axios from 'axios';
// import { INTERNAL_API_URL } from '@/constants/commons';

type UserState = {
  logged: boolean;
  email: null | string;
  uid: null | string;
}

type AuthContextType = {
  user: UserState;
  registerUser: (values: AuthValues) => void;
  loginUser: (values: AuthValues) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: { logged: false, email: null, uid: null },
  registerUser: () => { },
  loginUser: () => {},
  logout: () => { }
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ logged: true, email: user.email, uid: user.uid });
      } else {
        setUser({ logged: false, email: null, uid: null });
      }
    });
  }, [])

  const registerUser = async (values: AuthValues) => {
    await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    // await axios({
    //   method: 'POST',
    //   url: `${INTERNAL_API_URL}/admin`,
    //   data: values
    // })
    // .then(({ data }) => {
    //   console.log('Data Register: ', data);
    //   // TODO: Implementar notificaciones
    //   if (data.ok) {
    //     return;
    //     // setUser({ logged: true, email: data.user.email, uid: data.user.uid });
    //   }
    // })
  }

  const loginUser = async (values: AuthValues) => {
    await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    // await axios({
    //   method: 'POST',
    //   url: `${INTERNAL_API_URL}/admin`,
    //   data: values
    // })
    // .then(({ data }) => {
    //   console.log('Data Login: ', data);
    //   // TODO: Implementar notificaciones
    //   if (data.ok) {
    //     return;
    //     // setUser({ logged: true, email: data.user.email, uid: data.user.uid });
    //   }
    // })
  };

  const logout = async() => {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;