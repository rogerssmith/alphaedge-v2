import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
