'use client'
import { useAuthContext } from "@/contexts/authContext";
import React, { Suspense } from 'react';
import CommonLoader from "../components/commonLoader";

type Props = {
  children: any;
  login: any
}

const AdminLayout = ({ children, login }: Props) => {
  const { user } = useAuthContext();

  return (
    <Suspense fallback={
      <CommonLoader
        imageAlt="Cargando contenido"
        imageHeight={35}
        imageWidth={35}
        imageSrc="/loading-glass.png"
        label="...cargando pantalla"
      />
    }>
      {user.logged ? children : login}
    </Suspense>
  )
};

export default AdminLayout;
