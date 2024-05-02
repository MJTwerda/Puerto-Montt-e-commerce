import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function POST(request: NextRequest) {

  const formData = await request.formData();
  const file = formData.get('file') as File;
  // const file = await request.json();
  console.log('File Data:: ', file);

  if (file) {
    console.log('🙌🏼 🙌🏼 🙌🏼 Archivo recibido: ', file.name);
    const refStorage = ref(storage, file.name);
    const fileSnapshot = await uploadBytes(refStorage, file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);
    
    console.log('URL de Imagen subida --> ', fileURL);
    return NextResponse.json({ ok: 1, message: 'Imagen subida exitosamente' }, { status: 200 });
  } else {
    return NextResponse.json({
      ok: 0,
      message: "Error al subir imagen de producto",
    }, { status: 400 });
  }

}