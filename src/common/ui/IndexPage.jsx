"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IndexPage() {
  let { push } = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && !sessionStorage.getItem("Answered")) {
      sessionStorage.setItem("Answered", false);
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="A special birthday surprise" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
          Happy Birthday, Bae!
        </h1>
        <p className="mt-6 md:mt-8 text-xl md:text-2xl text-pink-700">
          You're the most amazing person in my life, and I hope your birthday is
          as wonderful as you are! Another year without those promises ? I don't
          think so
        </p>
        <div className="mt-6 md:mt-8 rounded-full shadow-lg bg-pink-100 relative w-48 h-48 md:w-64 md:h-64 p-52 md:p-52">
          <div className="p-52">
            <Image
              width={200}
              height={200}
              src="/media/image/cake.png"
              alt="Birthday Cake"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-8">
          <button
            className="px-6 md:px-8 py-3 md:py-4 bg-pink-600 text-white rounded-full shadow-lg transform transition hover:scale-105"
            onClick={() => push("/proposal")}
          >
            Click for a Surprise!
          </button>
        </div>
      </main>
    </div>
  );
}
