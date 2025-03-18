import mongoogeConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import User from "@/models/User";
import Investment from "@/models/Investment";
import Return from "@/models/Return";
import { use } from "react";

type Params = Promise<{ investmentId: string }>;

export const GET = async (request: Request, props: { params: Params }) => {
  try {
    const { investmentId } = use(props.params);
    const session = await getServerSession(authOptions);
    if (!session?.user) throw new Error("UnAuthorized Access");
    const userId = (session.user as { id: string }).id;
    await mongoogeConnect();

    const investment = await Investment.findById(investmentId);
    if (!investment) throw new Error("No Investment found");

    const returns = await Return.find<ReturnProps>({
      investmentId: investmentId,
    });

    return NextResponse.json({ investment, returns: returns.reverse() });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
