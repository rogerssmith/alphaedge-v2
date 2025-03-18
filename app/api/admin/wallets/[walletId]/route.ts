import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import { render } from "@react-email/render";
import sendEmail from "@/constants/sendEmail";
import Wallet from "@/models/Wallet";
import { use } from "react";

type Params = Promise<{ walletId: string }>;

// Protectected route for admin
export const DELETE = async (request: Request, props: { params: Params }) => {
  try {
    const { walletId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic
    const wallet = await Wallet.findByIdAndDelete(walletId);
    if (!wallet) throw new Error("NO Wallet To Delete");
    return NextResponse.json({ message: "Wallet deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
