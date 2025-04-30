"use client"
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const githubLogin = async () => {
    await authClient.signIn.social({ provider: "github" })
  }

  return (
    <div>
      <button onClick={githubLogin}>Login with gibthbut</button>
    </div>
  );
}
