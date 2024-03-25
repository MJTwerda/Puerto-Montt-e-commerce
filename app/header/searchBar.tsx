'use client'
import React, { useState } from 'react';
import styles from "./header.module.css";
import { ImSearch } from "react-icons/im";

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
          type="text"
          className={styles.searchBar}
          placeholder="Buscá productos..."
          onChange={handleChange}

        />
        <button className={styles.searchIconButton} onClick={handleSubmitSearch}>
          <ImSearch color='#031c26' />
        </button>
      </form>
    </div>
  )
};

export default SearchBar;