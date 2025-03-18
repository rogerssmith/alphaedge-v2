import mongooseConnect from "@/lib/mongoose";
import Transaction from "@/models/Transaction";
import { NextResponse } from "next/server";
import { use } from "react";

type Params = Promise<{ transactionId: string }>;

export const GET = async (request: Request, props: { params: Params }) => {
  try {
    const { transactionId } = use(props.params);
    await mongooseConnect();
    const transaction = await Transaction.findOne({
      _id: transactionId,
    });
    if (!transaction) throw new Error("This transaction does not exist");
    return NextResponse.json(transaction);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
