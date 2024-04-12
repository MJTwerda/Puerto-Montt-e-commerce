'use client'
import React from "react";
import styles from './products.module.css';
import { MOCK_CATEGORIES } from '../../constants/products';

interface Props {
  handleFilterCategories: (event: any) => void;
  selectedCategories: string[];
}
const CategoriesSidebar = ({ handleFilterCategories, selectedCategories }: Props) => {
  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(MOCK_CATEGORIES).map(category => (
        <div key={MOCK_CATEGORIES[category].value} className={styles.categoryItem}>
          <input 
            type='checkbox' 
            onChange={handleFilterCategories} 
            value={MOCK_CATEGORIES[category].value}
            checked={selectedCategories.includes(MOCK_CATEGORIES[category].value)}
          />
          <p>{MOCK_CATEGORIES[category].label}</p>
        </ div>
      ))}
    </div>
  )
};

export default CategoriesSidebar;