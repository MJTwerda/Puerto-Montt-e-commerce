import { NextRequest, NextResponse } from "next/server";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Params {
  params: { productSlug: string; }
}

export async function GET(r: NextRequest, { params }: Params) {

  const docRef = doc(db, 'products', params.productSlug);

  const productResult  = await getDoc(docRef);

  if(productResult.exists() && productResult.data().status === 'ACTIVE') {
    return NextResponse.json(productResult.data());
  } else {
    return NextResponse.json(null);
  }
};

/**
 * TODO: Debe agregarse validación de credenciales para poder ejecutar esta acción correctamente.
 * TODO: Intentar implementar transaction
 * Se hace un Soft delete del producto coincidente con el slug recibido por parámetro
 */
export async function DELETE(r: NextRequest, { params }: Params) {
  const docRef = doc(db, 'products', params.productSlug);
  if (docRef) {
    await updateDoc(docRef, { status: 'INACTIVE' });
  }
  return NextResponse.json({ ok: 1, message: 'Producto eliminado correctamente' });
}
