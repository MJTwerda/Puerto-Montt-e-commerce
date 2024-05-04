'use client'
import { useAuthContext } from "@/contexts/authContext";

type Props = {
  children: any;
  login: any
}

const AdminLayout = ({ children, login }: Props) => {
  const { user } = useAuthContext();

  return (
    <>
    { user.logged ? children : login }
    </>
  )
};

export default AdminLayout;
