"use client"
import { authClient } from "@/lib/auth-client"
import LoginButton from "@/components/LoginButton"

export default function DashboardPage() {

  const { 
    data: session, 
    isPending, //loading state
    error, //error object
    refetch //refetch the session
} = authClient.useSession() 
  console.log(session)
  if (!session) {
    return <div>jkfgnjkdf</div>
  }


  return (
    <div>
      <h1>Välkommen till Dashboarden, {session.user.name}!</h1>
      <LoginButton></LoginButton>
    </div>
  );
}