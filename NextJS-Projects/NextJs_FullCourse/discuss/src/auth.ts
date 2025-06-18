import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "@auth/core/providers/github";
import {prisma} from './lib/index'

if(!process.env.GITHUB_CLIENT_ID|| !process.env.GITHUB_CLIENT_SECRET){
  throw new Error('Missing environment variables for GitHub OAuth')
}

export const {handlers:{GET, POST}, auth, signIn, signOut,} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
