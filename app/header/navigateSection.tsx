'use client'
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const SECTIONS = [
//   { title: 'Nosotros', href: '/nosotros' },
//   // { title: 'Ofertas', href: '/ofertas' },
//   { title: 'Categorías', href: '/categorias' },
//   // { title: 'Comprar', href: '/comprar' },
// ];

const NavigateSection = () => {
  const pathName = usePathname();

  return (
    <div className={styles.navigateSection}>
      <Link
        href='/nosotros'
        className={pathName === '/nosotros' ? styles.sectionActive : styles.sections}
      >
        Nosotros
      </Link>
      {/* <Link
        href='/nosotros'
        className={pathName === '/nosotros' ? styles.sectionActive : styles.sections}
      >
        Ofertas
      </Link> */}
      <Link
        href='/categorias'
        className={pathName === '/categorias' ? styles.sectionActive : styles.sections}
      >
        Categorías
      </Link>
      {/* <Link
        href='/categorias'
        className={pathName === '/categorias' ? styles.sectionActive : styles.sections}
      >
        Comprar
      </Link> */}
    </div>
  )
};

export default NavigateSection;