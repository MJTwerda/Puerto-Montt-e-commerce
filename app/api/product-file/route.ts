import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function POST(request: NextRequest) {

  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (file) {
    const refStorage = ref(storage, file.name);
    const fileSnapshot = await uploadBytes(refStorage, file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);
    
    // Se obtiene solo el valor de la imagen de la colección
    const productFileValue = fileURL.substring(fileURL.indexOf(`${file.name}`));
    return NextResponse.json({ ok: 1, message: 'Imagen subida exitosamente', fileURL: productFileValue }, { status: 200 });
  } else {
    return NextResponse.json({
      ok: 0,
      message: "Error al subir imagen de producto",
    }, { status: 400 });
  }
}