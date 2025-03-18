import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import { render } from "@react-email/render";
import sendEmail from "@/constants/sendEmail";
import Investment from "@/models/Investment";
import User from "@/models/User";
import Return from "@/models/Return";
import { use } from "react";

type Params = Promise<{ investmentId: string }>;

export const DELETE = async (request: Request, props: { params: Params }) => {
  try {
    const { investmentId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const investment = await Investment.findById<InvestmentProps>(investmentId);
    if (!investment) throw new Error("No Investment Found");
    if (investment.status === "active")
      throw new Error("You cannot delete an active investment");

    const deletedInvestment = await Investment.findByIdAndDelete(investmentId);

    await Return.deleteMany({ investmentId: investment._id });

    return NextResponse.json(deletedInvestment);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
