import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import Transaction from "@/models/Transaction";
import User from "@/models/User";
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
    const user = session?.user as { role: string; id: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (user?.role !== "admin") throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic

    const companies = await Company.find({});
    const company: CompanyProps | null = companies[0];
    if (!company) throw new Error("No Comany info");

    const admin = await User.findById(user.id);
    if (!admin || admin.role !== "admin")
      throw new Error("No user found (UnAuthorized Access)");

    const transaction =
      await Transaction.findById<TransactionProps>(transactionId);
    if (!transaction) throw new Error("No Transaction Found");

    await Transaction.findByIdAndUpdate(transactionId, {
      status: "successful",
      note: "Congrats, we approved your loan. Check your pending balance, follow the instruction the pending transaction to spend your money.",
    });

    const loanUser = await User.findByIdAndUpdate(transaction.userId, {
      $inc: { loanBalance: transaction.amount },
    });

    const percentage = company.transfer.percentToPay / 100; // 15% as a decimal
    const newAccountBalTransaction = new Transaction<TransactionProps>({
      title: "Loan Received",
      amount: transaction.amount,
      senderName: `${company.name} Loan`,
      status: "pending",
      userId: transaction.userId,
      category: "money-received",
      pendingBalance: transaction.amount,
      amountToDeposit: transaction.amount * percentage, //15% of the recieved amount
      despositedAmount: 0,
    });
    const savedTransaction = await newAccountBalTransaction.save();

    const emailText = `We have Approved your loan of ${
      company.currency.symbol
    }${formatNumber(
      savedTransaction.amount
    )}. Follow the intructions in the pending transaction to spend the loan.`;
    const emailHtml = render(
      TransactionEmail({
        transaction: savedTransaction,
        description: emailText,
        fullname: loanUser.fullname,
        company,
      })
    );

    await sendEmail(
      loanUser.email,
      "Loan approved",
      emailText,
      await emailHtml,
      company
    );
    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
