import { Product } from '../interfaces/product';

// Se devuelve producto random para mostrar como destacado en el Home
export const showFeaturedProduct = (productList: Product[]) => {
  return productList[Math.floor(Math.random() * productList.length)];
}