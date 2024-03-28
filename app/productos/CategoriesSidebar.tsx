'use client'
import React from "react";
import styles from './products.module.css';
import { MOCK_CATEGORIES } from '../../constants/products';

interface Props {
  selectedCategories: string[];
  handleFilterCategories: (event: any) => void;
}
const CategoriesSidebar = ({ selectedCategories, handleFilterCategories }: Props) => {
  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(MOCK_CATEGORIES).map(category => (
        <div key={category}>
          <input 
            type='checkbox' 
            onClick={handleFilterCategories} 
            value={category}
            // onChange={handleFilterCategories}
            // checked={selectedCategories.includes(category)}
          />
          <p>{MOCK_CATEGORIES[category]}</p>
        </ div>
      ))}
    </div>
  )
};

export default CategoriesSidebar;