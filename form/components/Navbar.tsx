import React from "react"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
        </nav>
    )
}