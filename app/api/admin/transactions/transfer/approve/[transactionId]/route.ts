import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import User from "@/models/User";
import Transaction from "@/models/Transaction";
import sendEmail from "@/constants/sendEmail";
import { render } from "@react-email/render";
import TransactionEmail from "@/email-templates/TransactionEmail";
import formatNumber from "@/constants/formatNumber";
import Company from "@/models/Company";
import { use } from "react";

type Params = Promise<{ transactionId: string }>;

// Protectected route for admin
export const PATCH = async (request: Request, props: { params: Params }) => {
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

    const companies = await Company.find({});
    const company: CompanyProps | null = companies[0];
    if (!company) throw new Error("No Comany info");

    const admin = await User.findById<userSchemaType>(userSession.id);
    if (!admin || admin.role !== "admin")
      throw new Error("User not found (UnAuthorized Access)");

    const transaction =
      await Transaction.findById<TransactionProps>(transactionId);
    if (!transaction) throw new Error("Transaction not found");

    const user = await User.findById<userSchemaType>(transaction.userId);
    if (!user) throw new Error("No user Found");

    if (transaction.amount > user.accountBalance)
      throw new Error("User do not have sufficient balance");

    await User.findByIdAndUpdate(transaction.userId, {
      $inc: { accountBalance: -transaction.amount },
    });

    await Transaction.findByIdAndUpdate(transactionId, {
      status: "successful",
      note: "Your Withdrawal has now being approved.",
    });

    //sending of email/////////////////////////////////////////////////////////////
    const updatedTransaction = await Transaction.findById(transactionId);
    if (!updatedTransaction) throw new Error("Transaction not found");

    const updatedUser = await User.findById<userSchemaType>(transaction.userId);
    if (!updatedUser) throw new Error("No user Found");

    const emailText = `Your ${updatedTransaction.title} of ${
      company.currency.symbol
    }${formatNumber(
      updatedTransaction.amount
    )} is approved. Your new balance is ${
      company.currency.symbol
    }${formatNumber(updatedUser.accountBalance)}`;
    const emailHtml = render(
      TransactionEmail({
        transaction: updatedTransaction,
        description: emailText,
        fullname: updatedUser.fullname,
        company,
      })
    );

    await sendEmail(
      updatedUser.email,
      `${updatedTransaction.title}`,
      emailText,
      await emailHtml,
      company
    );

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
