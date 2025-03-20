"use client";
import { authClient } from "@/lib/auth-client"

export default function LoginButton() {
  
  const { data: session } = authClient.useSession();
  return (
    <div>
      {session ? (
        <>
          <p>Välkommen, {session.user.name}!</p>
          <button onClick={() => authClient.signOut()}>Logga ut</button>
        </>
      ) : (
        <button onClick={() => authClient.signIn()}>Logga in</button>
      )}
    </div>
  );
}