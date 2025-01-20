'use server';

import { auth } from "@/auth";
import { SignInButton } from "./components/singn-in-button";
import { SignOutButton } from "./components/sign-out-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  if(session?.user){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Link href="/user-info"> User Info </Link>
          <SignOutButton />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          Footer content
        </footer>
      </div>
    )
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>You are not signed in</p>
        <SignInButton />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer content
      </footer>
    </div>
  );
}
