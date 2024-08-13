import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const hashedPassword = bcrypt.hashSync(payload.password, 8);

    const data: Prisma.UserCreateInput = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    };
    const user = await prisma.user.create({
      data,
    });

    const dataRes: Partial<User> = {
      ...user,
      password: undefined,
    };
    // Simpan data ke dalam database di sini jika diperlukan
    // Misalnya: await prisma.user.create({ data });

    return Response({
      message: "User registered succesfully",
      data: dataRes,
    });
  } catch (error: any) {
    return Response({
      message: "User registration failed",
      data: error,
      status: 500,
    });
  }
}
