'use client'
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ImCart } from "react-icons/im";
import { useCartContext } from '../../contexts/cartContext';
import CommonButton from "../components/button";
import { useAuthContext } from "@/contexts/authContext";

// Diferentes secciones en el Header de navegación
const SECTIONS: { title: string; href: string; icon: boolean }[] = [
  { title: 'Inicio', href: '/', icon: false },
  { title: 'Nosotros', href: '/about-us', icon: false },
  { title: 'Productos', href: '/products', icon: false }
];

const NavigateSection = () => {
  const pathName = usePathname();
  const { cart } = useCartContext();
  const { logout, user } = useAuthContext();
  const router = useRouter();

  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  
  const handleLogin = () => {
    setPopoverOpen(false);
    router.push('/admin');
  };

  const handleLogout = () => {
    setPopoverOpen(false);
    return logout();
  }

  return (
    <div className={styles.navigateSection}>
      {SECTIONS.map(section => (
        <Link
          key={section.title}
          href={{ pathname: section.href }}
          className={pathName === section.href ? styles.sectionActive : styles.sections}
        >
          {section.title}
        </Link>
      ))}
      <Link
        href='/cart'
        className={pathName === '/cart' ? styles.sectionActive : styles.sections}
      >
        <div className={styles['cart-section']}>
          <ImCart />
          <p className={styles['cart-section-count']}>{cart.length}</p>
        </div>
      </Link>
      <CommonButton
        label="Cuenta"
        action={togglePopover}
        className={`primary-button ${styles['popover-button']}`}
      />
      <div className={styles.popoverContainer}>
        {popoverOpen && (
          <div className={styles.popoverContent} style={{ zIndex: 2 }}>
            <CommonButton
              label="Ingresar"
              disabled={user.logged}
              action={handleLogin}
              className={''}
            />
            <CommonButton
              label="Administración"
              disabled={!user.logged}
              action={() => router.push('/admin')}
              className={pathName === '/admin' ? styles.sectionActive : ''}
            />
            <CommonButton
              label="Cerrar Sesión"
              disabled={!user.logged}
              action={handleLogout}
              className={''}
            />
          </div>
        )}
      </div>
    </div>
  )
};

export default NavigateSection;