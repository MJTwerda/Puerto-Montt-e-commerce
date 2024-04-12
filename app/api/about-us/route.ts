import { NextRequest, NextResponse } from "next/server";

export const POST = (request: NextRequest) => {
  // console.log('Request -> ', request);

  return NextResponse.json('Se ejecutó el POST correctamente');
}