import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import { render } from "@react-email/render";
import sendEmail from "@/constants/sendEmail";
import Company from "@/models/Company";

interface BodyProps {
  minimum: number;
  maximum: number;
  percentToPay: number;
  mode: "direct-mode" | "pending-mode";
  allowTransferIfPendingAvailable: "yes" | "no";
}

// Protectected route for admin
export const POST = async (request: Request) => {
  try {
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const body: BodyProps = await request.json();
    const companies = await Company.find({});
    const company: CompanyProps | null = companies[0];
    if (!company) throw new Error("No Comany info");

    await Company.findByIdAndUpdate(company._id, {
      transfer: {
        minimum: body.minimum,
        maximum: body.maximum,
        percentToPay: body.percentToPay,
        mode: body.mode,
        allowTransferIfPendingAvailable: body.allowTransferIfPendingAvailable,
      },
    });

    return NextResponse.json("something");
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
