import React from 'react'
import { authClient } from "@/lib/auth-client";

export default async function page() {
    const { data, error } = await authClient.signIn.email({
        email: "gobaoga@gmail.com",
        password: "12345678",
        callbackURL: "/dashboard"
    }, {
        onRequest: (ctx) => {
            
        },
        onSuccess: (ctx) => {
            console.log("H")
        },
        onError: (ctx) => {
            alert(ctx.error.message);
        },
    });

    return (
        <div>pag</div>
    )
}
