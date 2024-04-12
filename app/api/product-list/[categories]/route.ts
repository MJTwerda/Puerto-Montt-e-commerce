import { NextRequest, NextResponse } from "next/server";
import { MOCK_CATEGORIES, AVAILABLE_PRODUCTS } from "@/constants/products";
import { sleep } from '../../../../utils/products';

interface Params {
  params: {
    categories: string;
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  const { categories} = params;
  // Se parse el param "categories" separando las categorías por la ","
  const parsedCategories = categories.length ? categories.split(',') : categories;
  /**
   * Se filtran los productos según las categorías recibidas por params. Como pueden haber múltiples
   * categorías se comprueba que la categoría "todos" no esté seleccionado para filtrar, sino se 
   * devuelven todos los productos disponibles
   */
  const filteredProductList =
    !parsedCategories.length || parsedCategories.includes(MOCK_CATEGORIES.todos.value) ? AVAILABLE_PRODUCTS :
      AVAILABLE_PRODUCTS.filter(product => parsedCategories.includes(product.category));


  await sleep(1600);
  return NextResponse.json(filteredProductList)
}