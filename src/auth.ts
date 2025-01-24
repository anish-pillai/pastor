import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/lib/db/schema';

export const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Google],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
