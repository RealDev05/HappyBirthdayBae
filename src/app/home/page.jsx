"use client"
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

var images = [...Array(15)];

export default function Page() {
    let { push } = useRouter();
    const [isAnswered, setIsAnswered] = useState(null);

    useEffect(() => {
        setIsAnswered((sessionStorage.getItem("Answered") != undefined && sessionStorage.getItem("Answered")) === 'true');
    }, []);

    const handleNotAnswered = () => {
        if(isAnswered==null){
            return;
        }
        setTimeout(function () {
            push("/");
        }, 8000);
        return (
            <div className="flex items-center justify-center min-h-screen bg-pink-200 pt-5">
                <Head>
                    <title>Happy Birthday!</title>
                    <meta name="description" content="A special birthday surprise" />
                </Head>
                <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-pink-600">No Babe, You can't ByPass my webpages, Answer me first, plzz.....</h1>
                </main>
            </div>
        );
    }

    return isAnswered ? (
        <div className="flex items-center justify-center min-h-screen bg-pink-200 pt-5">
            <Head>
                <title>Happy Birthday!</title>
                <meta name="description" content="A special birthday surprise" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-pink-600">I Love You So Much!</h1>
                <p className="mt-3 text-lg md:text-2xl text-pink-700 max-w-[90%] md:max-w-[80%]">
                    Bae, you mean the world to me. Your smile lights up my life, and I cherish every moment we spend together. 
                    Thank you for being you, and for letting me be a part of your life. I hope your birthday is filled with all the joy 
                    and love you deserve!
                </p>
                <div className='mt-8 text-2xl md:text-4xl text-pink-600 font-bold max-w-[90%] md:max-w-[80%]'>
                    Here are some of your pics 😁
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-4 w-[90%] md:w-[80%]">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden w-[43%] md:w-[18%] rounded-lg shadow-lg transform transition hover:scale-105">
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
    ) : handleNotAnswered();
}
