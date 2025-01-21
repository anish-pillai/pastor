'use server';

import { auth } from "@/auth";
import { SignInButton } from "./components/singn-in-button";
import { SignOutButton } from "./components/sign-out-button";
import Link from "next/link";
import Layout from "./components/layout";

export default async function Home() {
  const session = await auth();
  return (
    <Layout>
      {session?.user ? (
        <>
          <Link href="/user-info"> User Info </Link>
          <SignOutButton />
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <SignInButton />
        </>
      )}
    </Layout>
  );
}
