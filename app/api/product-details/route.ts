import { NextRequest, NextResponse } from "next/server";
import { getDoc, doc, updateDoc, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { validateCreateProduct } from "./validators";

/**
 * TODO: Debe agregarse validación de credenciales para poder crear un nuevo producto
 */
 export async function POST(request: NextRequest) {
  const productData = await request.json();

  if(productData) {
    const validationInfo = validateCreateProduct(productData);
    if (!validationInfo.ok) {
      return NextResponse.json(validationInfo, { status: 400 });
    }

    // Creación de nuevo producto
    const docRef = await addDoc(collection(db, "products"), productData);
    if (docRef.id) {
      // Si la creación es exitosa se setea como slug el id del nuevo producto creado
      const existentDocRef = doc(db, "products", docRef.id);
      const productResult = await getDoc(docRef);
      if (productResult.exists()) {
        await updateDoc(existentDocRef, { ...productData, slug: docRef.id });
        return NextResponse.json({
          ok: 1,
          message: "Producto creado correctamente",
        }, { status: 200 });
      }
      return NextResponse.json({ ok: 0, message: 'Error en la creación' }, { status: 500 });
    }
    return NextResponse.json({ ok: 0, message: 'Error en la creación' }, { status: 500 });
  }
};