import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

var images=[...Array(15)];


export default function page() {
  return (
  <div className="flex items-center justify-center min-h-screen bg-pink-200 pt-5">
    <Head>
      <title>Happy Birthday!</title>
      <meta name="description" content="A special birthday surprise" />
    </Head>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold text-pink-600">I Love You So Much!</h1>
      <p className="mt-3 text-2xl text-pink-700 max-w-[80%]">
        Bae, you mean the world to me. Your smile lights up my life, and I cherish every moment we spend together. 
        Thank you for being you, and for letting me be a part of your life. I hope your birthday is filled with all the joy 
        and love you deserve!
      </p>
      <div className='mt-8 text-4xl text-pink-600 font-bold max-w-[80%]'>
        Heres some of your pics 😁
      </div>
      <div className="mt-6 grid grid-cols-1 w-[80%] sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105">
            <Image
              src={`/media/image/image/${image}`}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </main>
  </div>
  )
}
