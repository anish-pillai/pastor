'use server';

import { auth } from "@/auth";
import { SignInButton } from "./components/singn-in-button";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  if(session?.user){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p>You are signed in as {session.user.email}</p>
          { session.user.image && <Image
            src={session.user.image}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full"
          />}
          {/* <button
            onClick={() => {
              logout();
            }}
          >
            Sign out
          </button> */}
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
