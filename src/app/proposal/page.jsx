"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

export default function Page() {
    let {push} = useRouter();
    const [saidYes, setSaidYes] = useState(false);
    const [yesX, setYesX] = useState(7);
    const [yesY, setYesY] = useState(3.5);
    const [noTop, setNoTop] = useState('5%');
    const [noLeft, setNoLeft] = useState('80%');

    const yesRef = useRef(null);
    const [yesRect, setYesRect] = useState(null);

    const noRef = useRef(null);
    const [noRect, setNoRect] = useState(null);

    const [styleNum, setStyleNum] = useState(0);

    const [yesButtonStyles, setYesButtonStyles] = useState([
        'px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
        'px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
        'px-6 py-3 bg-red-500 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
        'px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
        'px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
        'px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4',
    ]);

    const saidYesStyle = 'px-6 py-3 bg-green-500 text-white rounded-full shadow-lg transform transition hover:scale-105 md:px-8 md:py-4';

    useEffect(() => {
        if (yesRef.current) {
            const rect = yesRef.current.getBoundingClientRect();
            setYesRect(rect);
        }
    }, [yesY]);

    useEffect(() => {
        const rect1 = yesRect;
        const rect2 = noRect;

        if (rect1 == null || rect2 == null) {
            return;
        }

        const overlap = rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y;

        if (overlap) {
            generateRandomNoPos();
        }

    }, [noRect, yesRect]);

    useEffect(() => {
        if (noRef.current) {
            const rect = noRef.current.getBoundingClientRect();
            setNoRect(rect);
        }
    }, [noLeft]);

    const generateRandomNoPos = () => {
        setNoTop(Math.random() * 80 + '%');
        setNoLeft(Math.random() * 80 + '%');
    }

    const handleNoHover = () => {
        generateRandomNoPos();
        setStyleNum((styleNum + 1) % yesButtonStyles.length);
        setYesX(yesX + 1);
        setYesY(yesY + 0.5);
    };

    const handleYesClick = () => {
        setSaidYes(true);
        sessionStorage.setItem("Answered", true);
        setTimeout(function () {
            alert("Hooray!! She said YES 🥰");
            push("/home");
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-200 relative overflow-hidden">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl -mt-5 font-bold text-pink-600">Before that,</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-pink-600">Will You Marry Me, Babe 🥹?</h1>
                <p className="mt-3 text-xl md:text-2xl text-pink-700">
                    You're the most amazing person in my life, and I can't imagine my life without you!
                </p>
                <div className="mt-6 relative w-full h-full flex items-center justify-center">
                    <button
                        ref={yesRef}
                        onClick={handleYesClick}
                        className={saidYes ? saidYesStyle : yesButtonStyles[styleNum]}
                        style={{ width: yesX + 'rem', height: yesY + 'rem', fontSize: yesY / 3 + 'rem' }}
                    >
                        Yes
                    </button>
                    <button
                        ref={noRef}
                        onMouseEnter={handleNoHover}
                        onClick={handleNoHover}
                        style={{ position: 'absolute', top: noTop, left: noLeft }}
                        className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg md:px-8 md:py-4"
                    >
                        No
                    </button>
                </div>
            </main>
        </div>
    );
}
