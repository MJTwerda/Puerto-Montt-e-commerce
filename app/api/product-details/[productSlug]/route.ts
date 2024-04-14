import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Params {
  params: { productSlug: string; }
}

export async function GET(request: NextRequest, { params }: Params) {
  const productCollections = collection(db, 'products');

  const q = query(productCollections, where('slug', '==', params.productSlug));

  const matchedProduct = await getDocs(q) || null;

  /**
   * Se devuelve el primer elemento encontrado con el slug (Si bien el slug debe ser único a 
   * cada registro)
   */ 
  const matchedProductResponse = matchedProduct.docs[0].data() || null;
  
  return NextResponse.json(matchedProductResponse);
};
