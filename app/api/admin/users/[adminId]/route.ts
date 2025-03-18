import mongooseConnect from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/app/api/auth/authOptions";
import User from "@/models/User";
import { use } from "react";

type Params = Promise<{ adminId: string }>;

// Protectected route for admin
export const GET = async (request: Request, props: { params: Params }) => {
  try {
    const { adminId } = use(props.params);
    const session = await getServerSession(authOptions);
    const user = session?.user as { role: string; id: string } | undefined;
    if (!session?.user) throw new Error("UnAuthorized Access");
    if (user?.role !== "admin") throw new Error("This is a protected route");
    await mongooseConnect();
    //code logic
    const admin = await User.findById<userSchemaType>(adminId);

    if (!admin || adminId !== user.id || admin.role !== "admin")
      throw new Error("You're not authorized");

    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
