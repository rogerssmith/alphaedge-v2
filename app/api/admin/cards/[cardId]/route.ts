import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/authOptions";
import Card from "@/models/Card";
import { use } from "react";

type Params = Promise<{ cardId: string }>;

export const DELETE = async (request: Request, props: { params: Params }) => {
  try {
    const { cardId } = use(props.params);

    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;

    if (!session?.user) throw new Error("Unauthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");

    await mongooseConnect();

    // Code logic
    const card = await Card.findByIdAndDelete(cardId);
    if (!card) throw new Error("No Card To Delete");

    return NextResponse.json({ message: "Card Deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
