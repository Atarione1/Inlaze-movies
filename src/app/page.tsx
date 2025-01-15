"use client";

import Home from '@/components/home';
import React, { Suspense } from 'react'

export default function HomePage() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Home />
    </Suspense>
  )
}
