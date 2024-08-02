'use client'
import { useRouter } from "next/router";

export default function Push(route) {
    return useRouter(route)
}