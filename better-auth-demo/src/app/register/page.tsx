"use client"
import React, { useEffect } from 'react'
import { authClient } from "@/lib/auth-client";

export default function page() {
    async function register() {
        const { data, error } = await authClient.signUp.email({
            email: "gobaoga@gmail.com",
            password: "12345678",
            name: "gobaoa",
            callbackURL: "/dashboard"
        }, {
            onRequest: (ctx) => {
                console.log("ee")
            },
            onSuccess: (ctx) => {
                console.log("BHAHAH")
            },
            onError: (ctx) => {
                alert(JSON.stringify(ctx.error));
            },
        });
        console.log(error)
    }
    
    useEffect(() => {
        register()
    }, [])
    return (
        <div>pag</div>
    )
}