/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { Carousel } from '@material-tailwind/react';
export default function HeroSection() {
  return (
    <Carousel
      className="content-fit"
      transition={{ type: 'tween', duration: 1 }}
    >
      <img
        src="/vgu_1.jpeg"
        alt="image 1"
        className="h-auto w-full object-cover"
      />
      <img
        src="/vgu_1.jpeg"
        alt="image 2"
        className="h-auto w-full object-cover"
      />
      <img
        src="/vgu_1.jpeg"
        alt="image 3"
        className="h-auto w-full object-cover"
      />
    </Carousel>
  );
}
