'use client'
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImCart } from "react-icons/im";

// Diferentes secciones en el Header de navegación
const SECTIONS: { title: string; href: string; icon: boolean }[] = [
  { title: 'Inicio', href: '/', icon: false },
  { title: 'Nosotros', href: '/about-us', icon: false },
  { title: 'Productos', href: '/products', icon: false }
];

const NavigateSection = () => {
  const pathName = usePathname();

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
        <ImCart />
      </Link>
    </div>
  )
};

export default NavigateSection;