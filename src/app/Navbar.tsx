"use client"
import Link from "next/link"
export default function Navbar() {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-center bg-yellow-100 py-4 m-2 text-sm">
        <ul className="mx-auto flex gap-5">
            <Link href='/about'>About</Link>
            <Link href='/products'>Product</Link>
            <Link href='/contact'>Contact</Link>
        </ul>
    </div>
  )
}
