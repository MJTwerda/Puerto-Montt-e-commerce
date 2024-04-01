'use client'
import React from "react";
import styles from './page.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section>
      <button className="back-button" onClick={router.back}>
        Volver
      </button>
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