'use client';

import Link from 'next/link';
import { useEffect } from 'react';
export default function Error({ error }: any) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center  w-screen h-screen bg-gray-100'>
      <h1>Something went wrong. Please try again later.</h1>
      <Link href={"/?genre=fetchPopular&page=1"}>
        <button className='text-white bg-black rounded-lg w-20 h-10' >
          Try Again
        </button>
      </Link>
    </div>
  );
}