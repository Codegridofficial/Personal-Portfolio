"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { InstantRedirect } from '@/utils/redirect.js'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        InstantRedirect(router)
    }, [router])

    return null
}