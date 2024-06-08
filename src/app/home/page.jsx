"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

var images = [
  "20221113_162809.jpg",
  "IMG-20221003-WA0014.jpg",
  "IMG-20221004-WA0000.jpg",
  "IMG-20221004-WA0001.jpg",
  "IMG-20221004-WA0079.jpg",
  "IMG-20221004-WA0080.jpg",
  "IMG-20221004-WA0081.jpg",
  "IMG-20221004-WA0083.jpg",
  "IMG-20221005-WA0001.jpg",
  "IMG-20221006-WA0032.jpg",
  "IMG-20221028-WA0002.jpg",
  "IMG-20221028-WA0050.jpg",
  "IMG-20221028-WA0051.jpg",
  "IMG-20221029-WA0007.jpg",
  "IMG-20221103-WA0002.jpg",
  "IMG-20221103-WA0003.jpg",
  "IMG-20221108-WA0008.jpg",
  "IMG-20221108-WA0011.jpg",
  "IMG-20221114-WA0009.jpg",
  "IMG-20221117-WA0018.jpg",
  "IMG-20221119-WA0005.jpg",
  "IMG-20221120-WA0007.jpg",
  "IMG-20221120-WA0008.jpg",
  "IMG-20221120-WA0009.jpg",
  "IMG-20221120-WA0010.jpg",
  "IMG-20221120-WA0011.jpg",
  "IMG-20221120-WA0012.jpg",
  "IMG-20221120-WA0013.jpg",
  "IMG-20221120-WA0014.jpg",
  "IMG-20221120-WA0015.jpg",
  "IMG-20221120-WA0016.jpg",
  "IMG-20221120-WA0017.jpg",
  "IMG-20221120-WA0018.jpg",
  "IMG-20221120-WA0019.jpg",
  "IMG-20221120-WA0020.jpg",
  "IMG-20221120-WA0021.jpg",
  "IMG-20221120-WA0022.jpg",
  "IMG-20221120-WA0023.jpg",
  "IMG-20221120-WA0024.jpg",
  "IMG-20221120-WA0026.jpg",
  "IMG-20221120-WA0027.jpg",
  "IMG-20221120-WA0028.jpg",
  "IMG-20221120-WA0029.jpg",
  "IMG-20221120-WA0030.jpg",
  "IMG-20221120-WA0031.jpg",
  "IMG-20221120-WA0032.jpg",
  "IMG-20221120-WA0033.jpg",
  "IMG-20221120-WA0034.jpg",
  "IMG-20221120-WA0035.jpg",
  "IMG-20221120-WA0036.jpg",
  "IMG-20221120-WA0037.jpg",
  "IMG-20221120-WA0038.jpg",
  "IMG-20221120-WA0042.jpg",
  "IMG-20221120-WA0043.jpg",
  "IMG-20221120-WA0044.jpg",
  "IMG-20221120-WA0045.jpg",
  "IMG-20221120-WA0046.jpg",
  "IMG-20221120-WA0047.jpg",
  "IMG-20221120-WA0048.jpg",
  "IMG-20221120-WA0049.jpg",
  "IMG-20221120-WA0053.jpg",
  "IMG-20221120-WA0054.jpg",
  "IMG-20221120-WA0057.jpg",
  "IMG-20221120-WA0058.jpg",
  "IMG-20221120-WA0059.jpg",
  "IMG-20221120-WA0060.jpg",
  "IMG-20221120-WA0061.jpg",
  "IMG-20221120-WA0062.jpg",
  "IMG-20221120-WA0063.jpg",
  "IMG-20221120-WA0064.jpg",
  "IMG-20221120-WA0065.jpg",
  "IMG-20221120-WA0066.jpg",
  "IMG-20221120-WA0067.jpg",
  "IMG-20221120-WA0068.jpg",
  "IMG-20221120-WA0069.jpg",
  "IMG-20221120-WA0070.jpg",
  "IMG-20221120-WA0071.jpg",
  "IMG-20221120-WA0072.jpg",
  "IMG-20221120-WA0073.jpg",
  "IMG-20221120-WA0074.jpg",
  "IMG-20221120-WA0077.jpg",
  "IMG-20221120-WA0078.jpg",
  "IMG-20221120-WA0079.jpg",
  "IMG-20221121-WA0000.jpg",
  "IMG-20221121-WA0005.jpg",
  "IMG-20221204-WA0004.jpg",
  "IMG-20221204-WA0005.jpg",
  "IMG-20221204-WA0006.jpg",
  "IMG-20221204-WA0007.jpg",
  "IMG-20221204-WA0008.jpg",
  "IMG-20221204-WA0009.jpg",
  "IMG-20221204-WA0010.jpg",
  "IMG-20221204-WA0011.jpg",
  "IMG-20221204-WA0012.jpg",
  "IMG-20221204-WA0013.jpg",
  "IMG-20221204-WA0014.jpg",
  "IMG-20221204-WA0015.jpg",
  "IMG-20221204-WA0016.jpg",
  "IMG-20221218-WA0008.jpg",
  "IMG-20221218-WA0009.jpg",
  "IMG-20221218-WA0010.jpg",
  "IMG-20221218-WA0011.jpg",
  "IMG-20221218-WA0012.jpg",
  "IMG-20221218-WA0013.jpg",
  "IMG-20221222-WA0016.jpg",
  "IMG-20221222-WA0017.jpg",
  "IMG-20221224-WA0041.jpg",
  "IMG-20221224-WA0042.jpg",
  "IMG-20221224-WA0043.jpg",
  "IMG-20221224-WA0049.jpg",
  "IMG-20221224-WA0056.jpg",
  "IMG-20221224-WA0057.jpg",
  "IMG-20221224-WA0058.jpg",
  "IMG-20221224-WA0061.jpg",
  "IMG-20221227-WA0002.jpg",
  "IMG-20221227-WA0003.jpg",
  "IMG-20221227-WA0004.jpg",
  "IMG-20221227-WA0006.jpg",
  "IMG-20221227-WA0007.jpg",
  "IMG-20221227-WA0008.jpg",
  "Screenshot_20221003-095617_WhatsApp.jpg",
  "Screenshot_20221004-210421_WhatsApp.jpg",
  "Screenshot_20221028-181339_WhatsApp.jpg",
  "Screenshot_20221102-155736_WhatsApp.jpg",
  "Screenshot_20221102-155812_WhatsApp.jpg",
  "Screenshot_20221108-022232_WhatsApp.jpg",
  "Screenshot_20221111-214624_WhatsApp.jpg",
  "Screenshot_20221111-214629_WhatsApp.jpg",
  "Screenshot_20221111-214634_WhatsApp.jpg",
  "Screenshot_20221116-174909_WhatsApp.jpg",
  "Screenshot_20221117-193319_WhatsApp.jpg",
  "Screenshot_20221209-022706_WhatsApp.jpg",
  "Screenshot_20221213-022849_WhatsApp.jpg",
  "Screenshot_20221213-023852_WhatsApp.jpg",
  "Screenshot_20221213-024001_WhatsApp.jpg",
  "Screenshot_20221213-024114_WhatsApp.jpg",
  "Screenshot_20221228-015543_Instagram.jpg",
  "Screenshot_20221228-015630_Instagram.jpg",
];

export default function Page() {
  let { push } = useRouter();
  const [isAnswered, setIsAnswered] = useState(null);

  useEffect(() => {
    setIsAnswered(
      (sessionStorage.getItem("Answered") != undefined &&
        sessionStorage.getItem("Answered")) === "true"
    );
  }, []);

  const handleNotAnswered = () => {
    if (isAnswered == null) {
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
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
            No Babe, You can't ByPass my webpages, Answer me first, plzz.....
          </h1>
        </main>
      </div>
    );
  };

  return isAnswered ? (
    <div className="flex items-center justify-center min-h-screen bg-pink-200 pt-5">
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="A special birthday surprise" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
          I Love You So Much!
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-pink-700 max-w-[90%] md:max-w-[80%]">
          Bae, you mean the world to me. Your smile lights up my life, and I
          cherish every moment we spend together. Thank you for being you, and
          for letting me be a part of your life. I hope your birthday is filled
          with all the joy and love you deserve!
        </p>
        <div className="mt-8 text-2xl md:text-4xl text-pink-600 font-bold max-w-[90%] md:max-w-[80%]">
          Here are some of your pics 😁
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 w-[90%] md:w-[80%]">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden w-[43%] md:w-[18%] flex items-center flex-row bg-black rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <Image
                src={`/media/image/${image}`}
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
  ) : (
    handleNotAnswered()
  );
}
