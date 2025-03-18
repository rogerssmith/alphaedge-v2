import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/mongoose";
import Transaction from "@/models/Transaction";
import { use } from "react";

type Params = Promise<{ userId: string }>;

export const GET = async (request: Request, props: { params: Params }) => {
  try {
    const { userId } = use(props.params);
    await mongooseConnect();
    const transactions = await Transaction.find({ userId: userId });
    return NextResponse.json(transactions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
