import { Product } from "@/interfaces/product";
import { DocumentData } from "firebase/firestore";

export const setImageURL = (productList: DocumentData) => {
  const formattedProductList = productList.map((product: Product) => {
    return product = {
      ...product,
      images: [`${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL}/${product.images[0]}`]
    }
  });
  return formattedProductList;
};

export const individualSetImageURL = (product: DocumentData) => {
  return {
    ...product,
    images: [`${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL}/${product.images[0]}`]
  }
}