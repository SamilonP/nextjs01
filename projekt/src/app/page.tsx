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
    <div className="m-0 p-0 box-content">
      <nav className="bg-gray-950">
        <Link href="/dashboard">gdf</Link>
        {session?.user && (
        <div>
          <h2>{session.user.name}</h2>
          <p>{session.user.email}</p>
          <img src={session.user.image || ''} alt="profile" />
        </div>
      )}
      </nav>
      <button onClick={handleSignIn}>Sign in n i n</button>
    </div>
  );
}
