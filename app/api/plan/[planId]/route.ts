import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";

import Plan from "@/models/Plan";
// import { render } from "@react-email/render";
// import sendEmail from "@/constants/sendEmail";
import { use } from "react";

type Params = Promise<{ planId: string }>;

interface BodyProps {
  planName: string;
  minAmount: number;
  maxAmount: number;
  ROIDaily: number;
  totalROI: number;
  duration: number;
}

// Protectected route for admin
export const GET = async (request: Request, props: { params: Params }) => {
  try {
    const { planId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const plan = await Plan.findById<CoinProps>(planId);
    if (!plan) throw new Error("This Coin is not Available");

    return NextResponse.json(plan);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const PATCH = async (request: Request, props: { params: Params }) => {
  try {
    const { planId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const body: BodyProps = await request.json();

    const plan = await Plan.findById(planId);
    if (!plan) throw new Error("This Plan is not Available");

    await Plan.findByIdAndUpdate<CoinProps>(planId, { ...body });

    const updatedPlan = await Plan.findById(planId);
    return NextResponse.json(updatedPlan);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const DELETE = async (request: Request, props: { params: Params }) => {
  try {
    const { planId } = use(props.params);
    const session = await getServerSession(authOptions);
    const userSession = session?.user as { role: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (userSession?.role !== "admin")
      throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const deletedPlan = await Plan.findByIdAndDelete<CoinProps>(planId);
    if (!deletedPlan) throw new Error("This Coin is not Available");

    return NextResponse.json(deletedPlan);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
