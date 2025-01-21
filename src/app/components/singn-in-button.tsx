'use client';
import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <>
    <button
      onClick={() => {
        login('github');
      }}
    >
      Sign in with GitHub
    </button>
    <button
      onClick={() => {
        login('google');
      }}
    >
      Sign in with Google
    </button>
    </>
  );
}