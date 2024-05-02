import { NextRequest, NextResponse } from "next/server";
import { MOCK_CATEGORIES } from "@/constants/products";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { setImageURL } from '../../utils/relatesProducts';

interface Params {
  params: {
    categories: string;
  };
}

export async function GET(r: NextRequest, { params }: Params) {
  const { categories } = params;
  // Se parse el param "categories" separando las categorías por la ","
  const parsedCategories = categories.length
    ? categories.split(",")
    : categories;

  // Se trae la collection "products desde nuestra db firestore instanciada en config.ts"
  const productsCollection = collection(db, "products");

  /**
   * Se filtran los productos según las categorías recibidas por params. Como pueden haber múltiples
   * categorías se comprueba que la categoría "todos" no esté seleccionado para filtrar, sino se
   * devuelven todos los productos disponibles
   */
  const q =
    !parsedCategories.length ||
    parsedCategories.includes(MOCK_CATEGORIES.todos.value)
      ? productsCollection
      : query(productsCollection, where("category", "in", parsedCategories));

  // Se obtienen los documentos de la colección "products" pasando la query de filtrado
  const productList = await getDocs(q);

  const completeProductList = productList.docs.map((doc) => doc.data());

  const filteredProductList = completeProductList.filter(product => product.status === 'ACTIVE');

  const productWithImageURL = setImageURL(filteredProductList);

  return NextResponse.json(productWithImageURL);
}
