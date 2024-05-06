'use client'
import React, { useState } from 'react';
import styles from "./header.module.css";
import { ImSearch } from "react-icons/im";
import CommonButton from '../components/button';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();
  const [searchProduct, setSearchProduct] = useState('');

  const handleChange = (event: any) => {
    setSearchProduct(event.target.value);
  }

  // TODO: Implementar con filtrado por categorías
  const handleSubmitSearch = (event: any) => {
    event.preventDefault();
    if (searchProduct) {
      router.push('/products');
      setSearchProduct('');
    }
  }

  return (
    <div className={styles.divContainerForm}>
      <form>
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Buscá productos..."
          onChange={handleChange}

        />
        <CommonButton 
          label={<ImSearch color='#031c26' />}
          disabled={!searchProduct.length}
          className={styles.searchIconButton}
          action={handleSubmitSearch}
        />
      </form>
    </div>
  )
};

export default SearchBar;