'use client'
import React from "react";
import styles from './products.module.css';
import { MOCK_CATEGORIES } from '../../constants/products';

interface Props {
  handleFilterCategories: (event: any) => void;
}
const CategoriesSidebar = ({ handleFilterCategories }: Props) => {
  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(MOCK_CATEGORIES).map(category => (
        <div key={MOCK_CATEGORIES[category].value} className={styles.categoryItem}>
          <input 
            type='checkbox' 
            onClick={handleFilterCategories} 
            value={MOCK_CATEGORIES[category].value}
            defaultChecked={MOCK_CATEGORIES[category].value === 'todos'}
          />
          <p>{MOCK_CATEGORIES[category].label}</p>
        </ div>
      ))}
    </div>
  )
};

export default CategoriesSidebar;