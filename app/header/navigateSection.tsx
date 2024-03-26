'use client'
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS: {title: string; href: string}[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Nosotros', href: '/nosotros' },
  { title: 'Productos', href: '/productos' }
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