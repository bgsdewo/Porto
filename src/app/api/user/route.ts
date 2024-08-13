import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Get all users",
      data: [
        {
          id: 1,
          name: "Taufan",
        },
        {
          id: 2,
          name: "Fadhilah",
        },
      ],
    },
    {
      status: 200,
    }
  );
}

export async function POST() {
  return NextResponse.json(
    {
      success: true,
      message: "Get all users",
      data: [
        {
          id: 3,
          name: "Mas Bagus",
        },
      ],
    },
    {
      status: 200,
    }
  );
}
