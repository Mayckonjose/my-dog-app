'use client'

import React from "react";
import Link from 'next/link';

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default function HeroSection() {
  return (
    
    <div className="w-full bg-brandSecondary py-16 px-4 flex flex-col items-center justify-center text-center">
      <Link href="/" passHref className="flex items-center gap-2 mb-4">
        <HeartIcon />
        <h1 className="text-5xl font-extrabold text-brandTextLight"> {/* Use brandTextLight */}
          Dog Gallery
        </h1>
      </Link>
      <p className="text-xl text-brandTextLight max-w-2xl"> {/* Use brandTextLight */}
        Explore uma incrível coleção de raças de cães de todo o mundo. Descubra,
        admire e apaixone-se pelos nossos amigos de quatro patas!
      </p>
    </div>
  );
}