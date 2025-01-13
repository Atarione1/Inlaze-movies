'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later.</h1>
      <button className='text-white bg-black rounded-lg w-20 h-10' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}