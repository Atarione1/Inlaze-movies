"use client";
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import React from 'react'

interface param {
  title: string;
  param: string;
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

export default NavbarItem