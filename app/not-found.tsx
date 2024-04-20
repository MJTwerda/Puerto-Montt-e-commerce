'use client'
import React from "react";
import styles from './page.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import CommonButton from "./components/button";

export const metadata = {
  title: 'Puerto Montt - Page not found',
  description: 'Page not found'
}

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section>
      <CommonButton 
        label="Volver"
        className="back-button"
        action={router.back}
      />
      <div className={styles.notFoundContainer}>
        <Image 
          alt='Page not found'
          src='/not-found-pc.png'
          width={560}
          height={560}
        />
        <h1 className={styles.notFoundTitle}>Página no encontrada!</h1>
      </div>
    </section>
  );
};
export default NotFoundPage;