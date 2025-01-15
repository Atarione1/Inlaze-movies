"use client";
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import React, { Suspense } from 'react'

interface param {
  title: string;
  param: string;
}
export default function NavbarItemPage({ title, param }: param) {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <NavbarItem param={param} title={title} />
    </Suspense>
  )
}
function NavbarItem({ title, param }: param) {

  const searchParams = useSearchParams()
  const genero = searchParams.get('genre')
  return (
    <div className='mx-3 md:mx-10'>
      <Link className={` ${genero === param ? 'underline underline-offset-8 decoration-4 decoration-blue-700 rounded-lg' : ''}  hover:text-blue-500`} href={`/?genre=${param}&page=1`}>
        {title}
      </Link>
    </div>
  )
}