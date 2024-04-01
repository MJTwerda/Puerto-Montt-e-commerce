'use client'
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Diferentes secciones en el Header de navegación
const SECTIONS: {title: string; href: string}[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Nosotros', href: '/about-us' },
  { title: 'Productos', href: '/products' }
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
    </div>
  )
};

export default NavigateSection;