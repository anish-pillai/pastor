"use server";

import { signIn, signOut } from "@/auth";

type accountProviders = 'github' | 'google' | 'facebook' | 'twitter';

export const login = async (provider: accountProviders) => {
  await signIn(provider, { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};