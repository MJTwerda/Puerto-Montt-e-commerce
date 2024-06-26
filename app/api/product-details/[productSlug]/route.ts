import { NextRequest, NextResponse } from "next/server";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { validateProduct } from "../validators";
import { individualSetImageURL } from "../../utils/relatesProducts";

interface Params {
  params: { productSlug: string };
}

export async function GET(r: NextRequest, { params }: Params) {
  const docRef = doc(db, "products", params.productSlug);

  const productResult = await getDoc(docRef);

  if (productResult.exists() && productResult.data().status === "ACTIVE") {
    const productWithImageURL = individualSetImageURL(productResult.data());
    return NextResponse.json(productWithImageURL);
  } else {
    return NextResponse.json(null);
  }
}

/**
 * TODO: Debe agregarse validación de credenciales para poder ejecutar esta acción correctamente.
 * TODO: Intentar implementar transaction
 * Se hace un Soft delete del producto coincidente con el slug recibido por parámetro
 */
export async function DELETE(r: NextRequest, { params }: Params) {
  const docRef = doc(db, "products", params.productSlug);
  if (docRef) {
    await updateDoc(docRef, { status: "INACTIVE" });
  }
  return NextResponse.json({
    ok: 1,
    message: "Producto eliminado correctamente",
  });
}

/**
 * TODO: Debe agregarse validación de credenciales para poder modificar la info de un producto
 */
export async function PUT(request: NextRequest, { params }: Params) {
  const productData = await request.json();

  if (productData) {
    const validationInfo = validateProduct(productData);
    if (!validationInfo.ok) {
      return NextResponse.json(validationInfo, { status: 400 });
    }

    const docRef = doc(db, "products", params.productSlug);
    if (docRef) {
      await updateDoc(docRef, { ...productData });
      return NextResponse.json({
        ok: 1,
        message: "Producto modificado correctamente",
      }, { status: 200 });
    } else {
      return NextResponse.json({
        ok: 0,
        message: "Error al modificar producto",
      }, { status: 400 });
    }
  }
}
