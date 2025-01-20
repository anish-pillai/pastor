import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaClient } from "@prisma/client/extension"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  // adapter: PrismaAdapter({ prisma: new PrismaClient() }),
})