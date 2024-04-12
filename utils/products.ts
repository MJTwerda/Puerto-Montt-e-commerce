import { Product } from '../interfaces/product';

// Se devuelve producto random para mostrar como destacado en el Home
export const showFeaturedProduct = (productList: Product[]): Product => {
  return productList[Math.floor(Math.random() * productList.length)];
};

// TODO: Simulación de petición a API. Debería quitarse al usar una API real
export const sleep = (timer: number) => {
  return new Promise(resolve => setTimeout(resolve, timer));
}