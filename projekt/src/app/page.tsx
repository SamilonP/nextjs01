"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"

export default function Home() {
  const {data: session} = authClient.useSession()
  console.log('user', session?.user)
  const handleSignIn = async () => {
    await authClient.signIn.social({ provider: "github" })
  }

  return (
    <div className="m-0 p-0 box-content flex flex-col justify-center items-center w-full h-svh">
      <nav className="bg-gray-950">
        <Link href="/dashboard" className="font-black text-3xl">Go to dashboard</Link>
        {session?.user && (
        <div className="mt-3">
          <img src={session.user.image || ''} alt="profile" />
          <p className="text-3x1 font-mono decoration-double">{session.user.name}</p>
          <p>{session.user.email}</p>
          <p>login feature actually has no use lolololol</p>
        </div>
      )}
      </nav>
      { !session && <button onClick={handleSignIn}>Sign in and go to dashboard</button> }
    </div>
  );
}
