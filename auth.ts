import NextAuth from "next-auth"
import github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({})
  ],
  session: {
    maxAge: 8 * 60 * 60 // 8H
  },
  secret: process.env.AUTH_SECRET
})