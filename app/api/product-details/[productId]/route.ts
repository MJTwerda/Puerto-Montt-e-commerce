import { NextRequest, NextResponse } from "next/server";
import { sleep } from '../../../../utils/products';
import { AVAILABLE_PRODUCTS } from '../../../../constants/products';

interface Params {
  params: { productId: string; }
}

export async function GET(request: NextRequest, { params }: Params) {
  sleep(1200);
  const matchedProduct = AVAILABLE_PRODUCTS.find(product => product.id === params.productId);
    matchedProduct ? matchedProduct : null;
  
  return NextResponse.json(matchedProduct);
}
