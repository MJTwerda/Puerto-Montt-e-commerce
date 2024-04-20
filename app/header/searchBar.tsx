'use client'
import React, { useState } from 'react';
import styles from "./header.module.css";
import { ImSearch } from "react-icons/im";
import CommonButton from '../components/button';

const SearchBar = () => {
  const [searchProduct, setSearchProduct] = useState('');

  const handleChange = (event: any) => {
    setSearchProduct(event.target.value);
  }

  const handleSubmitSearch = (event: any) => {
    event.preventDefault();
    alert('Buscando: ' + searchProduct + '...');
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
          className={styles.searchIconButton}
          action={handleSubmitSearch}
        />
      </form>
    </div>
  )
};

export default SearchBar;