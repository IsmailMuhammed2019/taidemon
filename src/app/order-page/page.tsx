"use client"

import { useRouter } from "next/navigation" 

export default function Orderpage () {
    const route = useRouter()
    const handleClick = () => {
        alert("Your order has been placed")
        route.push("/")
    }

    return (
        <div>
            <h1>Place your order here</h1>
            <button onClick={handleClick}>place order</button>
        </div>
    )
}