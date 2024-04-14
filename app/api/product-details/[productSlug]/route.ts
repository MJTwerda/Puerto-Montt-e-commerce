import { NextRequest, NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Params {
  params: { productSlug: string; }
}

export async function GET(r: NextRequest, { params }: Params) {

  const docRef = doc(db, 'products', params.productSlug);

  const productResult  = await getDoc(docRef);

  if(productResult.exists()) {
    return NextResponse.json(productResult.data());
  } else {
    return NextResponse.json(null);
  }
};
