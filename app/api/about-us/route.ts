import { NextRequest, NextResponse } from "next/server";

// TODO: Este método se usará para enviar un correo electrónico al comercio
export const POST = (request: NextRequest) => {
  // console.log('Request -> ', request);

  return NextResponse.json('Se ejecutó el POST correctamente');
}