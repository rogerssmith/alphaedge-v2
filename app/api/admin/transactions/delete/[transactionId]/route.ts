import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import User from "@/models/User";
import Transaction from "@/models/Transaction";
import { use } from "react";

type Params = Promise<{ transactionId: string }>;

// Protectected route for admin
export const DELETE = async (request: Request, props: { params: Params }) => {
  try {
    const { transactionId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as
      | { role: string; id: string }
      | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic
    const admin = await User.findById<userSchemaType>(userSession.id);
    if (!admin || admin.role !== "admin")
      throw new Error("User not found (UnAuthorized Access)");

    const deletedTransaction =
      await Transaction.findByIdAndDelete(transactionId);

    return NextResponse.json(deletedTransaction);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
