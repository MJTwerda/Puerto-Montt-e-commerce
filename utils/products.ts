import { Product } from '../interfaces/product';

// Se devuelve producto random para mostrar como destacado en el Home
export const showFeaturedProduct = (productList: Product[]) => {
  return productList[Math.floor(Math.random() * productList.length)];
};

/**
 * Recibe una cadena, un caracter a reemplazar y un caracter por el cual reemplazar.
 */
export const replaceChar = (char: string, charToReplace: string, replaceFor: string) => {
  let nuevoStr = char.replaceAll(charToReplace, replaceFor);
  return nuevoStr;
}