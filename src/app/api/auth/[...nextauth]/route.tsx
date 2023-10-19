import { authOptions } from "@/app/helpers/AuthOptions";
import { users } from "@/app/helpers/constants";
 import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";




const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


