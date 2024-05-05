import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { validateMotive } from './validator';

export async function POST(request: NextRequest) {
  const userInfo = await request.json();
  if (!userInfo) {
    return NextResponse.json(
      { ok: 0, message: "Información inválida" },
      { status: 400 }
    );
  }
  const validate = validateMotive(userInfo.motive);
  if (!validate) {
    return NextResponse.json(
      { ok: 0, message: "Información inválida" },
      { status: 400 }
    );
  }

  try {
    let userCredentials = null;
    if (userInfo.motive === "register") {
      userCredentials = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
    }
    if (userInfo.motive === "login") {
      userCredentials = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
    }

    return userCredentials
      ? NextResponse.json(
          {
            user: userCredentials.user,
            ok: 1,
            message: `Operación exitosa: ${userInfo.motive}`,
          },
          { status: 200 }
        )
      : NextResponse.json(
          { ok: 0, message: `Error de operación: ${userInfo.motive}` },
          { status: 400 }
        );
  } catch (error) {
    console.error("Error de operación: ", error);
    return NextResponse.json(
      { ok: 0, message: `Error de operación: ${userInfo.motive}` },
      { status: 400 }
    );
  }
}
